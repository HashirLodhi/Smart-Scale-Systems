import mitt from 'mitt'

export default class Sizes {
    constructor(container) {
        this.emitter = mitt()
        this.container = container || window

        const rect = this.container.getBoundingClientRect
            ? this.container.getBoundingClientRect()
            : { width: window.innerWidth, height: window.innerHeight }

        this.width = rect.width
        this.height = rect.height
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        window.addEventListener('resize', () => {
            const newRect = this.container.getBoundingClientRect
                ? this.container.getBoundingClientRect()
                : { width: window.innerWidth, height: window.innerHeight }

            this.width = newRect.width
            this.height = newRect.height
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.emitter.emit('resize')
        })
    }
}
