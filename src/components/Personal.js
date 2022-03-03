import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="personal--container">
                <button className="material-icons personal--button" value="1" onClick={this.props.onClick}>{this.props.editMode === "1" ? 'save' : 'edit'}</button>
                <h1 className="personal--title">Personal Info</h1>
                <hr></hr>
                {this.props.editMode === "1" ?
                    <div className="general--container">
                        <span> <input
                            className="general--input"
                            placeholder="First Name"
                            value={this.props.firstName}
                            onChange={this.props.onChange}
                            name="firstName"
                        ></input>
                            <input
                                className="general--input"
                                placeholder="Last Name"
                                value={this.props.lastName}
                                onChange={this.props.onChange}
                                name="lastName"
                            ></input> </span>
                        <input
                            className="general--input"
                            placeholder="email@address.com"
                            type="email"
                            value={this.props.email}
                            onChange={this.props.onChange}
                            name="email"
                        ></input>
                        <input
                            className="general--input"
                            placeholder="111-222-3333"
                            type="tel"
                            value={this.props.phone}
                            onChange={this.props.onPhone}
                            name="phone"
                        ></input>
                    </div> :
                    <div className="general--container">
                        <h4>{this.props.firstName} {this.props.lastName}</h4>
                        <h4>{this.props.email}</h4>
                        <h4>{this.props.phone}</h4>

                    </div>}
            </div>
        )
    }
}

export default Personal