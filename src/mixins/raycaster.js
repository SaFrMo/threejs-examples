import * as THREE from 'three'
import { pointer, transform } from 'popmotion'
import { asyncWaitFor } from '@/utils/shared'
const { interpolate } = transform

export default {
    data() {
        return {
            raycaster: new THREE.Raycaster(),
            mouseX: 0,
            mouseY: 0,
            canvasSelector: 'canvas'
        }
    },
    async mounted() {
        await asyncWaitFor(this.canvasSelector)

        pointer()
            .pipe(v => {
                v.x -= this.clientRect.left
                v.y -= this.clientRect.top

                v.x = interpolate([0, this.clientRect.width], [-1, 1])(v.x)
                v.y = interpolate([0, this.clientRect.height], [1, -1])(v.y)

                return v
            })
            .start(v => {
                this.mouseX = v.x
                this.mouseY = v.y
            })
    },
    methods: {
        updateRaycaster(camera) {
            this.raycaster.setFromCamera(
                new THREE.Vector2(this.mouseX, this.mouseY),
                camera
            )
        }
    }
}
