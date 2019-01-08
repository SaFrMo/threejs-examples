<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'
import { PerlinNoise } from '../utils/shared'
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
            numParticles: 2000,

            // noise
            noiseScale: 0.1,
            noiseOffset: 0,
            noiseSpeed: 0.01,
            // enter seed as return value of `random`
            simplex: new Simplex({ random: () => 1 }),

            // wind
            windFieldWidth: 5,
            windFieldHeight: 5
        }
    },
    methods: {
        start({ camera, scene }) {
            // move camera back
            camera.position.z = 3

            // "wind" will be a 1d array of Vector2s, from top left to bottom right
            ref.wind = []
            for (let y = 0; y < this.windFieldWidth; y++) {
                for (let x = 0; x < this.windFieldHeight; x++) {
                    const noise =
                        (this.simplex.noise(
                            x * this.noiseScale,
                            y * this.noiseScale
                        ) +
                            1) /
                        2
                    const vector = new THREE.Vector3(noise, 0, 0)
                    const arrow = new THREE.ArrowHelper(
                        vector.clone().normalize(),
                        new THREE.Vector3(
                            this.size * (x / this.windFieldWidth) -
                                this.size / 2,
                            this.size * (y / this.windFieldHeight) -
                                this.size / 2,
                            0.1
                        ),
                        vector.x,
                        0x0000ff,
                        0.1,
                        0.1
                    )
                    scene.add(arrow)

                    ref.wind.push({
                        vector,
                        arrow
                    })
                }
            }

            // geometry (this will just be an array of Vector3s for points)
            const geo = new THREE.Geometry()
            geo.vertices.push(new THREE.Vector3(0, 0, 0))

            // material
            const mat = new THREE.PointsMaterial({
                color: '#cc0000',
                size: 0.2,
                transparent: true,
                opacity: 0.3,
                blending: THREE.AdditiveBlending
            })

            // add initial points
            for (let i = 0; i < this.numParticles; i++) {
                geo.vertices.push(
                    new THREE.Vector3(
                        THREE.Math.randFloatSpread(this.size),
                        THREE.Math.randFloatSpread(this.size),
                        0
                        // THREE.Math.randFloat(0, this.size / 2)
                    )
                )
            }

            // save points
            ref.points = new THREE.Points(geo, mat)

            // add points to scene
            scene.add(ref.points)
        },
        update({ scene }) {
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
            // // apply updates
            // ref.points.geometry.verticesNeedUpdate = true
        }
    }
}
</script>
