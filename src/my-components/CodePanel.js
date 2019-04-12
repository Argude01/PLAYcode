import React from 'react';
import '../css/CodePanel.css';
import { Card } from 'react-bootstrap';

export class CodePanel extends React.Component 
{
    render() {
        return (
            <Card border={this.props.border} bg={this.props.bg} text={this.props.text} style={{ width: '18rem' }}>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>File Name</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium pariatur sed inventore animi blanditiis voluptatibus libero  </Card.Text>
                </Card.Body>
            </Card>           
        );
    }
}