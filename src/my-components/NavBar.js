import React from 'react';
import '../css/NavBar.css';
import logo from '../img/svg/PLAYcode-navbar-md.svg';
import searchIcon from '../img/icons-svg/baseline-search.svg';
import helpIcon from '../img/icons-svg/baseline-help_outline.svg';
import settingIcon from '../img/icons-svg/round-settings.svg';
import appsIcon from '../img/icons-svg/round-apps.svg';
import userIcon from '../img/icons-svg/user.svg';

export class NavBar extends React.Component {
    render() {
        return (
            <div class="my-navbar">
                <nav className="navbar navbar-expand-sm justify-content-center">
                    <div className="container-fluid" style={{marginLeft: '0.5rem'}}>
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="logo-PLAYcode" />
                        </a>
                    </div>
                    <div className="container-fluid">                        
                        <form className="form-inline" action="">
                            <div className="input-group" style={{marginLeft: '16rem'}}>
                                <div className="input-group-prepend" style={{paddingRight: '1rem'}}>
                                    <img className="" src={searchIcon} alt="search icon"/>
                                </div>
                                <input type="text" className="form-control search-input" placeholder="Buscar en PLAYcode"/>
                            </div>
                        </form>
                    </div>
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="navbar-item" style={{marginRight: '2rem', marginLeft: '8rem'}}>
                                <a href="#" className="navbar-link">
                                    <img src={helpIcon} alt="help icon"/>
                                </a>
                            </li>
                            <li className="navbar-item" style={{marginRight: '2rem'}}>
                                <a href="#" className="navbar-link">
                                    <img src={settingIcon} alt="setting icon"/>
                                </a>
                            </li>
                            <li className="navbar-item" style={{marginRight: '2rem'}}>
                                <a href="#" className="navbar-link">
                                    <img src={appsIcon} alt="apps icon"/>
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href="#" className="navbar-link">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container-fluid">
                        <div className="circular">
                            <img src={userIcon} alt="user icon"/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}