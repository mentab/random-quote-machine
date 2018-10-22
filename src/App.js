import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        author: 'Author of the quote', 
        text: 'Text of the quote' 
      }
    }
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    this.setState({
      quote: { 
        author: 'Author of the quote changed', 
        text: 'Text of the quote changed' 
      }
    });
  }
  render() {
    return (
      <div id="quote-box">
        <ViewQuote quote={this.state.quote} />
        <NewQuote newQuote={this.newQuote} />
        <ShareQuote />
      </div>
    );
  }
}

const NewQuote = (props) => {
  return (
    <button id="new-quote"
            onClick={props.newQuote}>
      New quote
    </button>
  );
};

const ViewQuote = (props) => {
  return (
    <div>
      <p id="text">
        { props.quote.text }
      </p>
      <p class="author">
        { props.quote.author }
      </p>
    </div>
  );
};

const ShareQuote = () => {
  return (
    <a id="tweet-quote"
       href="#">
      Share quote
    </a>
  );
};

ViewQuote.defaultProps = {
  quote: { author: 'Author of the quote default', text: 'Text of the quote default' }
}

ViewQuote.propTypes = {
  quote: PropTypes.object.isRequired
}

export default App;
