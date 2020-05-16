import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector('video')
const button = document.querySelector('button')
const player = new MediaPlayer( {el: video} )
    
button.onclick = () => {
    !player.isPlaying
        ? player.play()
        : player.pause()
    player.isPlaying = !player.isPlaying
}