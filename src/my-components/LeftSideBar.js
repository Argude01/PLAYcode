import React from 'react';
import { Button, Container } from 'react-bootstrap';

export class LeftSideBar extends React.Component 
{
    render() {
        return (
            <Container fluid>
                <div>
                    <Button className="btn-nuevo" variant="outline-success"> Nuevo</Button>
                </div>
                <div className="left-panel-sections">
                    <ul>
                        <li>Mi unidad</li>
                        <li>Mis clases</li>
                        <li>Participantes</li>
                    </ul>
                    
                </div>
            </Container>
        );
    }
}