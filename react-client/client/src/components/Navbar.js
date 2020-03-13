import React from 'react';
import './Navbar.css'
class Navbar extends React.Component {
    render() {
        return (
            <div className="nav">
                <div className="menu">
                    <a href="#">Link1</a>
                    <a href="#">Link2</a>
                    <a href="#">Link3</a>
                    <a href="#">Link4</a>
                </div>
            </div>
        )
    }
}

export default Navbar;