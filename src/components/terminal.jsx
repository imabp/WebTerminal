import React,{useRef} from 'react'
import $ from 'jquery'

const Terminal = props => {
    const mainRef = useRef(null)

    return <div ref={mainRef} />
}


export default Terminal