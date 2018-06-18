import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

require('./Group.scss');

class Group extends React.Component {

    render() {
        const {
            name
        } = this.props.group;

        return (
            <li className="group">
                <Link to=''>{name}</Link>
            </li>
        );
    }
}

Group.propTypes = {
    group: PropTypes.object.isRequired
};

export default Group;