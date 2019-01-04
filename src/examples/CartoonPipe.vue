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
            camera.position.z = 10
            camera.position.y = 0.75

            var light = new THREE.HemisphereLight(0xeeee66, 0xff0000, 1)
            scene.add(light)

            // reusable material
            const mat = new THREE.MeshLambertMaterial({
                color: 0xffffff
            })

            // sphere
            const geo = new THREE.CylinderGeometry(2, 2, 15, 32)
            ref.pipe = new THREE.Mesh(geo, mat)
            ref.pipe.rotateZ(Math.PI / 2)
            scene.add(ref.pipe)
        },
        update() {}
    }
}
</script>
