import { div, emit, getRandomNumber, pickOne } from 'shuutils'
import { _rotate } from '../utils'

export const leader = div('leader text-8xl flex items-end mt-12 mb-24')
const handStyle = 'transition-transform text-6xl flex justify-center items-end h-8 w-12'
const leftHand = div(handStyle, '๐')
const rightHand = div(handStyle, '๐')
const directions = ['up', 'right', 'down', 'left']
const faces = [...'๐๐๐คช๐คซ๐ค๐๐คญ๐คจ๐๐๐ฌ๐ด๐คค๐คง๐ฅด๐ต๐คฏ๐ค ๐ฅณ๐๐ง๐ฎ๐ฒ๐ฑ๐']
const head = div('head', '')
const act = () => {
  head.textContent = pickOne(faces)
  const direction = pickOne(directions)
  _rotate(leftHand, direction)
  _rotate(rightHand, direction)
  emit('leader', direction)
  setTimeout(act, getRandomNumber(1, 3) * 1000)
}
act()

leader.append(leftHand)
leader.append(head)
leader.append(rightHand)
