import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="menu">
                    <Link to="/">
                        Strona główna
                </Link>
                    <Link to="/login">
                        Logowanie
                    </Link>
                    <Link to="/register">
                        Rejestracja
                    </Link>
                    <Link to="/private">
                        Tajne/poufne
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;