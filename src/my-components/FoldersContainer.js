import React from 'react';
import '../css/FolderCard.css';
import { FolderCard } from './FolderCard';

export class FoldersContainer extends React.Component 
{
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <FolderCard />
                    </div>
                    <div className="col-lg-3">
                        <FolderCard />
                    </div>
                    <div className="col-lg-3">
                        <FolderCard />
                    </div>
                    <div className="col-lg-3">
                        <FolderCard />
                    </div>
                </div>
            </div>
        );
    }
}