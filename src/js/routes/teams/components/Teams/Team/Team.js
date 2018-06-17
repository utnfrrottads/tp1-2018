import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

require('./Team.scss');

class Team extends React.Component {

    render() {
        const {
            code,
            name
        } = this.props.team;

        return (
            <li className="team">
                <Link to={`/team/${code}`}>{name}</Link>
            </li>
        );
    }
}

Team.propTypes = {
    team: PropTypes.object.isRequired
};

export default Team;