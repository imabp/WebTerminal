import React from 'react'
import $ from 'jquery'
import 'jquery.terminal'
import 'jquery.terminal/css/jquery.terminal.css'
import commands from '../commands'

export default class Terminal extends React.Component{

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.terminal(commands(this.$el))
    }


    render(){
        return <div ref={el => this.el = el} /> 
    }
}