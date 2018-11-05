import { RECEIVED_QUOTE, REQUESTING_QUOTE } from '../actions/allActions';
import { DEFAULT_QUOTE, DEFAULT_STATE } from './initialState';

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

export default quoteReducer;