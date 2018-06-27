import React, { Component } from "react";
import rating from "./rating.png";
import { Panel, PanelGroup, Accordion } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Radio, Checkbox } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Glyphicon } from "react-bootstrap";
import badges from "./badges";
import "./form.css";
import badgeCategory from "./badges";
import NeededBadges from "./NeededBadges";

export class ConsentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBadges: []
    };
  }

  checkBoxClick = badge => {
   // console.log("badge", badge);

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


  const category = badges.badgeCategory.map((badgeCategory, index) => {
  //  console.log(badgeCategory.cat);
      return (
        <Panel className="collapsible-panel" key={index} eventKey={index}>
          <Panel.Heading>
            <Panel.Title toggle>
              {badgeCategory.cat}
              <div className="glyphRight">
                <Glyphicon glyph="triangle-bottom" />
              </div>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
           <div class="scroll">
            <Panel.Body>
              {/* {test} */}
              
              {descriptionImage2}
            </Panel.Body>
            </div>
          </Panel.Collapse>
        </Panel>
      );
    });

    const bCat = badges.badgeCategory.map((badgeCat) => {
      
      var catArr = {};
      catArr = badgeCat.cat;
      return catArr;
      
    });
    console.log(bCat); 
    

    const descriptionImage2 = badges.badge.map((badge, index) => {
    // console.log(bCat);
    // console.log(badge.badgeCategory);
      
      if (badge.badgeCategory==="purpose"){
        //console.log(bCat);
        <div class="grid-container" key={index}>                 
                <div class="grid-item1">
                
                
                {/* <Image src={require({badge.imgURL})}/> */}
                <Image src={badge.imgURL}/>


                </div>
                <div class="grid-item2">
                {/*where badgeCategory.id=badge.badgeCategory */}
                {badge.badgeCategory}
                </div>
                <div class="grid-item3">
                <input type="checkbox"
                  onClick={() => this.checkBoxClick(badge)}
                />
                </div>
        </div>
        return;
        }
        else return null;
     }
  );
 
  // const category = badges.badge.map((badge, index) => {
  // //  console.log(badgeCategory.cat);
  //     return (
  //       <Panel className="collapsible-panel" key={index} eventKey={index}>
  //         <Panel.Heading>
  //           <Panel.Title toggle>
  //             {badge.badgeName}
  //             <div className="glyphRight">
  //               <Glyphicon glyph="triangle-bottom" />
  //             </div>
  //           </Panel.Title>
  //         </Panel.Heading>
  //         <Panel.Collapse>
  //          <div class="scroll">
  //           <Panel.Body>
  //             {/* {test} */}
  //             {/* {descriptionImage2} */}
  //             <div class="grid-container" key={index}>                 
  //               <div class="grid-item1">
                
                
  //               {/* <Image src={require({badge.imgURL})}/> */}
  //               <Image src={badge.imgURL}/>


  //               </div>
  //               <div class="grid-item2">
  //               {/*where badgeCategory.id=badge.badgeCategory */}
  //               {badge.descriptionProvider}
  //               </div>
  //               <div class="grid-item3">
  //               <input type="checkbox"
  //                 onClick={() => this.checkBoxClick(badge)}
  //               />
  //               </div>
  //       </div>
              
              
  //           </Panel.Body>
  //           </div>
  //         </Panel.Collapse>
  //       </Panel>
  //     );
  //   });
    
  

    return (
      <div>
        
        {/* <Image src={rating}/>
        <Image src={require("./images/datasubjectrights/access.png")}/> */}

        <PanelGroup accordion id="accordion-example">
          {category}
        </PanelGroup>
        <input type="button" onClick={this.submit} />
      </div>
    );
  }
}
