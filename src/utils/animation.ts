import { throttle } from 'shuutils'

export const _rotate = (element: HTMLElement, direction = ''): HTMLElement => {
  let rotate = direction === 'left' ? 180 : 0 // or right by default
  if (direction === 'down') rotate = 90
  else if (direction === 'up') rotate = 260
  element.style.transform = `rotate(${rotate}deg)`
  return element
}

export const rotate = throttle(_rotate, 100)
