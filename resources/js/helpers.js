export function ready(callback) {
  document.addEventListener("DOMContentLoaded", callback)
}

export function select(selector) {
  const element = document.querySelector(selector)
  if (!element) {
    throw new Error(`Element with selector ${selector} not found`)
  }
  return element
}

export function selectAll(selector) {
  const elements = document.querySelectorAll(selector)
  if (!elements) {
    throw new Error(`Elements with selector ${selector} not found`)
  }
  return [...elements]
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
} 

