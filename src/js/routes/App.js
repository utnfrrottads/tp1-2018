import React from 'react';

import Header from '../common/Header/Header';
import TeamsContainer from '../routes/teams/containers/TeamsContainer';

require('../../scss/style.scss');

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <TeamsContainer />
            </div>
        );
    }
}

export default App;
