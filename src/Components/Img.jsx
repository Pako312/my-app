import React from "react";
import img from './Img/Plov.jpg'
import './Index.css';
function Img() {
    return (
        <div className="Img-box"> 
            <img src={img} alt="" />
        </div>
    );
};
  

export default Img;