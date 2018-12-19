<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import * as THREE from 'three'
import VueThreeWrap from 'vue-three-wrap'
import { tween, easing } from 'popmotion'

const ref = {}

export default {
    data() {
        return {
            masterX: 0,
            masterRotation: 0
        }
    },
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    methods: {
        // TODO: 4-5 boxes bumbling from side to side - stop in place and face camera on hover
        start({ scene, camera }) {
            // add light
            ref.dirLight1 = new THREE.DirectionalLight(0xffffff, 1)
            ref.dirLight1.position.set(1, 0, 1)
            scene.add(ref.dirLight1)

            ref.dirLight2 = new THREE.DirectionalLight(0xefefef, 0.5)
            ref.dirLight2.position.set(-1, 0, 1)
            scene.add(ref.dirLight2)

            // add cubes
            ref.cubes = []

            for (let i = 0; i < 5; i++) {
                const geometry = new THREE.IcosahedronGeometry(1, 1, 1)
                const material = new THREE.MeshLambertMaterial({
                    color: 0xffffff
                })
                const color = new THREE.Mesh(geometry, material)

                const wireMat = new THREE.MeshBasicMaterial({
                    color: 0x333333,
                    wireframe: true
                })
                const wire = new THREE.Mesh(geometry, wireMat)
                wire.scale.set(1.01, 1.01, 1.01)

                const cube = new THREE.Group()
                cube.add(color)
                cube.add(wire)

                cube.position.y = 6 - i * 3

                ref.cubes.push(cube)
                scene.add(cube)
            }

            // add cube tween
            ref.cubeTween = tween({
                from: -8,
                to: 8,
                flip: Infinity,
                duration: 4000,
                ease: easing.easeInOut
            }).start(v => (this.masterX = v))

            // move camera
            camera.position.z = 10
        },
        update() {
            this.masterRotation += 0.01
            ref.cubes.forEach((cube, i) => {
                cube.position.x = this.masterX
                cube.rotation.x = cube.rotation.z = this.masterRotation
            })
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

.class {
}
</style>
