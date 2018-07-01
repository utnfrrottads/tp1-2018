import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MatchDetails from '../components/MatchDetails/MatchDetails';

import * as actions from '../../../actions/actions';

class MatchDetailsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            match: null
        };

        this.props.actions.getRounds();
    }

    componentDidUpdate() {
        const {
            rounds
        } = this.props.worldCup;

        // if there are rounds inside the store and the match is null
        if (!_.isEmpty(rounds) && !this.state.match) {
            const matchId = _.toInteger(this.props.match.params.matchId);
            let match;

            rounds.forEach((round) => {
                // try to find the match if it hasnt been found yet in a previous round object
                if (!match) {
                    // search inside the round.matches array for num === params.matchID
                    match = _.find(round.matches, { num: matchId });
                }
            });

            // save the match to render it
            this.setState({match});
        }
    }

    render() {
        return this.state.match ? <MatchDetails match={this.state.match} /> : null;
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

MatchDetailsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    worldCup: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchDetailsContainer);
