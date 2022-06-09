import { ready, select, selectAll } from "./helpers.js"
import Prompt from "./Prompt.js"
import Modal from "./Modal.js"
import Navigation from "./Navigation.js"
import NavigationHandler from "./NavigationHandler.js"
import Page from "./Page.js"

ready(main)
async function main() {
  const modal = new Modal(select("[data-modal]"))
  const nav = new Navigation(select("[data-nav]"))
  new NavigationHandler(nav, modal,
    selectAll("[data-target]").map(p => new Page(p))
  )

  const prompt = new Prompt({
    prompt: select("[data-prompt-text]"),
    border: select("[data-prompt]"),
    triangle: select("[data-triangle]")
  })

  await showIntro(prompt)
  {
    prompt.hide()
    nav.show()
  }

}

async function showIntro(prompt) {
  await prompt.text("Good Morning")
  await prompt.text("My name is Muhammad Moeen")
  await prompt.text("Welcome to my Portfolio website")
  await prompt.clear()
  await prompt.animateTriangle()
}