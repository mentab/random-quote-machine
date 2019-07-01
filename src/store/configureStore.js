import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import quoteReducer from './../reducers/quoteReducer';

const configureStore = () => createStore(
	quoteReducer,
	applyMiddleware(thunk)
);

export default configureStore;