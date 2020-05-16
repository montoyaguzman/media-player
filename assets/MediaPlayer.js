function MediaPlayer(config) {
    this.media = config.el
    this.isPlaying = false
}

MediaPlayer.prototype.play = function() {
    this.media.play()
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}

export default MediaPlayer