import React from "react";
import { nanoid } from "nanoid";


class Generic extends React.Component {
    constructor(props) {
        super(props)
    }

    inputElems = this.props.inputs.map((elem, index) => {
        if (elem !== 'textarea' && elem !== 'date' && elem !== 'tel') {
            return (
                <input className="generic--input"
                    onChange={this.props.onChange}
                    type={elem}
                    placeholder={this.props.placeholder[index] ? this.props.placeholder[index] : ' '}
                    name={this.props.names[index]}
                    key={nanoid()}

                >
                </input>
            )
        } else if (elem === 'date') {
            return (
                <div>
                    <p className="generic--date--desc">{this.props.dateTitle[index]}</p>
                    <input className="generic--input"
                        onChange={this.props.onChange}
                        type={elem}
                        placeholder={this.props.placeholder[index] ? this.props.placeholder[index] : ' '}
                        name={this.props.names[index]}
                        key={nanoid()}
                    >
                    </input>
                </div>
            )
        } else if (elem === 'tel') {
            //valid phone text not working for some reason.
            return (
                <div>
                    <p className="generic--phone--desc">{this.props.validPhone ? ' ' : 'You must enter a valid phone number'}</p>
                    <input className="generic--input"
                        onChange={this.props.handlePhone}
                        type={elem}
                        placeholder={this.props.placeholder[index] ? this.props.placeholder[index] : ' '}
                        name={this.props.names[index]}
                        key={nanoid()}
                    >
                    </input>
                </div>
            )
        } else {
            return (
                <textarea className="generic--textarea"
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder[index] ? this.props.placeholder[index] : ' '}
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
                    {/* <button onClick={this.props.onSubmit} className="generic--button">Submit</button> */}
                </form>
            </div>
        )
    }
}

export default Generic;