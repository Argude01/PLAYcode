import React from 'react';
import { bgProject } from '../img/project.png';
import { Card } from 'react-bootstrap';

export class ProjectCard extends React.Component
{
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={bgProject} />
                <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>HTML, CSS, JS project</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 minutes ago</small>
                </Card.Footer>
            </Card> 
        );
    }
}