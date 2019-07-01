import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import RandomQuoteMachine from './components/RandomQuoteMachine';
import configureStore from './store/configureStore';
import React from 'react';
import { render } from 'react-dom';

const store = configureStore();

render(
	<Provider store={store}>
		<RandomQuoteMachine />
	</Provider>,
	document.getElementById('root')
);
