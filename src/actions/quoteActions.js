import faker from 'faker';
import { DEFAULT_QUOTE } from '../reducers/initialState';
import { REQUESTING_QUOTE, RECEIVED_QUOTE } from './allActions';

export const changeQuote = () => {
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