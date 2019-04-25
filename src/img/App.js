import React from 'react';
import '../css/App.css';
import { NavBar } from './NavBar';
import { ProjectsContainer } from './ProjectsContainer';
import { FoldersContainer } from './FoldersContainer';
import { SnnipetsContainer } from './SnnipetsContainer';
import { LeftSideBar } from './LeftSideBar';
import { OptionLeftSideBarActive } from './OptionLeftSideBarActive';

class App extends React.Component
{
  render ()
  {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <hr/>
        <div className="row">
          <div className="col-lg-2 left-side-bar" >
            <LeftSideBar />
          </div>
          <div className="col-lg-10 content-container">
            <OptionLeftSideBarActive />
            <hr></hr>
            <div>
              <div className="container">
                <h6 className="play-color">Recientes</h6>
              </div>
              <br/>
              {/* My Panels code Zone test 
              <PanelsContainer id="teacher-section" /> 
              */}
              <ProjectsContainer />
            </div>
            <hr></hr>
            <div>
              <div className="container">
                <h6 className="play-color">Carpetas</h6>
              </div>
              <br/>
              {/* My Panels code Zone test 
              <PanelsContainer id="teacher-section" /> 
              */}
              <FoldersContainer />
            </div>
            <hr></hr>
            <div>
              <div className="container">
                <h6 className="play-color">Snnipets</h6>
              </div>
              <br/>
              {/* My Panels code Zone test 
              <PanelsContainer id="teacher-section" /> 
              */}
              <SnnipetsContainer />
            </div>
          </div>
        </div>
        <hr/>
        <footer>
          <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;