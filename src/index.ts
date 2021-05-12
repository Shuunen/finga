import { idleService } from './services'
import { landing } from './views/landing'

document.body.append(landing)

idleService.init()
