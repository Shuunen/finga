import { div, h1 } from 'shuutils'
import { hand } from './hand'

export const landing = div('landing align-middle flex flex-col items-center justify-center')

const title = h1('title text-5xl font-bold sm:text-7xl mb-4 text-white backdrop-filter backdrop-grayscale backdrop-opacity-40', 'Finga !')

landing.append(title)
landing.append(hand)

