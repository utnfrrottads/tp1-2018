import React from 'react';
import PropTypes from 'prop-types';

require('./MatchDetails.scss');

class MatchDetails extends React.Component {

    renderGoalPlayerName(goals) {
        return goals.map((g1) => { return g1.name; });
    }

    render() {
        const {
            num,
            goals1,
            goals2
        } = this.props.match;

        return (
            <div className="match-details" key={num}>
                <div>
                    {this.renderGoalPlayerName(goals1)}
                </div>
                <div>
                    {this.renderGoalPlayerName(goals2)}
                </div>
            </div>
        );
    }
}

MatchDetails.propTypes = {
    match: PropTypes.object.isRequired
};

export default MatchDetails;