import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamsContainer from './teams/containers/TeamsContainer';
import GroupsContainer from './groups/containers/GroupsContainer';

class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path='/teams' component={TeamsContainer} />
                <Route exact path='/groups' component={GroupsContainer} />
            </Switch>
        );
    }
}

export default Router;
