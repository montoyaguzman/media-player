class AutoPause {

    constructor() {
        this.threshold = 0.25
        this.handlerInterception = this.handlerInterception.bind(this)
    }

    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerInterception, {
            threshold: this.threshold
        })
        observer.observe(this.player.media)
    }

    handlerInterception(entries) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        
        isVisible
            ? this.player.play()
            : this.player.pause()

    }

}

export default AutoPause