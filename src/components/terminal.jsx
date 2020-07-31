import React, { useRef, useEffect } from 'react'
import $ from 'jquery'
import 'jquery.terminal'
import 'jquery.terminal/css/jquery.terminal.css'

const Terminal = props => {
    const mainRef = useRef(null)
    useEffect(() => {
        $(mainRef.current).terminal({
            help: () => {
                this.echo('\nList of commands available:');
            }
        })
    }, [])

    return <div ref={mainRef} />
}


export default Terminal