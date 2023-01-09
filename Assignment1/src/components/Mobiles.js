import React from "react";
import './styles.css'

function Mobiles(props){
    return(
        <div className="mobile">
            <img src={props.pic} alt=""></img>
            <h4>{props.name}</h4>
            <p>Price: {props.price}</p>
            <button>Buy Now</button>
        </div>
    )
}
export default Mobiles