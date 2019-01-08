<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'
// import { PerlinNoise } from '../utils/shared'
import { wrap } from '@popmotion/popcorn'
import Simplex from 'perlin-simplex'

const ref = {}

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    data() {
        return {
            // particles
            particleSpeed: 0.1,
            size: 5,
            numParticles: 200,
            particleSize: 0.2,

            // noise
            noiseScale: 0.1,
            noiseOffset: 0,
            noiseSpeed: 0.005,
            // enter seed as return value of `random`
            simplex: new Simplex({ random: () => 1 }),

            // wind
            windFieldWidth: 5,
            windFieldHeight: 5,
            windStrength: 0.05
        }
    },
    methods: {
        start({ camera, scene }) {
            // move camera back
            camera.position.x = 2.5
            camera.position.y = 2.5
            camera.position.z = 4
            // camera.lookAt(new THREE.Vector3(0, 0, 0))

            // "wind" will be a 1d array of Vector2s, from top left to bottom right
            ref.wind = []

            // for each wind cell...
            for (let y = 0; y < this.windFieldWidth; y++) {
                for (let x = 0; x < this.windFieldHeight; x++) {
                    // run noise function on cell coordinates
                    const noise =
                        (this.simplex.noise(
                            x * this.noiseScale,
                            y * this.noiseScale
                        ) +
                            1) /
                        2
                    const vector = new THREE.Vector3(noise, 0, 0)

                    // build a helper arrow
                    const arrowPosition = new THREE.Vector3(
                        this.size * (x / this.windFieldWidth),
                        this.size * (y / this.windFieldHeight),
                        0
                    )
                    const arrow = new THREE.ArrowHelper(
                        vector.clone().normalize(),
                        arrowPosition,
                        vector.x,
                        0x0000ff,
                        2,
                        2
                    )
                    // scene.add(arrow)

                    // save the vector and the arrow
                    ref.wind.push({
                        vector,
                        arrow
                    })
                }
            }

            // geometry (this will just be an array of Vector3s for points)
            const geo = new THREE.Geometry()

            // material
            const mat = new THREE.PointsMaterial({
                color: '#cc0000',
                size: this.particleSize,
                transparent: true,
                opacity: 1,
                blending: THREE.AdditiveBlending
            })

            // prep to save particles
            // particles include the vertex as well as
            // the current acceleration and velocity
            ref.particles = []

            // build particles
            for (let i = 0; i < this.numParticles; i++) {
                const position = new THREE.Vector3(
                    THREE.Math.randFloat(0, this.size),
                    THREE.Math.randFloat(0, this.size),
                    0
                )

                // save to points geometry
                geo.vertices.push(position)

                // save to particles
                ref.particles.push({
                    position,
                    acceleration: new THREE.Vector3(0, 0, 0),
                    velocity: new THREE.Vector3(0, 0, 0)
                })
            }

            // save points
            ref.points = new THREE.Points(geo, mat)

            // add points to scene
            scene.add(ref.points)
        },
        update() {
            // update noise offset
            this.noiseOffset += this.noiseSpeed

            // update wind
            ref.wind.forEach((v, i) => {
                // get coordinates of this wind vector
                const x = i % this.windFieldWidth
                const y = Math.floor(i / this.windFieldWidth)

                // get new noise value
                const noise =
                    this.simplex.noise(
                        x * this.noiseScale + this.noiseOffset,
                        y * this.noiseScale
                    ) +
                    1 / 2

                // update actual vector
                v.vector.set(noise, 0, 0)
                // see https://github.com/aframevr/aframe-inspector/issues/524
                v.arrow.setLength(Math.max(noise, 0.00001))
            })

            const cellWidth = this.size / this.windFieldWidth
            const cellHeight = this.size / this.windFieldHeight
            const w = wrap(0, this.size)

            ref.particles.forEach(p => {
                // get nearest wind vector
                const x = w(Math.floor(p.position.x / cellWidth))
                const y = w(Math.floor(p.position.y / cellHeight))
                const linearIndex = y * this.windFieldWidth + x

                const nearestWindVector = ref.wind[linearIndex].vector.clone()

                p.velocity.set(
                    nearestWindVector.x,
                    nearestWindVector.y,
                    nearestWindVector.z
                )
                p.velocity.multiplyScalar(this.windStrength)

                p.position.x = w(p.position.x + p.velocity.x)
                p.position.y = w(p.position.y + p.velocity.y)
                // p.position.y = this.size / 2
                // p.position.set(x, p.position.y, 0)
                // p.position.add(
                //     new THREE.Vector3(-this.size / 2, -this.size / 2)
                // )

                // update actual vertex
                // ref.points.geometry.vertices[i].set(p.position)
            })

            // update each vertex
            // ref.points.geometry.vertices.forEach(v => {
            //     const delta =
            //         this.simplex.noise(v.x, v.y) *
            //         this.noiseScale *
            //         this.particleSpeed
            //
            //     this.noiseOffset += this.noiseSpeed
            //
            //     // build new position
            //     v.add(new THREE.Vector3(Math.abs(delta), 0, 0))
            //     // build position wrapper
            //     const w = wrap(-this.size / 2, this.size / 2)
            //     // wrap to ensure we stay in bounds
            //     v.set(w(v.x), w(v.y), w(v.z))
            // })
            //
            // apply updates
            ref.points.geometry.verticesNeedUpdate = true
        }
    }
}
</script>
