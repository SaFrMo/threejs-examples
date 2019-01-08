<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'

const ref = {}

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    methods: {
        start({ scene, camera }) {
            camera.position.y = 0.75
            camera.position.z = 10

            // reusable material
            const mat = new THREE.MeshLambertMaterial({
                color: 0xffffff
            })

            // sphere
            const geo = new THREE.SphereGeometry(4, 64, 64)
            ref.sphere = new THREE.Mesh(geo, mat)
            scene.add(ref.sphere)
        },
        update() {}
    }
}
</script>
