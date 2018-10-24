import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createStore, applyMiddleware} from 'redux';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';

// redux:
const REQUESTING_QUOTE = 'REQUESTING_QUOTE';
const RECEIVED_QUOTE = 'RECEIVED_QUOTE';

const DEFAULT_QUOTE = {};

// Todo handle errors
const changeQuote = () => {
  return function(dispatch) {
    dispatch(requestingQuote());
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      dispatch(receivedQuote(res.data))
    });
  }
}

const requestingQuote = () => {
    return {
        type: REQUESTING_QUOTE
    }
}

const receivedQuote = (quote) => {
    return {
        type: RECEIVED_QUOTE,
        quote: quote
    }
}

const quoteReducer = (state = DEFAULT_QUOTE, action) => {
  switch(action.type) {
    case REQUESTING_QUOTE:
      return {
        fetching: true,
        quote: []
      };
    case RECEIVED_QUOTE:
      return {
        fetching: false,
        quote: action.quote
      }
    default:
      return state;
    }
}

export const store = createStore(
  quoteReducer,
  applyMiddleware(thunk)
);

class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.fetchQuote = this.fetchQuote.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuote();
  }
  fetchQuote() {
    this.props.fetchQuote();
  }
  render() {
    return (
      <div id="quote-box">
        <ViewQuote quote={this.props.quote} />
        <NewQuote fetchQuote={this.fetchQuote} />
        <ShareQuote />
      </div>
    );
  }
}

const NewQuote = (props) => {
  return (
    <button id="new-quote"
            onClick={props.fetchQuote}>
      New quote
    </button>
  );
};

const ViewQuote = (props) => {
  return (
    <div>
      <p id="text">
        {props.quote.text}
      </p>
      <p id="author">
        {props.quote.character}
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
    character: 'There is nothing here',
    text: 'It\s more or less the same here'
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

const mapDispatchToProps = (dispatch) => {
  return {
      fetchQuote: () => {
          dispatch(changeQuote());
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(RandomQuoteMachine);
