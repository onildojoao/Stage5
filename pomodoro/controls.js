export default function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
}) {
  function reset() {
    pauseButton.classList.add("hide")
    stopButton.classList.add("hide")
    setButton.classList.remove("hide")
    playButton.classList.remove("hide")
  }

  function play() {
    playButton.classList.add("hide")
    pauseButton.classList.remove("hide")
    setButton.classList.add("hide")
    stopButton.classList.remove("hide")
  }

  function pause() {
    pauseButton.classList.add("hide")
    playButton.classList.remove("hide")
  }

  function getMinutes() {
    let newChosenMinutes = prompt("Quantos minutos deseja reservar?")
    if (!newChosenMinutes) {
      return false
    }

    return newChosenMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes,
  }
}
