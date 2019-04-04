import React from 'react';
import '../css/NavBar.css';
import logo from '../img/icon-playcode.png';

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}