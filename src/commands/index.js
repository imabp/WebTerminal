import {basic} from './basic'

const commands = context => {
    let b = basic(context)
    return {
        ...b
    }
}

export default commands