import React from "react";
import './styles.css'

class Movies extends React.Component {
    render()
    {
        return(
            <div className="mobile">
            <img src={this.props.poster} alt="" ></img>
            <h4>{this.props.name}</h4>
            <p>Price: {this.props.Price}</p>
            <button>Book Tickets</button>

            </div>

        )
    }
}
export default Movies