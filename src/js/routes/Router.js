import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsContainer from './teams/containers/TeamsContainer';

class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={TeamsContainer} />
            </Switch>
        );
    }
}

export default Router;
