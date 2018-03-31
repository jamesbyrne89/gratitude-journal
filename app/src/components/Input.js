import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/styles.css';


const fade = {
  timeout: 300,
  classNames: 'fade',
  unmountOnExit: false
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.submitInput = this.submitInput.bind(this);
    const input = this.userInput;
    this.state = {
      hasInput: false
    }
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

  submitInput(e) {

    if (e.keyCode === 13 && this.userInput.value !== '') {
      console.log('enter')
      this.setState({ hasInput: true });
      // this.props.enterInput();
      this.userInput.value = '';
    }
  }


  render() {

    const { hasInput } = this.state;

    return (
      <CSSTransition in={!hasInput} {...fade}>
        <div className="input">
          <h1 className="input__message"></h1>
          <input ref={(input) => { this.userInput = input; }} className="input__text" placeholder="What are you grateful for today?" type="text" onKeyUp={this.submitInput} autoFocus />

        </div>
      </CSSTransition>
    )
  }
}

export default Input;
