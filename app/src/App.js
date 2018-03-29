import React, { Component } from 'react';
import Time from './components/Time';
import Input from './components/Input';
import './styles/styles.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputEntered: false
    }
    this.enterInput = this.enterInput.bind(this);
  }

  enterInput() {
    this.setState({ inputEntered: true })
  }

  render() {
    const { inputEntered } = this.state;
    return (
      <div className="App">
      <Time />
        <video autoPlay loop className="fillWidth">
            <source src="assets/video/Two-Swimmers.mp4" type="video/mp4"/>Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="PATH_TO_WEBM" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
        {inputEntered ? null : <Input enterInput={this.enterInput} />}
      </div>
    );
  }
}

export default App;
