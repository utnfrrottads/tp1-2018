import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Rounds from '../components/Rounds/Rounds';

import * as actions from '../../../actions/actions';

class RoundsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.getRounds();

    }

    render() {
        return <Rounds rounds={this.props.worldCup.rounds} />;
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

RoundsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    worldCup: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundsContainer);
