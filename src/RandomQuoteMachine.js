import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createStore} from 'redux';
import {connect} from 'react-redux';

// redux:
const NEW = 'NEW';
// TODO fetch data
const DEFAULT_QUOTE = {};

const newQuote = (quote) => {
    return {
        type: NEW,
        quote
    }
}

const quoteReducer = (state = DEFAULT_QUOTE, action) => {
    switch(action.type) {
        case NEW:
            return action.quote;
        default:
            return state;
    }
}

export const store = createStore(quoteReducer);

class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    this.props.newQuote({
      author: 'author',
      text: 'text'
    });
  }
  render() {
    return (
      <div id="quote-box">
        <ViewQuote quote={this.props.quote} />
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
      <p id="author">
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
  quote: {
    author: 'Author of the quote default',
    text: 'Text of the quote default'
  }
}

ViewQuote.propTypes = {
  quote: PropTypes.object.isRequired
}


// react-redux
const mapStateToProps = (state) => {
  return {
      quote: state
  }
}
// TITI
const mapDispatchToProps = (dispatch) => {
  return {
      newQuote: (quote) => {
          dispatch(newQuote(quote));
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(RandomQuoteMachine);
