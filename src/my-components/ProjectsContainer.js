import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

export class ProjectsContainer extends React.Component 
{
    render() {
        return(
            <CardDeck>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </CardDeck>
        );
    }
}