import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <video autoPlay loop className="fillWidth">
            <source src="assets/video/Two-Swimmers.mp4" type="video/mp4"/>Your browser does not support the video tag. I suggest you upgrade your browser.
            <source src="PATH_TO_WEBM" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    );
  }
}

export default App;
