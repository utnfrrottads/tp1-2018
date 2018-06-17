import React from 'react';
import PropTypes from 'prop-types';

require('./Team.scss');

class Team extends React.Component {

    render() {
        return (
            <li className="team">
                <a href="#">{this.props.team.name}</a> 
            </li>
        );
    }
}

Team.propTypes = {
    team: PropTypes.object.isRequired
};

export default Team;