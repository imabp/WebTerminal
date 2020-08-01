import {basic} from './basic'
import {fs} from './files'

const commands = context => {
    let b = basic(context)
    let f = fs(context)
    return {
        ...b,
        ...f
    }
}

export default commands