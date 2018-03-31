import React, { Component } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import '../styles/styles.css';

// <FadeOut /> is a component that wraps children in 
// a <Transition /> component. 
// 'children' is the element to be animated.
// 'duration' is the duration of the animation in milliseconds.
// The `in` prop will be provided by <TransitionGroup />. 
function FadeOut({ children, duration, in: inProp }) {
  // Styles to set on children which are necessary in order
  // for the animation to work.
  const defaultStyle = {
    // Transition "opacity" and "transform" CSS properties.
    // Set duration of the transition to the duration of the animation.
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity, transform'
  }

  // Styles that will be applied to children as the status
  // of the transition changes. Each key of the
  // 'transitionStyles' object matches the name of a 
  // 'status' provided by <Transition />. 
  const transitionStyles = {
    // Start with component invisible and shifted up by 10%
    entering: {
      opacity: 0,
      transform: 'translateY(-10%)'
    },
    // Transition to component being visible and having its position reset. 
    entered: {
      opacity: 1,
      transform: 'translateY(0)'
    },
    // Fade element out and slide it back up on exit.
    exiting: {
      opacity: 0,
      transform: 'translateY(-10%)'
    }
  }
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.submitInput = this.submitInput.bind(this);
    const input = this.userInput;
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
      this.props.enterInput();
      this.userInput.value = '';
    }
  }


  render() {

    return (

      <div className="input">
        <h1 className="input__message"></h1>
        <input ref={(input) => { this.userInput = input; }} className="input__text" placeholder="What are you grateful for today?" type="text" onKeyUp={this.submitInput} autoFocus />

      </div>

    );
  }
}

export default Input;
