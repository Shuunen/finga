import { image, on, throttle } from 'shuutils'

export const hand = image('hand transition-transform h-64 w-64 z-10', 'hand.svg', 'hand image')

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
  const { x, height, y, width } = hand.getBoundingClientRect()
  const center = { x: Math.round(x + (height / 2)), y: Math.round(y + (width / 2)) }
  const left = Math.round(event.x - center.x)
  const up = Math.round(event.y - center.y)
  const right = left * -1
  const down = up * -1
  const closest = Math.min(right, down, left, up)
  if (right === closest) return onDirectionThrottled('right')
  if (down === closest) return onDirectionThrottled('down')
  if (left === closest) return onDirectionThrottled('left')
  if (up === closest) return onDirectionThrottled('up')
})
