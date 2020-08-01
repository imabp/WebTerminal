import Files from '../lib/fs'
let file = new Files()
let fs =  context =>{

    return {
        ls: () => {
            context.echo(file.getPath())
        }
    }
}


export {fs}