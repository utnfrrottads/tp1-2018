import React from 'react';
import PropTypes from 'prop-types';

import Match from './Match/Match';

require('./Rounds.scss');

class Rounds extends React.Component {

    renderMatches() {
        return this.props.rounds.map((matchday) => {
            return matchday.matches.map((match) => {
                return <Match key={match.num} match={match} />;
            });
        });
    }

    render() {
        return (
            <div className="rounds">
                {this.renderMatches()}
            </div>
        );
    }

}

Rounds.propTypes = {
    rounds: PropTypes.array.isRequired
};

export default Rounds;