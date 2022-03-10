import React from "react";

const Personal = (props) => {
    return (
        <div className="personal--container">
            <div className="title--container">
                <h1 className="personal--title">Personal Info</h1>
                <button className="material-icons personal--button" value="1" onClick={props.onClick}>{props.editMode === "1" ? 'save' : 'edit'}</button>
            </div>
            <hr></hr>
            {props.editMode === "1" ?
                <div className="general--container">
                    <span> <input
                        className="general--input"
                        placeholder="First Name"
                        value={props.firstName}
                        onChange={props.onChange}
                        name="firstName"
                    ></input>
                        <input
                            className="general--input"
                            placeholder="Last Name"
                            value={props.lastName}
                            onChange={props.onChange}
                            name="lastName"
                        ></input> </span>
                    <input
                        className="general--input"
                        placeholder="email@address.com"
                        type="email"
                        value={props.email}
                        onChange={props.onChange}
                        name="email"
                    ></input>
                    <input
                        className="general--input"
                        placeholder="111-222-3333"
                        type="tel"
                        value={props.phone}
                        onChange={props.onPhone}
                        name="phone"
                    ></input>
                </div> :
                <div className="general--container">
                    <h4>{props.firstName} {props.lastName}</h4>
                    <h4>{props.email}</h4>
                    <h4>{props.phone}</h4>

                </div>}
        </div>
    )
}

export default Personal