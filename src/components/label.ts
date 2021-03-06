import { div, h2, h3 } from 'shuutils'

export const label = (id = '', title = '', subtitle = ''): HTMLElement => {
  const wrapper = div(`${id}-label text-center text-white opacity-80`)
  const titleElement = h2('title text-5xl leading-tight animate-pulse', title)
  titleElement.style.filter = 'drop-shadow(2px 4px 2px black)'
  titleElement.style.animationIterationCount = '3'
  wrapper.append(titleElement)
  wrapper.append(h3('subtitle text-2xl', subtitle))
  return wrapper
}
