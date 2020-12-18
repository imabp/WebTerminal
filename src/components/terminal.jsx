import React from 'react'
import $ from 'jquery'

import 'jquery.terminal'
import 'jquery.terminal/css/jquery.terminal.css'
import commands from '../commands'
const intro={
        
    // DANGER: high
    // Don't mess with this part or else all HELL will fall loose.

    prompt:"[[b;#44D544;]imabp@localhost:~$] ",
    greetings: "All rights reserved to the owner © [[b;#FFFFFF;]imabp]\n\n" +
                "This is part of project under [[b;#FFFF00;]Ninja Developers ] "+"\n We [[b;#FF0000;]❤]  Open Source \n"+
               "If you want to contribute, you can at github @imabp. \n Type  [[b;#FFFFFF;]help] to get started \n" +
               "> The shell is basically a program that takes your commands from the keyboard and sends them to the operating system to perform.\n" +
               "> The [[b;#44D544;]Terminal] is a program that launches a shell for you.\n" +
               "> Type [[b;#ff3300;]help] to see the list of [[b;#44D544;]commands/tasks].\n\n" +
               '> Start with [[b;#ff3300;]echo "any string"].\n',
    onBlur: function() {
        // prevent loosing focus
        return false;
    }       
}
export default class Terminal extends React.Component{

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.terminal(commands(this.$el),intro)
    }


    render(){
        return <div  style= {{display:'block'},{height: '100%'},{position:'absolute'},{width:'100%'}} ref={el => this.el = el} /> 
    }
}