import React from 'react';

require('./Header.scss');

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <h1>Fabra - React Boilerplate</h1>
            </header>
        );
    }
}

export default Header;
