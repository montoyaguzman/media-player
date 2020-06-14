import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector('video')
const buttonPlay = document.querySelector('#play')
const buttonSound = document.querySelector('#sound')
const player = new MediaPlayer( {el: video, plugins: [
    new AutoPlay()
    ]} )
    
buttonPlay.onclick = () => {
    !player.isPlaying
        ? player.play()
        : player.pause()
    player.isPlaying = !player.isPlaying
}

buttonSound.onclick = () => {
    !player.existSound
        ? player.unmute()
        : player.mute()
    player.existSound = !player.existSound
}