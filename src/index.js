import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import RandomQuoteMachine, {store} from './RandomQuoteMachine';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <RandomQuoteMachine />
    </Provider>, 
    document.getElementById('root')
);
