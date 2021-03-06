class AutoPause {

    constructor() {
        this.threshold = 0.25
        this.handlerInterception = this.handlerInterception.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }

    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerInterception, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)

        document.addEventListener('visibilitychange', this.handlerVisibilityChange)
    }

    handlerInterception(entries) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        
        isVisible
            ? this.player.play()
            : this.player.pause()

    }

    handlerVisibilityChange() {
        const isVisible = document.visibilityState === 'visible'
        isVisible
            ? this.player.play()
            : this.player.pause()
    }

}

export default AutoPause