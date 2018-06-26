import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Teams from '../components/Teams/Teams';

import * as actions from '../../../actions/actions';

class TeamsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getTeams();
    }

    render() {
        return  <Teams teams={this.props.worldCup.teams} />;
    }
}

const mapStateToProps = (state) => {
    return {
        worldCup: state.worldCup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

TeamsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    worldCup: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
