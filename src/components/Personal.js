import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="personal--container">
                {this.props.editMode ?
                    <div className="general--container">
                        <input className="generl--input"
                            value={this.props.firstName}
                            onChange={this.props.onChange}
                            name="firstName"
                        ></input>
                        <input
                            value={this.props.lastName}
                            onChange={this.props.onChange}
                            name="lastName"
                        ></input>
                        <input
                            value={this.props.email}
                            onChange={this.props.onChange}
                            name="email"
                        ></input>
                        <input
                            value={this.props.phone}
                            onChange={this.props.onChange}
                            name="phone"
                        ></input>
                                <button onClick={this.props.onClick}>Edit</button>
                    </div> :
                    <div className="general--container">
                        <h4>{this.props.firstName}</h4>
                        <h4>{this.props.lastName}</h4>
                        <h4>{this.props.email}</h4>
                        <h4>{this.props.phone}</h4>
                        <button onClick={this.props.onClick}>Edit</button>
                    </div>}
            </div>
        )
    }
}

export default Personal