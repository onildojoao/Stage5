import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  minutesDisplay,
  secondsDisplay,
} from "./config.js"

const controls = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

Events({ controls, timer, sound })
