import React from "react";

class Composed extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="composed--container">
                <h1>{this.props.firstName} {this.props.lastName}</h1>
                <h2>{this.props.email}</h2>
                <h3>{this.props.phone}</h3>
            </div>
        )
    }
}

export default Composed