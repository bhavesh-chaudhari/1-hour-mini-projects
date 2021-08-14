import React from 'react'
import './Div.css'

const DivComponent = (props)=>{

    const {number, color, colorName} = props;
    return (
      <>
        <div style={{background:color}}  className="div-component">
            <div className="div-number">
                {number}
            </div>
            <div className="div-color">
                {colorName}
            </div>
        </div>
      </>
    );
}

export default DivComponent;