<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'
import { PerlinNoise } from '../utils/shared'
import { wrap } from '@popmotion/popcorn'

// Copied from https://codepen.io/EastingAndNorthing/pen/QpYWQq?editors=0010

const ref = { particles: [] }

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    data() {
        return {
            particleSpeed: 0.01,
            size: 5,
            numParticles: 2000
        }
    },
    methods: {
        start({ camera, scene }) {
            camera.position.z = 3

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
            ref.points.geometry.vertices.forEach(v => {
                // build new position
                v.add(new THREE.Vector3(this.particleSpeed, 0, 0))
                // build position wrapper
                const w = wrap(-this.size / 2, this.size / 2)
                // wrap to ensure we stay in bounds
                v.set(w(v.x), w(v.y), w(v.z))
            })

            // apply updates
            ref.points.geometry.verticesNeedUpdate = true
        }
    }
}
</script>
