class Experiment {
  // Group Details
  static rollNos = '102103799,102103809,102103808' 
  static names = 'Triumphing Trio(Manvendra Raj Singh, Tanmay Relan, Ajaybeer Singh)'

  canvasSel = '#myCanvas'

  run() {

    // Run the Steppers
    // this.runSteppers()

    // Hide Steppers
    this.hideSteppers()
    canvasSetup(this.canvasSel)

    // Clock
    // --------------------------------------------------
    const clock = new Clock(this.canvasSel)
    // const ms = document.timeline.currentTime
    // clock.draw(ms)
    // clock.draw(ms+25000)
    const clockRafFn = (ts) => {
      clock.draw(ts)
      window.requestAnimationFrame(clockRafFn)
    }
    const clockRaf = window.requestAnimationFrame(clockRafFn)
    
  }

  runSteppers() {

    // Steppers
    // --------------------------------------------------
    const stepperOneRaf
	  = window.requestAnimationFrame(stepperOne)

    const stepperTwoRaf
	  = window.requestAnimationFrame(stepperTwo)

    const stepperThree = new StepperThree(
      '#valueFromStepperThree', 15
    )
    const stepperThreeFn = (ts) => {
      if (!stepperThree.isActive) stepperThree.start()
      stepperThree.step(ts)
      window.requestAnimationFrame(stepperThreeFn)
    }
    const stepperThreeRaf
	  = window.requestAnimationFrame(stepperThreeFn)
    // --------------------------------------------------
    
  }

  hideSteppers() {
    document.querySelector('#side-note')
      .classList.add('hidden')
  }
}
