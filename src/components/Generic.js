import React from "react";
import { nanoid } from "nanoid";


class Generic extends React.Component{
    constructor(props){
        super(props)
    }

    inputElems = this.props.inputs.map((elem, index) => {
        if(elem !== 'textarea'){
            return(
                <input className="generic--input" 
                onChange={this.props.onChange} 
                type={elem}
                placeholder={this.props.placeholder[index] ? this.props.placeholder[index]: ' '}
                name={this.props.names[index]}
                key={nanoid()}
                >
                </input>
            )
        }else{
            return(
                <textarea className="generic--textarea"
                onChange={this.props.onChange} 
                placeholder={this.props.placeholder[index] ? this.props.placeholder[index]: ' '}
                name={this.props.names[index]}
                key={nanoid()}
                >

                </textarea>
            )
        }
    })

    render() {
        return (
            <div className="generic--container">
                <form className="generic--form">
                <h1 className="generic--title">{this.props.title}</h1>
                    {this.inputElems}
                    <button onClick={this.props.onSubmit} className="generic--button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Generic;