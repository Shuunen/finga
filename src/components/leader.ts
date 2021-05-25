import { div, getRandomNumber, pickOne } from 'shuutils'
import { _rotate } from '../utils'

export const leader = div('leader text-7xl flex items-end mt-24 mb-12')
const leftHand = div('left-hand transition-transform text-4xl', '👉')
const rightHand = div('right-hand transition-transform text-4xl', '👉')
const directions = ['up', 'right', 'down', 'left']
const faces = [...'🙂😉🤪🤫🤔😑🤭🤨😏🙄😬😴🤤🤧🥴😵🤯🤠🥳😎🧐😮😲😱😖']
const head = div('head', '')
const act = () => {
  head.textContent = pickOne(faces)
  const direction = pickOne(directions)
  _rotate(leftHand, direction)
  _rotate(rightHand, direction)
  setTimeout(act, getRandomNumber(1, 3) * 1000)
}
act()

leader.append(leftHand)
leader.append(head)
leader.append(rightHand)
