import React, { useRef, useEffect } from 'react'
import $ from 'jquery'
import termial from 'jquery.terminal'

const Terminal = props => {
    const mainRef = useRef(null)
    useEffect(() => {
        $('#check').terminal({
            help: () => {
                this.echo('\nList of commands available:');
            }
        })
    }, [])

    return <div id="check" ref={mainRef} />
}


export default Terminal