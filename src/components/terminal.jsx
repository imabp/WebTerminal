import React from 'react'
import $ from 'jquery'
import 'jquery.terminal'
import 'jquery.terminal/css/jquery.terminal.css'

export default class Terminal extends React.Component{

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.terminal({
            help: () => {
                this.$el.echo("Hello")
            }
        })
    }


    render(){
        return <div ref={el => this.el = el} /> 
    }
}