import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rating from './rating.png'; 

import {Panel, PanelGroup, Accordion} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Radio, Checkbox} from 'react-bootstrap';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

// function multiplyNode(node, count, deep) {
//   for (var i = 0, copy; i < count - 1; i++) {
//       copy = node.cloneNode(deep);
//       node.parentNode.insertBefore(copy, node);
//   }
// }

// multiplyNode(document.querySelector('.box'), 5, true);

// var cloneGrid = document.getElementById("grid-container");
// var dup_cloneGrid = cloneGrid.cloneNode(true);


class App extends Component {
  
  render() {
    return (
      <div className="App">


         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <PanelGroup accordion id="accordion-example" >
        <Panel id="collapsible-panel-example-1" eventKey="1"> 
          <Panel.Heading>
            <Panel.Title toggle>
              Data Subject Rights
              <div className="glyphRight">    
          <Glyphicon glyph ="triangle-bottom">
          </Glyphicon>
          </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        

        
        <Panel id="collapsible-panel-example-2" eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>
              Purpose
              <div className="glyphRight">     
          <Glyphicon glyph ="triangle-bottom">
          </Glyphicon>
          </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
           

            <div class="scroll">
             <Panel.Body>
            </Panel.Body>
            </div>
          </Panel.Collapse>
      </Panel>

        <Panel id="collapsible-panel-example-2" eventKey="3">
          <Panel.Heading>
            <Panel.Title toggle>
              Purpose
              <div className="glyphRight">    
          <Glyphicon glyph ="triangle-bottom">
          </Glyphicon>
          </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
           

            <div class="scroll">
             <Panel.Body>
             
              <Grid>
               <Row>
               
                  <Col xs={6} md={4}>
                  Badge Name
                  
                  
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
                  <Row>fgsg</Row>
               
                  
                  </Col>
              
                  <Col xs={6} md={4}>
                 Description
                  </Col>
                  
                </Row>
              </Grid>
            
              
            </Panel.Body>
            </div>
          </Panel.Collapse>
        </Panel>
        
        <Panel id="collapsible-panel-example-2" eventKey="4">
          <Panel.Heading>
            <Panel.Title toggle>
             Purpose
          <div className="glyphRight">    
          <Glyphicon glyph ="triangle-bottom">
          </Glyphicon>
          </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
           

            <div class="scroll">
             <Panel.Body>
             
              <div class="grid-container">                 
                  <div id="grid-item1">
                  <img src={rating} />
                  </div>
              
                  <div id="grid-item2">
                  All of the collected user data is stored for an unspecified period of time. If this is the case you are legally obligated by the GDPR to list the reasoning/criteria for storing specific data. We recommend linking to the specific passage in your TOS and showing it alongside the badges.
                 </div>

                 <div id="grid-item3">
                 <Checkbox className="cBox">
                 </Checkbox>
                 <Checkbox>
                 </Checkbox>
                 </div>
               </div>   
            
              
            </Panel.Body>
            </div>
          </Panel.Collapse>
        </Panel>
        
        <Panel id="collapsible-panel-example-2" eventKey="5">
          <Panel.Heading>
            <Panel.Title toggle>
              Purpose
              <div className="glyphRight">    
          <Glyphicon glyph ="triangle-bottom">
          </Glyphicon>
          </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
           

            <div class="scroll">
             <Panel.Body>  
            </Panel.Body>
            </div>
          </Panel.Collapse>
        </Panel>

        <Panel id="collapsible-panel-example-2" eventKey="6">
          <Panel.Heading>
            <Panel.Title toggle>
              Purpose
              <div className="glyphRight">    
          <Glyphicon glyph ="triangle-bottom">
          </Glyphicon>
          </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
           

            <div class="scroll">
             <Panel.Body>        
            </Panel.Body>
            </div>
          </Panel.Collapse>
        </Panel>
        </PanelGroup>
   

        


  <div className="test123">
    <Button className='btTest' bsSize="large">
      Block level button
    </Button>
  </div>


       
    </div>
    );
  }
}



export default App;
