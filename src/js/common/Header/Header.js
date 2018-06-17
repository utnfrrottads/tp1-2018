import React from 'react';

require('./Header.scss');

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <h1>Trabajo Práctico Frontend TTADS 2018 - Mundial Rusia 2018</h1>
            </header>
        );
    }
}

export default Header;
