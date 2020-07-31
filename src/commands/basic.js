let basic = context => {
    return {
        help: () => {
            context.echo("Hello")
        }
    }
}

export { basic }