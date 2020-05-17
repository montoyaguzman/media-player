function AutoPlay(){}

AutoPlay.prototype.run = function(player) {
    console.log('run...', this)
    player.mute()
    player.play()
}

export default AutoPlay