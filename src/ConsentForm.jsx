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

    this.state = {
      selectedBadges: []
    };
  }

  checkBoxClick = badge => {
    console.log("badge", badge);

    //check if array already contains badge

    //add this to array
    let badges = this.state.selectedBadges;
    badges.push(badge);
  };

  submit = () => {
    console.log(this.state.selectedBadges);

    console.log(JSON.stringify(this.state.selectedBadges));
  };

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
            <Panel.Body>
              <div>
                {badge.explanationUser}
                <input
                  type="checkbox"
                  onClick={() => this.checkBoxClick(badge)}
                />
              </div>
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
        <input type="button" onClick={this.submit} />
      </div>
    );
  }
}
