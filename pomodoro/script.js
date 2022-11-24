const playButton = document.querySelector(".play")
const pauseButton = document.querySelector(".pause")
const stopButton = document.querySelector(".stop")
const setButton = document.querySelector(".set")
const soundOnButton = document.querySelector(".sound-on")
const soundOffButton = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let chosenMinutes, chosenSeconds

function countdown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    if (minutes <= 0) {
      pauseButton.classList.add("hide")
      stopButton.classList.add("hide")
      setButton.classList.remove("hide")
      playButton.classList.remove("hide")
      return
    }

    if (seconds <= 0) {
      seconds = 2

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    countdown()
  }, 1000)
}

playButton.addEventListener("click", () => {
  playButton.classList.add("hide")
  pauseButton.classList.remove("hide")
  setButton.classList.add("hide")
  stopButton.classList.remove("hide")

  countdown()
})

pauseButton.addEventListener("click", () => {
  pauseButton.classList.add("hide")
  playButton.classList.remove("hide")
})

stopButton.addEventListener("click", () => {
  pauseButton.classList.add("hide")
  stopButton.classList.add("hide")
  setButton.classList.remove("hide")
  playButton.classList.remove("hide")
})

soundOnButton.addEventListener("click", () => {
  soundOnButton.classList.add("hide")
  soundOffButton.classList.remove("hide")
})

soundOffButton.addEventListener("click", () => {
  soundOnButton.classList.remove("hide")
  soundOffButton.classList.add("hide")
})

setButton.addEventListener("click", () => {
  chosenMinutes = prompt("Quantos minutos deseja reservar?")
  minutesDisplay.textContent = String(chosenMinutes).padStart(2, "0")
})
