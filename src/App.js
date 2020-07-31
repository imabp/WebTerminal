import React, { Component } from 'react';
import Terminal from './components/terminal'
import $ from 'jquery';
import {findDOMNode} from 'react-dom'
class App extends Component() {
 
        render(){
                  return (
                  <div >
                    <Terminal />
                  </div>
                );
          }
}

export default App;
