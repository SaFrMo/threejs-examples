<template>
    <vue-three-wrap ref="canvas" class="shape-clicker" :start="start" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'
import raycaster from '@/mixins/raycaster'
import rect from 'fh-components/mixins/rect'
// import { listen } from 'popmotion'
// import _get from 'lodash/get'

const ref = {}
let toCheck = []

export default {
    mixins: [raycaster, rect],
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    mounted() {
        // not great, but this is just a proof of concept
        this.$el.parentNode.addEventListener('mousedown', this.onClick)
    },
    data() {
        return {
            canvasSelector: '.shape-clicker'
        }
    },
    methods: {
        start({ scene, camera }) {
            // add light
            ref.light = new THREE.PointLight(0xdddddd, 2)
            ref.light.castShadow = true
            ref.light.position.x = -5
            ref.light.position.y = 10
            scene.add(ref.light)

            // add torus knot
            const mat1 = new THREE.MeshLambertMaterial({
                color: 'hsl(0, 50%, 50%)'
            })
            const torusKnotGeo = new THREE.TorusKnotGeometry(10, 3, 100, 16)
            ref.torusKnot = new THREE.Mesh(torusKnotGeo, mat1)
            ref.torusKnot.position.set(-35, -30, -60)
            scene.add(ref.torusKnot)

            // add closer torus
            const mat2 = new THREE.MeshLambertMaterial({
                color: 'hsl(250, 50%, 50%)'
            })
            ref.torusKnot2 = new THREE.Mesh(torusKnotGeo, mat2)
            ref.torusKnot2.position.set(0, 30, -60)
            scene.add(ref.torusKnot2)

            // one last torus
            const mat3 = new THREE.MeshLambertMaterial({
                color: 'hsl(200, 50%, 50%)'
            })
            ref.torusKnot3 = new THREE.Mesh(torusKnotGeo, mat3)
            ref.torusKnot3.position.set(35, -30, -60)
            scene.add(ref.torusKnot3)

            // save shapes to check on click
            toCheck = [ref.torusKnot, ref.torusKnot2, ref.torusKnot3]

            // move camera
            camera.position.z = 10
        },
        onClick() {
            this.updateRaycaster(this.$refs.canvas._props.camera)
            // eslint-disable-next-line
            console.log(this.raycaster.intersectObjects(toCheck))
        }
    }
}
</script>
