import React from 'react';
import PropTypes from 'prop-types';

require('./Rounds.scss');

class Rounds extends React.Component {

    renderMatches() {
        return this.props.rounds.map((round) => {
            return <li key={round.name}>{round.name}</li>;
        });
    }

    render() {
        return (
            <ul className="rounds">
                {this.renderMatches()}
            </ul>
        );
    }

}

Rounds.propTypes = {
    rounds: PropTypes.array.isRequired
};

export default Rounds;