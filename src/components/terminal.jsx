import React, { useRef, useEffect } from 'react'
import $ from 'jquery'

import 'jquery.terminal'
import 'jquery.terminal/css/jquery.terminal.css'

const Terminal = props => {
    const mainRef = useRef(null)
    useEffect(() => {
        $(mainRef.current).terminal({
            help: () => {
                /**
                 * This echo function is causing the error, 
                 * as this is a function not a class, I guess
                 */
                this.echo('\nList of commands available:');
            }
        })
    }, [])

    return <div ref={mainRef} />
}


export default Terminal