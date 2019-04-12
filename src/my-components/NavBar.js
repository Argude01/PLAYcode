import React from 'react';
import '../css/NavBar.css';
import logo from '../img/icon-playcode.png';
import searchIcon from '../icons-svg/baseline-search-24px.svg';
import helpIcon from '../icons-svg/baseline-help_outline-24px.svg';
import settingIcon from '../icons-svg/round-settings-24px.svg';
import appsIcon from '../icons-svg/round-apps-24px.svg';
import userIcon from '../icons-svg/user.svg';
import { Container } from 'react-bootstrap';

export class NavBar extends React.Component {
    render() {
        return (
            <Container fluid>                
                <nav className="navbar navbar-expand-sm">                    
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="PLAYcode logo"></img>
                        </a>
                    </div>
                    <div style={{ marginLeft: '15rem' }}>    
                        <form className="form-inline">
                            <div className="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src={searchIcon} alt="Search"></img>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Buscar en PLAYcode                    " />
                            </div>     
                        </form>
                    </div>
                    <div style={{ marginLeft: '10rem' }}>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <img src={helpIcon}></img>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <img src={settingIcon}></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div style={{ marginLeft: '5rem' }}>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <img src={appsIcon}></img>
                                </a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link">
                                    <div className="circular">
                                        <img src={userIcon}></img>
                                    </div>
                                </a>
                            </li>
                        </ul>    
                    </div>                    
                </nav>
                
            </Container>

/*
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo"/>
                </a>
                <form class="form-inline">
                    <input class="form-control" type="text" placeholder="Search" name="search-box" />
                    <input class="btn btn-secondary" type="button" value="Search" />
                </form>
                   
                            
            </nav>*/
        );
    }
}