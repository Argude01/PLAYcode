import React from 'react';
import '../css/FolderCard.css';
import folderIcon from '../img/icons-svg/round-folder.svg';

export class FolderCard extends React.Component 
{
    render() {
        return(
            <div className="card folder-card">
                <div className="card-body container-fluid">
                    <div className="row">
                        <div className="folder-icon">
                            <img src={folderIcon} alt="folder icon"/>
                        </div>
                        <p className="card-text">Folder 1</p>
                    </div>
                </div>
            </div>
        );
    }
}