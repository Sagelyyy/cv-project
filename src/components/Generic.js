import React from "react";

class Generic extends React.Component{
    constructor(props){
        super(props)
    }

    inputElems = this.props.inputs.map((elem, index) => {
        return(
            <input className="generic--input" 
            onChange={this.props.onChange} 
            type={elem}
            name={this.props.names[index]}
            >
            </input>
        )
    })

    render() {
        return (
            <div className="generic--container">
                <form className="generic--form">
                    {this.inputElems}
                    <button className="generic--button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Generic;