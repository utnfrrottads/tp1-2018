import React from 'react';
import PropTypes from 'prop-types';

import Group from './Group/Group';


require('./Groups.scss');

class Groups extends React.Component {

    renderGroups() {
        return this.props.groups.map((group) => {
            return <Group group={group} key={group.code} />;
        });
    }

    render() {
        return (
            <div className="groups" >
                {this.renderGroups()}
            </div>
        );
    }

}

Groups.propTypes = {
    groups: PropTypes.array.isRequired
};

export default Groups;