import { div, dom } from '../utils'
import { hand } from './hand'
import { video } from './video'

export const landing = div('landing align-middle flex flex-col items-center justify-center')

const title = dom('h1', 'Finga !', 'text-5xl font-bold sm:text-7xl mb-4 text-white backdrop-filter backdrop-grayscale backdrop-opacity-40')
landing.append(title)

landing.append(hand)
landing.append(video)
