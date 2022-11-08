//Constantes
let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnPlayAgain = document.querySelector("#btnPlayAgain")
let xAttempts = 1
//Eventos
btnTry.addEventListener("click", handleTryClick)
btnPlayAgain.addEventListener("click", handlePlayAgainClick)
document.addEventListener("keydown", enterEventListener)
//Funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  console.log(randomNumber)
  console.log(Number(inputNumber.value))
  console.log(xAttempts)

  if (Number(inputNumber.value) != "") {
    if (Number(inputNumber.value) == randomNumber) {
      toggleDivDisplay()

      screen2.querySelector(
        "h2"
      ).innerText = `Acertou em ${xAttempts} tentativas!`
    }
    inputNumber.value = ""
    inputNumber.focus()
    xAttempts++
  }
}

function handlePlayAgainClick(event) {
  toggleDivDisplay()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleDivDisplay() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterEventListener(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handlePlayAgainClick()
  }
}
