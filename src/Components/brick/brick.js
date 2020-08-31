import React from 'react';

import './style.css'

const Brick = (props) => {
console.log("looking prop__", props); 
return <div className = "brick-cont">{props.name}</div>
}

export default Brick;
/*const Brick = function(){ }*/