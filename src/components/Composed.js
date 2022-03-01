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
                    <h1>Education</h1>
                    <h4>{this.props.school}</h4>
                    <h4>{this.props.studyTitle}</h4>
                    <h4>{this.props.studyDate}</h4>
                </div>
                <div className="composed--experience">
                    <h1>Experience</h1>
                    <h4>{this.props.company}</h4>
                    <h4>{this.props.position}</h4>
                    <h4>{this.props.jobTasks}</h4>
                    <h4>{this.props.jobStart}</h4>
                    <h4>{this.props.jobEnd}</h4>



                </div>
            </div>
        )
    }
}

export default Composed