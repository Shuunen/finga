import { dom, h1, on } from 'shuutils'

export const title = h1('title animate animate-bounce overflow-hidden w-full md:w-1/2 text-3xl transform skew-x-12 font-bold text-white backdrop-filter backdrop-blur backdrop-brightness-75 text-center')

const animation = dom('style', '', '@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); }}')
title.append(animation)

const content = dom('span', 'marquee transform inline-block whitespace-nowrap', 'Finga!')
const size = '40vw'
content.style.textShadow = `${size} 0 currentColor, calc(${size} * 2) 0 currentColor, calc(${size} * 3) 0 currentColor, calc(${size} * 4) 0 currentColor`
content.style.animation = 'marquee 2s linear infinite'
content.style.filter = 'drop-shadow(2px 4px 6px black)'
title.append(content)

let score = 0
let total = 0
on('score', (increment: number) => {
  score += increment
  const awesomeness = Math.max(Math.round(score / ++total * 100), 0)
  const punctuation = awesomeness <= 30 ? '  ' : (awesomeness >= 70 ? '!!' : '! ')
  const color = awesomeness <= 30 ? 'yellow' : (awesomeness >= 70 ? 'greenyellow' : 'white')
  const speed = awesomeness <= 30 ? '2s' : (awesomeness >= 70 ? '.2s' : '1s')
  title.style.animationDuration = speed
  content.style.color = color
  content.textContent = ` ${awesomeness}% ${punctuation} `
})
