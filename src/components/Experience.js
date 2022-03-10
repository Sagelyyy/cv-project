import React from "react";

const Experience = (props) => {
    return (

        <div className="experience--container">
            <div className="title--container">
                <h1 className="experience--title">Experience</h1>
                <button className="material-icons experience--button" value="3" onClick={props.onClick}>{props.editMode === "3" ? 'save' : 'edit'}</button>
            </div>
            <hr></hr>
            {props.editMode === "3" ?
                <div className="general--container">
                    <h3 className="subtitle">Company</h3>
                    <hr className="subtitle--hr"></hr>
                    <input
                        className="general--input"
                        placeholder="Company"
                        value={props.company}
                        onChange={props.onChange}
                        name="company"
                    ></input>
                    <br></br>
                    <h3 className="subtitle">Title</h3>
                    <hr className="subtitle--hr"></hr>
                    <input
                        className="general--input"
                        placeholder="Title"
                        value={props.position}
                        onChange={props.onChange}
                        name="position"
                    ></input>
                    <br></br>
                    <h3 className="subtitle">Job Tasks</h3>
                    <hr className="subtitle--hr"></hr>
                    <textarea
                        className="general--input"
                        placeholder="Tasks"
                        value={props.jobTasks}
                        onChange={props.onChange}
                        name="jobTasks"
                    ></textarea>
                    <br></br>
                    <h3 className="subtitle">Start and End Dates</h3>
                    <hr className="subtitle--hr"></hr>
                    <input
                        className="general--input"
                        type="date"
                        value={props.jobStart}
                        onChange={props.onChange}
                        name="jobStart"
                    ></input>
                    <br></br>
                    <input
                        className="general--input"
                        type="date"
                        value={props.jobEnd}
                        onChange={props.onChange}
                        name="jobEnd"
                    ></input>
                    <br></br>
                </div> :
                <div className="general--container">
                    <h3 className="subtitle">Company</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.company}</h4>
                    <br></br>
                    <h3 className="subtitle">Title</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.position}</h4>
                    <br></br>
                    <h3 className="subtitle">Job Tasks</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.jobTasks}</h4>
                    <br></br>
                    <h3 className="subtitle">Start and End Dates</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.jobStart}</h4>
                    <h4>{props.jobEnd}</h4>

                </div>}
        </div>
    )
}

export default Experience