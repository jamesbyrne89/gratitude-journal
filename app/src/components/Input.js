import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import '../styles/styles.css';

class Input extends Component {
  constructor() {
    super()
  }

  // const userInputArea = this.refs.userInputArea;


  //     userInputArea.addEventListener('paste',autoExpand)
  //     userInputArea.addEventListener('input',autoExpand)
  //     userInputArea.addEventListener('keyup',autoExpand)
  //   function autoExpand(e,el){
  //     var el = el || e.target
  //     el.style.height = 'inherit'
  //     el.style.height = el.scrollHeight+'px'
  //   }
  //   window.addEventListener('load',expandAll)
  //   window.addEventListener('resize',expandAll)
  //   function expandAll(){
  //     var tag = document.querySelectorAll('textarea')
  //     for (var i=0; i<tag.length; i++){
  //       autoExpand(e,tag[i])
  //     }
  //   }

  // autoExpand(e) {
  //   var minRows = this.getAttribute('data-min-rows')|0, rows;
  //       this.rows = minRows;
  //       rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
  //       this.rows = minRows + rows;
  // }


  render() {
    return (
      <div className="input">
        <h1 className="input__message">What are you grateful for today?</h1>
        <textarea ref="userInputArea" className="input__text" type="text" autoFocus> 
        </textarea>
      </div>
    );
  }
}

export default Input;
