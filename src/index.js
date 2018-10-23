import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import RandomQuoteMachine, {store} from './RandomQuoteMachine';

render(
    <Provider store={store}>
        <RandomQuoteMachine />
    </Provider>, 
    document.getElementById('root')
);
