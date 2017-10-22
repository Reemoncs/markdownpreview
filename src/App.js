import React, { Component } from 'react';
import MarkdownPreview from './MarkdownPreview.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          text: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
      };
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <textarea value={ this.state.text } onChange={ ev => this.setState({text: ev.target.value}) }></textarea>
          </div>
          <div class="col-md-6">
            <MarkdownPreview markdown={ this.state.text } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
