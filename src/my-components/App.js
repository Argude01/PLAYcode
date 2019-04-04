import React from 'react';
import '../css/App.css';
import { NavBar } from './NavBar';
import { PanelsContainer } from './PanelsContainer';

class App extends React.Component
{
  render ()
  {
    return (
      <div>
        <NavBar />
        <div className="jumbotron">
          <PanelsContainer id="teacher-section" />
        </div>
      </div>
    );
  }
}

export default App;