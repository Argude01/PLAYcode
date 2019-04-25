import React from 'react';
import snippetIcon from '../img/icons-svg/round-code-24px.svg';

export class SnnipetsContainer extends React.Component
{
    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <div>

                        <img src={snippetIcon} alt=""/>
                    </div>
                    <div>

                    <h5 className="card-title">Project Title</h5>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="text-muted">~ 3 minutes ago</div>
                </div>
            </div>
        );
    }
}