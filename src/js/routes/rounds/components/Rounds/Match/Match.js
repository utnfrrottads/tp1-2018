import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

require('./Match.scss');

class Match extends React.Component {

    render() {
        const {
            num,
            team1,
            team2,
            score1,
            score2,
            date,
            time
        } = this.props.match;

        return (
            <div className="match" id={num}>
                <div>{date} {time}</div>
                <div>{team1.name} VS {team2.name}</div>
                <div>{score1} VS {score2}</div>
            </div>
        );
    }
}

Match.propTypes = {
    match: PropTypes.object.isRequired
};

export default Match;