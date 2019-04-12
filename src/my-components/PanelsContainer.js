import React from 'react';
import '../css/PanelsContainer.css';
import { CardGroup } from 'react-bootstrap';
import { CodePanel } from './CodePanel' ;

export class PanelsContainer extends React.Component
{
    render() {
        return (
            <CardGroup>
                <div>
                    <CodePanel border="ligth" bg="dark" text="white" header="HTML"></CodePanel> 
                    <CodePanel border="ligth" bg="dark" text="white" header="CSS"></CodePanel>
                    <CodePanel border="ligth" bg="dark" text="white" header="JS"></CodePanel>
                </div>
                <div>
                    <CodePanel border="warning" bg="dark" text="white" header="HTML"></CodePanel> 
                    <CodePanel border="danger" bg="dark" text="white" header="CSS"></CodePanel>
                    <CodePanel border="primary" bg="dark" text="white" header="JS"></CodePanel>
                </div>                
                <CodePanel border="ligth"></CodePanel>
            </CardGroup>            
        );
    }
}