import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { Router  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './routes/App';
import store from './store/store';

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
