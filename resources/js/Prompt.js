import Component from "./Component.js"
import { sleep } from "./helpers.js"

export default class Prompt extends Component {
  #promptBorder
  #triangle
  #animateOpts
  #triangleAnimationHandle

  constructor({ prompt, border, triangle }) {
    super(prompt)
    this.#promptBorder = border
    this.#triangle = triangle

    this.#animateOpts = {
      easing: 'ease-in-out',
      fill: 'forwards',
    }

    this.animateTriangle()
  }

  async text(text, delay = 1) {
    await sleep(delay * 1000)
    this.element.innerText = text

    this.#triangleAnimationHandle.cancel()
    this.#animateText()
    this.#animateBorder()
  }

  async clear(delay = 1) {
    await sleep(delay * 1000)
    this.element.innerText = ""
  }

  async #animateText() {
    this.element.animate([
      { opacity: '0' },
      { opacity: '1.0' },
    ], { ...this.#animateOpts, duration: 150 })
  }

  async #animateBorder() {
    this.#promptBorder.animate([
      { transform: "scale(0.9)" },
      { transform: "scale(1.0)" },
    ], { ...this.#animateOpts, duration: 100 })
  }

  async animateTriangle() {
    this.#triangleAnimationHandle = this.#triangle.animate([
      { opacity: "0" },
      { opacity: "1" },
    ], {
      ...this.#animateOpts,
      duration: 400,
      iterations: Infinity,
      direction: 'alternate',
    })
  }
}
