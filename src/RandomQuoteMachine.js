import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import faker from 'faker';

// redux:
const REQUESTING_QUOTE = 'REQUESTING_QUOTE';
const RECEIVED_QUOTE = 'RECEIVED_QUOTE';

const DEFAULT_QUOTE = {};
const DEFAULT_FETCHING = false;
const DEFAULT_STATE = {
  quote: DEFAULT_QUOTE,
  fetching: DEFAULT_FETCHING
}

const changeQuote = () => {
  return function (dispatch) {
    dispatch(requestingQuote());
    setTimeout(() => {
      const quote = {
        author: faker.hacker.noun(),
        text: faker.hacker.phrase()
      }
      dispatch(receivedQuote(quote))
    }, 500);
  }
}

const requestingQuote = () => {
  return {
    type: REQUESTING_QUOTE,
    quote: DEFAULT_QUOTE
  }
}

const receivedQuote = (quote) => {
  return {
    type: RECEIVED_QUOTE,
    quote
  }
}

const quoteReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUESTING_QUOTE:
      return {
        quote: DEFAULT_QUOTE,
        fetching: true
      };
    case RECEIVED_QUOTE:
      return {
        quote: action.quote,
        fetching: false
      }
    default:
      return state;
  }
}

export const store = createStore(
  quoteReducer,
  applyMiddleware(thunk)
);

// react
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
    let content;
    if (this.props.fetching) {
      content = <FetchingQuote />;
    } else {
      content = <div>
        <ViewQuote quote={this.props.quote} />
        <NewQuote fetchQuote={this.fetchQuote} />
        <ShareQuote quote={this.props.quote} />
      </div>;
    }
    return (
      <div id="quote-box" className="container">
        <div className="row">
          <div className="col-6 offset-3 jumbotron p-5 mt-5">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

const ShareQuote = (props) => {
  return (
    <div className="pt-2">
      <a className="btn btn-secondary twitter-share-button"
        role="button"
        aria-pressed="true"
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${props.quote.text}-${props.quote.author}`}
        target="_blank"
        rel="noopener noreferrer">
        Share quote
      </a>
    </div>
  );
};

const NewQuote = (props) => {
  return (
    <button id="new-quote"
      type="button"
      className="btn btn-primary"
      onClick={props.fetchQuote}>
      New quote
    </button>
  );
};

const ViewQuote = (props) => {
  return (
    <blockquote className="blockquote text-right">
      <p id="text"
        className="mb-0">
        {props.quote.text}
      </p>
      <footer id="author"
        className="blockquote-footer">
        {props.quote.author}
      </footer>
    </blockquote>
  )
}

const FetchingQuote = () => {
  return (
    <div>Fetching quote...</div>
  )
}

ViewQuote.propTypes = {
  quote: PropTypes.object
}

// react-redux
const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    fetching: state.fetching
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
