import React, { Component } from "react";
import rating from "./rating.png";
import { Panel, PanelGroup, Accordion } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Radio, Checkbox } from "react-bootstrap";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import badges from "./badges";

export class ConsentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stringItems = badges.badge.map((badge, index) => {
      return (
        <Panel id="collapsible-panel-example-1" key={index} eventKey={index}>
          <Panel.Heading>
            <Panel.Title toggle>
              {badge.badgeName}
              <div className="glyphRight">
                <Glyphicon glyph="triangle-bottom" />
              </div>

            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body >
                {badge.explanationUser}
                </Panel.Body>
          </Panel.Collapse>
        </Panel>
      );
    });

    return (
      <div>
        <PanelGroup accordion id="accordion-example">
          {stringItems}
        </PanelGroup>
      </div>
    );
  }
}
