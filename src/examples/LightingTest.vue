<template>
    <div class="lighting">
        <vue-three-wrap :start="start" :update="update" />

        <div :class="['controls-wrap', { opened: show }]">
            <button @click="show = !show">⚙️</button>

            <ul class="controls" v-if="show">
                <li v-for="(light, i) in lights" :key="i">
                    <input
                        type="radio"
                        :value="light.name"
                        :id="light.name"
                        v-model="currentLight"
                    />
                    <label :for="light.name" v-html="light.name" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'

const ref = {}

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    data() {
        return {
            show: false,
            lights: [],
            currentLight: 'ambient'
        }
    },
    methods: {
        start({ scene, camera }) {
            camera.position.y = 0.75
            camera.position.z = 10

            // reusable material
            const mat = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide
            })

            // sphere
            const geo = new THREE.SphereGeometry(4, 64, 64)
            ref.sphere = new THREE.Mesh(geo, mat)
            scene.add(ref.sphere)

            // plane
            const plane = new THREE.PlaneGeometry(20, 10)
            ref.plane = new THREE.Mesh(plane, mat)
            ref.plane.position.y = -4.2
            ref.plane.rotation.set(THREE.Math.degToRad(90), 0, 0)
            scene.add(ref.plane)

            // add lights
            const color = 0x44cc44
            // ambient
            const ambient = new THREE.AmbientLight(color)
            this.lights.push({
                name: 'ambient',
                light: ambient
            })
            scene.add(ambient)

            // directional
            const directional = new THREE.DirectionalLight(color, 0.5)
            directional.position.set(0, 1, 2)
            directional.target.position.set(0, 0, 0)
            this.lights.push({
                name: 'directional',
                light: directional
            })
            scene.add(directional)

            // update lights
            this.updateLights()
        },
        update() {
            // ref.plane.rotation.y += 0.1
        },
        updateLights() {
            this.lights.forEach(l => {
                l.light.visible = this.currentLight == l.name
            })
        }
    },
    watch: {
        currentLight() {
            this.updateLights()
        }
    }
}
</script>

<style lang="scss">
.lighting .controls-wrap {
    position: absolute;
    top: 37px;
    right: 0;
    left: 0;
    padding: 3px;

    button {
        border: 1px solid black;
        display: block;
        box-shadow: 2px 2px black;

        outline: none;
    }

    // controls
    .controls {
        list-style: none;
        padding: 5px;
        position: absolute;
        top: 0;
        right: 3px;
        text-align: right;
        background: rgba(white, 0.8);
    }

    // opened
    &.opened {
        button {
            transform: translate(1px, 1px);
            box-shadow: 1px 1px black;
            background: #ddd;
        }
    }
}
</style>
