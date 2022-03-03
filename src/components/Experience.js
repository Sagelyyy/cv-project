import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="experience--container">
                <button className="material-icons experience--button" value="3" onClick={this.props.onClick}>{this.props.editMode === "3" ? 'save' : 'edit'}</button>
                <h1 className="experience--title">Experience</h1>
                <hr></hr>
                {this.props.editMode === "3" ?
                    <div className="general--container">
                                               <input
                            className="general--input"
                            placeholder="Company"
                            value={this.props.company}
                            onChange={this.props.onChange}
                            name="company"
                        ></input>
                            <input
                                className="general--input"
                                placeholder="Title"
                                value={this.props.position}
                                onChange={this.props.onChange}
                                name="position"
                            ></input>
                        <textarea
                            className="general--input"
                            placeholder="Tasks"
                            value={this.props.jobTasks}
                            onChange={this.props.onChange}
                            name="jobTasks"
                        ></textarea>
                        <input
                            className="general--input"
                            type="date"
                            value={this.props.jobStart}
                            onChange={this.props.onChange}
                            name="jobStart"
                        ></input>
                        <input
                            className="general--input"
                            type="date"
                            value={this.props.jobEnd}
                            onChange={this.props.onChange}
                            name="jobEnd"
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

export default Experience