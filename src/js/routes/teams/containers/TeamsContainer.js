import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Teams from '../components/Teams/Teams';

import * as actions from '../../../actions/actions';

class TeamsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.props.actions.testAction();
    }

    render() {
        return <Teams />;
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.project,
        table: state.table
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

TeamsContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsContainer);
