import { hand, leader, title } from './components'
import { label } from './components/label'
import { idleService } from './services'

document.body.style.fontFamily = '\'Press Start 2P\', cursive'
document.body.style.backgroundImage = 'repeating-linear-gradient(0, transparent 49vmax, rgb(171 0 68) 50vmax, rgb(0 0 0) 50vmax), repeating-linear-gradient(220deg, transparent 0px, rgb(255, 0, 119) 50vmax'
document.body.append(label('leader', 'the leader', 'giving your orders'))
document.body.append(leader)
document.body.append(title)
document.body.append(hand)
document.body.append(label('player', 'the hand', 'it\'s you, trying to do the opposite'))

idleService.init()
