import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

export class LeftSideBar extends React.Component 
{
    render() {
        return (
            <Container fluid>
                <Row>
                    <Button className="btn-nuevo" variant="outline-success"> Nuevo</Button>
                </Row>
                <Row>
                    <ul className="li"></ul>
                    <ul className="li"></ul>
                    <ul className="li"></ul> 
                </Row>                
            </Container>
        );
    }
}