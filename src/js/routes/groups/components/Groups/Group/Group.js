import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

require('./Group.scss');

class Group extends React.Component {

    render() {
        const {
            name,
            teams
        } = this.props.group;

        return (
            <div className="group">
                <h3>{name}</h3>
                {teams.map((team) => { return <div className="group-item" key={team.name}>{team.name}</div>; })}
            </div>
        );
    }
}

Group.propTypes = {
    group: PropTypes.object.isRequired
};

export default Group;