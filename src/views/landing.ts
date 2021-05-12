import { div, dom } from '../utils'

export const landing = div('landing')

const title = dom('h1', 'Finga !', 'text-5xl sm:text-7xl mb-4 text-blue-300')
landing.append(title)

