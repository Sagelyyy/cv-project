import React from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="experience--container">
                <div className="title--container">
                    <h1 className="experience--title">Experience</h1>
                    <button className="material-icons experience--button" value="3" onClick={this.props.onClick}>{this.props.editMode === "3" ? 'save' : 'edit'}</button>
                </div>
                <hr></hr>
                {this.props.editMode === "3" ?
                    <div className="general--container">
                        <h3 className="subtitle">Company</h3>
                        <hr className="subtitle--hr"></hr>
                        <input
                            className="general--input"
                            placeholder="Company"
                            value={this.props.company}
                            onChange={this.props.onChange}
                            name="company"
                        ></input>
                        <br></br>
                        <h3 className="subtitle">Title</h3>
                        <hr className="subtitle--hr"></hr>
                        <input
                            className="general--input"
                            placeholder="Title"
                            value={this.props.position}
                            onChange={this.props.onChange}
                            name="position"
                        ></input>
                        <br></br>
                        <h3 className="subtitle">Job Tasks</h3>
                        <hr className="subtitle--hr"></hr>
                        <textarea
                            className="general--input"
                            placeholder="Tasks"
                            value={this.props.jobTasks}
                            onChange={this.props.onChange}
                            name="jobTasks"
                        ></textarea>
                        <br></br>
                        <h3 className="subtitle">Start and End Dates</h3>
                        <hr className="subtitle--hr"></hr>
                        <input
                            className="general--input"
                            type="date"
                            value={this.props.jobStart}
                            onChange={this.props.onChange}
                            name="jobStart"
                        ></input>
                        <br></br>
                        <input
                            className="general--input"
                            type="date"
                            value={this.props.jobEnd}
                            onChange={this.props.onChange}
                            name="jobEnd"
                        ></input>
                        <br></br>
                    </div> :
                    <div className="general--container">
                        <h3 className="subtitle">Company</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.company}</h4>
                        <br></br>
                        <h3 className="subtitle">Title</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.position}</h4>
                        <br></br>
                        <h3 className="subtitle">Job Tasks</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.jobTasks}</h4>
                        <br></br>
                        <h3 className="subtitle">Start and End Dates</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.jobStart}</h4>
                        <h4>{this.props.jobEnd}</h4>

                    </div>}
            </div>
        )
    }
}

export default Experience