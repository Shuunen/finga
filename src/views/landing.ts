import { div, dom, img } from '../utils'

export const landing = div('landing align-middle flex flex-col items-center justify-center')

const title = dom('h1', 'Finga !', 'text-5xl font-bold sm:text-7xl mb-4 text-white backdrop-filter backdrop-grayscale backdrop-opacity-40')
const hand = img('hand', 'hand.svg','w-80 animate-spin max-w-xs mt-32 w-screen')
hand.style.animationDuration = '3s'

landing.append(title)
landing.append(hand)

