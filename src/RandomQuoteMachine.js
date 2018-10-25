import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createStore, applyMiddleware} from 'redux';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import faker from 'faker';

// redux:
const REQUESTING_QUOTE = 'REQUESTING_QUOTE';
const RECEIVED_QUOTE = 'RECEIVED_QUOTE';

const DEFAULT_QUOTE = {};

const changeQuote = () => {
  return function(dispatch) {
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
        type: REQUESTING_QUOTE
    }
}

const receivedQuote = (quote) => {
    return {
        type: RECEIVED_QUOTE,
        quote
    }
}

const quoteReducer = (state = DEFAULT_QUOTE, action) => {
  switch(action.type) {
    case REQUESTING_QUOTE:
      return {
        quote: DEFAULT_QUOTE
      };
    case RECEIVED_QUOTE:
      return {
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
    return (
      <div id="quote-box" class="container">
        <div class="row">
          <div class="col-6 offset-3 jumbotron p-5 mt-5">
            <ViewQuote quote={this.props.quote} />
            <NewQuote fetchQuote={this.fetchQuote} />
            <ShareQuote quote={this.props.quote} />
          </div>
        </div>
      </div>
    );
  }
}

const ShareQuote = (props) => {
  return (
    <div class="pt-2">
      <a class="btn btn-secondary twitter-share-button"
         role="button"
         aria-pressed="true"
         id="tweet-quote"
         href={`https://twitter.com/intent/tweet?text=Text to do`}
         target="_blank">
        Share quote
      </a>
    </div>
    );
};

const NewQuote = (props) => {
  return (
    <button id="new-quote"
            type="button"
            class="btn btn-primary"
            onClick={props.fetchQuote}>
      New quote
    </button>
  );
};

const ViewQuote = (props) => {
  let content;
  if (props.quote === undefined || (props.quote !== undefined && Object.keys(props.quote).length === 0 && props.quote.constructor === Object)) {
    content = <FetchingQuote />;
  } else {
    content = <ViewQuoteDetail quote={props.quote} />
  }
  return (
    <div>
      {content}
    </div>
  )
};

const ViewQuoteDetail = (props) => {
  return (
    <blockquote class="blockquote text-right">
      <p id="text"
         class="mb-0">
         {props.quote.text}
      </p>
      <footer id="author"
              class="blockquote-footer">
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
      quote: state.quote
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
