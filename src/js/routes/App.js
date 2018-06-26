import React from 'react';

import Header from '../common/Header/Header';
import Router from './Router';

require('../../scss/style.scss');

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Router />
            </div>
        );
    }
}

export default App;
