import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="menu">
                    <NavLink exact activeClassName="active" to="/">
                        Strona główna
                </NavLink>
                    <NavLink activeClassName="active" to="/login">
                        Logowanie
                    </NavLink>
                    <NavLink activeClassName="active" to="/register">
                        Rejestracja
                    </NavLink>
                    <NavLink activeClassName="active" to="/private">
                        Tajne/poufne
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar;