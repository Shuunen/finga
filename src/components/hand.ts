import { emit, image, on, sleep } from 'shuutils'
import { rotate } from '../utils'

export const hand = image('hand transition-transform h-64 w-64 z-10', 'hand.svg', 'hand image')

let direction = 'right'

const setDirection = (newDirection = 'right') => {
  direction = newDirection
  rotate(hand, newDirection)
}

on('keydown', (event: KeyboardEvent) => {
  if (!event.key.startsWith('Arrow')) return
  setDirection(String(event.key.slice(5).toLowerCase()))
})

on('click', (event: MouseEvent) => {
  const { x, height, y, width } = hand.getBoundingClientRect()
  const center = { x: Math.round(x + (height / 2)), y: Math.round(y + (width / 2)) }
  const left = Math.round(event.x - center.x)
  const up = Math.round(event.y - center.y)
  const right = left * -1
  const down = up * -1
  const closest = Math.min(right, down, left, up)
  if (right === closest) return setDirection('right')
  if (down === closest) return setDirection('down')
  if (left === closest) return setDirection('left')
  if (up === closest) return setDirection('up')
})

const isDirectionOk = (leader = '') => ((leader === 'up' && direction === 'down') || (leader === 'right' && direction === 'left') || (leader === 'down' && direction === 'up') || (leader === 'left' && direction === 'right'))

on('leader', async (leader: string) => {
  if (!leader) return console.error('cannot react to empty direction')
  await sleep(1500)
  const score = isDirectionOk(leader) ? 1 : -1
  emit('score', score)
})
