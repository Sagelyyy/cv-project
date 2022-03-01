import React from "react";
import blankProfile from "../images/blank-profile.png"

class Composed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="composed--container">
                <div className="composed--general">
                    <div className="composed--title--avatar--container">
                        <img src={blankProfile} className="composed--avatar" />
                        <div className="composed--general--container">
                            <div className="composed--general--title--container">
                            <h1 className="composed--general--title">Personal Information</h1>
                            </div>
                        <h1 className="composed--title">{this.props.firstName} {this.props.lastName}</h1>
                        <h2>{this.props.email}</h2>
                        <h3>{this.props.phone ? this.props.phone : ' '}</h3>
                    </div>

                    </div>
                </div>
                <hr></hr>
                <div className="composed--education">
                    <h1 className="composed--edu--title">Education</h1>
                    <h3 className="composed--edu--school--title">School:</h3>
                    <h4 className="composed--edu--school">{this.props.school}</h4>
                    <h3 className="composed--edu--degree--title">Degree:</h3>
                    <h4 className="composed--edu--degree">{this.props.studyTitle}</h4>
                    <h3 className="composed--edu--date--title">Graduation Date:</h3>
                    <h4 className="composed--edu--date">{this.props.studyDate}</h4>
                </div>
                <hr></hr>
                <div className="composed--experience">
                    <h1 className="composed--exp--title">Experience</h1>
                    <h3 className="composed--exp--company--title">Company:</h3>
                    <h4>{this.props.company}</h4>
                    <h3 className="composed--exp--title--title">Title:</h3>
                    <h4>{this.props.position}</h4>
                    <h3 className="composed--exp--tasks--title">Tasks:</h3>
                    <h4>{this.props.jobTasks}</h4>
                    <h3 className="composed--exp--startend--title">Start and End Dates:</h3>
                    <h4>{this.props.jobStart}</h4>
                    <h4>{this.props.jobEnd}</h4>



                </div>
            </div>
        )
    }
}

export default Composed