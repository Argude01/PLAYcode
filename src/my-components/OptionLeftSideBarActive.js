import React from 'react';

export class OptionLeftSideBarActive extends React.Component 
{
    render() {
        return(
            <div className="btn-group">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropwdown">Mi unidad</button>
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Mis proyectos</a>
                    <a href="#" className="dropdown-item">Mis carpetas</a>
                    <a href="#" className="dropdown-item">Mis snippets</a>
                </div>
            </div>
        );
    }
}