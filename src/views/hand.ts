import { image, on, throttle } from 'shuutils'

export const hand = image('hand transition-transform w-80 max-w-xs mt-32 w-screen z-10', 'hand.svg', 'hand image')

const onDirection = (direction = '') => {
  console.log('set direction', direction)
  let rotate = direction === 'left' ? 180 : 0 // or right by default
  if (direction === 'down') rotate = 90
  else if (direction === 'up') rotate = 260
  hand.style.transform = `rotate(${rotate}deg)`
}

const onDirectionThrottled = throttle(onDirection, 100)

on('keydown', (event: KeyboardEvent) => {
  if (!event.key.startsWith('Arrow')) return
  const direction = String(event.key.slice(5).toLowerCase())
  onDirectionThrottled(direction)
})

on('click', (event: MouseEvent) => {
  const { height, width } = document.body.getBoundingClientRect()
  const left = event.x
  const up = event.y
  const right = width - left
  const down = height - up
  const closest = Math.min(right, down, left, up)
  if (right === closest) return onDirectionThrottled('right')
  if (down === closest) return onDirectionThrottled('down')
  if (left === closest) return onDirectionThrottled('left')
  if (up === closest) return onDirectionThrottled('up')
})
