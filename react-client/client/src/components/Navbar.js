import React from 'react';
import './Navbar.css'
class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="menu">
                    <a href="#">Start</a>
                    <a href="#">Logowanie</a>
                    <a href="#">Rejestracja</a>
                    <a href="#">Tajne materiały</a>
                </div>
            </div>
        )
    }
}

export default Navbar;