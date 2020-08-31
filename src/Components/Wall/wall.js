import React from 'react';
import App from '../../App';

import Brick from '../brick/brick.js'
import './style.css'; 

 class Wall extends React.Component
 {
         
    constructor(props)
    {
        super(props);
        this.state = {
            bricks : [1,2,3,4]
       } ; 
    }
    /*abc = function(){

    } 
    def(){

    }
    ghi = () => {

    }

    */
    addMoreBricks = ( ) => {
        const newBrickArray = [ ...this.state.bricks ];
        newBrickArray.push(newBrickArray.length+1)
    //this.state.bricks.push(5);
    this.setState(
        {
            bricks : newBrickArray
        }
    );
    };
    
     //@override method
     //render method returns what is being displayed on the browser
     render = () => {
        return(


          <div className = "wall-container">
          {
              this.state.bricks.map( (brick) => {
                  return <Brick key={brick} name ={brick}/>;
              })
          }
           <button className = "btn" onClick={this.addMoreBricks}> Add More</button>
          </div>

        ) 
     }
 } 

 export default Wall;