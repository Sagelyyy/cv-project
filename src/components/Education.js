import React from "react";


const Education = (props) => {
    return (

        <div className="education--container">
            <div className="title--container">
                <h1 className="education--title">Education</h1>
                <button className="material-icons education--button" value="2" onClick={props.onClick}>{props.editMode === "2" ? 'save' : 'edit'}</button>
            </div>
            <hr></hr>
            {props.editMode === "2" ?
                <div className="general--container">
                    <h3 className="subtitle">School</h3>
                    <hr className="subtitle--hr"></hr>
                    <input
                        className="general--input"
                        placeholder="School Name"
                        value={props.school}
                        onChange={props.onChange}
                        name="school"
                    ></input>
                    <br></br>
                    <h3 className="subtitle">Degree</h3>
                    <hr className="subtitle--hr"></hr>
                    <input
                        className="general--input"
                        placeholder="Degree"
                        value={props.studyTitle}
                        onChange={props.onChange}
                        name="studyTitle"
                    ></input>
                    <br></br>
                    <h3 className="subtitle">Graduation Date</h3>
                    <hr className="subtitle--hr"></hr>
                    <input
                        className="general--input"
                        placeholder=""
                        type="date"
                        value={props.studyDate}
                        onChange={props.onChange}
                        name="studyDate"
                    ></input>
                    <br></br>
                </div> :
                <div className="general--container">
                    <h3 className="subtitle">School</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.school}</h4>
                    <br></br>
                    <h3 className="subtitle">Degree</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.studyTitle}</h4>
                    <br></br>
                    <h3 className="subtitle">Graduation Date</h3>
                    <hr className="subtitle--hr"></hr>
                    <h4>{props.studyDate}</h4>

                </div>}
        </div>
    )
}

export default Education