<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'

// Copied from https://codepen.io/EastingAndNorthing/pen/QpYWQq?editors=0010

const ref = { particles: [] }
let geo = null
let mat = null

class Particle {
    constructor(x, y, z, vm, scene) {
        this.pos = new THREE.Vector3(x, y, z)
        this.vel = new THREE.Vector3(0, 0, 0)
        this.acc = new THREE.Vector3(0, 0, 0)
        this.vel = new THREE.Euler(0, 0, 0)
        this.mesh = new THREE.Points(geo, mat)
        this.vm = vm

        // TODO: is this necessary?
        this.mesh.geometry.dynamic = true
        this.mesh.geometry.verticesNeedUpdate = true
        this.acc.multiplyScalar()

        scene.add(this.mesh)
    }

    // update
    update() {
        // set acceleration to 1,1,1
        this.acc.set(1, 1, 1)
        // TODO: what does applyEuler actually change?
        this.acc.applyEuler(this.angle)
        // TODO: what happens when these change?
        this.acc.multiplyScalar(this.vm.noiseStrength)

        // clamp min and max values
        this.acc.clampLength(0, this.vm.particleSpeed)
        this.vel.clampLength(0, this.vm.particleSpeed)

        // apply acceleration
        this.vel.add(this.acc)
        // apply transformation
        this.pos.add(this.vel)

        // keep particles in bounds
        if (this.pos.x > this.vm.size) this.pos.x = 0 + Math.random()
        if (this.pos.y > this.vm.size) this.pos.y = 0 + Math.random()
        if (this.pos.z > this.vm.size) this.pos.z = 0 + Math.random()
        if (this.pos.x < 0) this.pos.x = this.vm.size - Math.random()
        if (this.pos.y < 0) this.pos.y = this.vm.size - Math.random()
        if (this.pos.z < 0) this.pos.z = this.vm.size - Math.random()

        // move mesh!
        this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z)
    }
}

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    data() {
        return {
            noiseStrength: 0.8,
            particleSpeed: 0.1,
            size: 50,

            numParticles: 200
        }
    },
    methods: {
        start({ scene, camera }) {
            camera.position.y = 0.75
            camera.position.z = 10

            // add light
            // scene.add(new THREE.HemisphereLight(0xff0033, 0x9900ff, 1))

            // geometry
            geo = new THREE.Geometry()
            geo.vertices.push(new THREE.Vector3(0, 0, 0))

            // material
            mat = new THREE.PointsMaterial({
                color: '#ff0000',
                size: 0.2,
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            })
        },
        update({ scene }) {
            if (mat == null) {
                return
            }

            // make sure we have enough particles
            while (ref.particles.length < this.numParticles) {
                const p = new Particle(
                    THREE.Math.randFloatSpread(this.size),
                    THREE.Math.randFloatSpread(this.size),
                    THREE.Math.randFloatSpread(this.size),
                    this,
                    scene
                )
                ref.particles.push(p)
            }
        }
    }
}
</script>
