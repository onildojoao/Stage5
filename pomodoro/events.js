import {
  playButton,
  pauseButton,
  stopButton,
  soundOffButton,
  soundOnButton,
  setButton,
} from "./config.js"

export default function ({ controls, timer, sound }) {
  playButton.addEventListener("click", () => {
    controls.play()
    timer.startCountdown()
    sound.pressButton()
  })

  pauseButton.addEventListener("click", () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  stopButton.addEventListener("click", () => {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  soundOnButton.addEventListener("click", () => {
    soundOnButton.classList.add("hide")
    soundOffButton.classList.remove("hide")
    sound.bgAudio.pause()
  })

  soundOffButton.addEventListener("click", () => {
    soundOnButton.classList.remove("hide")
    soundOffButton.classList.add("hide")
    sound.bgAudio.play()
  })

  setButton.addEventListener("click", () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    //chosenMinutes = newMinutes
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
}
