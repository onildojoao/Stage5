import Sound from "./sounds.js"

//Colocar tudo o que preciso numa função
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut
  let chosenMinutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, chosenSeconds) {
    newMinutes = newMinutes === undefined ? chosenMinutes : newMinutes
    chosenSeconds = chosenSeconds === undefined ? 0 : chosenSeconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(chosenSeconds).padStart(2, "0")
  }

  function reset() {
    updateDisplay(chosenMinutes, 0)
    clearTimeout(timerTimeOut)
  }

  function startCountdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let timerFinished = minutes <= 0 && seconds <= 0
      updateDisplay(minutes, 0)

      if (timerFinished) {
        resetControls()
        updateDisplay()
        Sound().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
      startCountdown()
    }, 1000)
  }

  function updateMinutes(newMinutes) {
    chosenMinutes = newMinutes
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }
  //Retorna um objeto com as coisas que você precisa para o outro escopo
  return {
    startCountdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
}
