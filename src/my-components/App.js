import React from 'react';
import '../css/App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavBar } from './NavBar';
import { PanelsContainer } from './PanelsContainer';
import { LeftSideBar } from './LeftSideBar';

class App extends React.Component
{
  render ()
  {
    return (
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col md="auto">
            <LeftSideBar />
          </Col>
          <Col>
            <div className="jumbotron">
              <PanelsContainer id="teacher-section" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;