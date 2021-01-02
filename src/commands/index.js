import {basic} from './basic'
import {fs} from './files'
import counterService from './counter.service'
const commands = context => {
    const counter = new counterService();
    let b = basic(context,counter)
    let f = fs(context,counter)
    return {
        ...b,
        ...f
    }
}

export default commands