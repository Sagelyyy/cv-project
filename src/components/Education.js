import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="education--container">
                <div className="title--container">
                    <h1 className="education--title">Education</h1>
                    <button className="material-icons education--button" value="2" onClick={this.props.onClick}>{this.props.editMode === "2" ? 'save' : 'edit'}</button>
                </div>
                <hr></hr>
                {this.props.editMode === "2" ?
                    <div className="general--container">
                        <h3 className="subtitle">School</h3>
                        <hr className="subtitle--hr"></hr>
                        <input
                            className="general--input"
                            placeholder="School Name"
                            value={this.props.school}
                            onChange={this.props.onChange}
                            name="school"
                        ></input>
                        <br></br>
                        <h3 className="subtitle">Degree</h3>
                        <hr className="subtitle--hr"></hr>
                        <input
                            className="general--input"
                            placeholder="Degree"
                            value={this.props.studyTitle}
                            onChange={this.props.onChange}
                            name="studyTitle"
                        ></input>
                        <br></br>
                        <h3 className="subtitle">Graduation Date</h3>
                        <hr className="subtitle--hr"></hr>
                        <input
                            className="general--input"
                            placeholder=""
                            type="date"
                            value={this.props.studyDate}
                            onChange={this.props.onChange}
                            name="studyDate"
                        ></input>
                        <br></br>
                    </div> :
                    <div className="general--container">
                        <h3 className="subtitle">School</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.school}</h4>
                        <br></br>
                        <h3 className="subtitle">Degree</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.studyTitle}</h4>
                        <br></br>
                        <h3 className="subtitle">Graduation Date</h3>
                        <hr className="subtitle--hr"></hr>
                        <h4>{this.props.studyDate}</h4>

                    </div>}
            </div>
        )
    }
}

export default Education