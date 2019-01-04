<template>
    <div>
        <vue-three-wrap :start="start" :update="update" />

        <!-- Vertex shader -->
        <script id="vertexShader" type="x-shader/x-vertex">
            uniform vec2 uvScale;
            varying vec2 vUv;
            varying vec3 vNormal;
            uniform float time;

            void main() {
                vUv = uvScale * uv;

                // build extruded position
                vec3 extrude = normal * sin(time * 0.001) ;
                vec3 pos = position + extrude;

                vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );
                vNormal = normal;


                gl_Position = projectionMatrix * mvPosition;
            }
        </script>

        <!-- Fragment shader -->
        <script type="x-shader/x-fragment" id="fragmentShader">
            varying vec3 vNormal;
            varying vec2 vUv;
            uniform vec3 color;

            void main() {
                vec3 light = vec3( 0.5, 0.2, 1.0 );
                light = normalize( light );
                float dProd = dot( vNormal, light ) * 0.5 + 0.5;
                gl_FragColor = vec4( vec3( dProd ) * vec3( color ), 1.0 );
            }
        </script>
    </div>
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'

const ref = {}
let mountTime = 0

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    methods: {
        async start({ scene, camera }) {
            mountTime = Date.now()

            camera.position.z = 10
            camera.position.y = 0.75

            // uniforms
            const uniforms = {
                amplitude: { value: 1.0 },
                color: { value: new THREE.Color(0xcc4444) },
                time: { value: Date.now() }
            }

            // shader material
            const shaderMat = new THREE.ShaderMaterial({
                uniforms,
                vertexShader: document.getElementById('vertexShader')
                    .textContent,
                fragmentShader: document.getElementById('fragmentShader')
                    .textContent
            })

            // sphere
            const geo = new THREE.CylinderGeometry(2, 2, 15, 32)
            ref.pipe = new THREE.Mesh(geo, shaderMat)
            ref.pipe.rotateZ(Math.PI / 2)
            scene.add(ref.pipe)
        },
        update() {
            ref.pipe.material.uniforms.time.value = Date.now() - mountTime
        }
    }
}
</script>
