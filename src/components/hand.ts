import { image, on } from 'shuutils'
import { rotate } from '../utils'

export const hand = image('hand transition-transform h-64 w-64 z-10', 'hand.svg', 'hand image')

on('keydown', (event: KeyboardEvent) => {
  if (!event.key.startsWith('Arrow')) return
  const direction = String(event.key.slice(5).toLowerCase())
  rotate(hand, direction)
})

on('click', (event: MouseEvent) => {
  const { x, height, y, width } = hand.getBoundingClientRect()
  const center = { x: Math.round(x + (height / 2)), y: Math.round(y + (width / 2)) }
  const left = Math.round(event.x - center.x)
  const up = Math.round(event.y - center.y)
  const right = left * -1
  const down = up * -1
  const closest = Math.min(right, down, left, up)
  if (right === closest) return rotate(hand, 'right')
  if (down === closest) return rotate(hand, 'down')
  if (left === closest) return rotate(hand, 'left')
  if (up === closest) return rotate(hand, 'up')
})

