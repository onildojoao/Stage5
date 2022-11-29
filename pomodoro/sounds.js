export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  )
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  )

  buttonPressAudio.volume = 0.2

  kitchenTimer.volume = 0.02

  bgAudio.volume = 0.3
  bgAudio.loop

  function pressButton() {
    buttonPressAudio.play()
  }
  function timeEnd() {
    kitchenTimer.play()
  }
  /* function bgAudioStart() {
    bgAudio.play()
  } */

  return {
    pressButton,
    timeEnd,
    bgAudio,
  }
}
