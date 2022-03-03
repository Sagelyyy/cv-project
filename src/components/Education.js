import React from "react";

class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="education--container">
                <button className="material-icons education--button" value="2" onClick={this.props.onClick}>{this.props.editMode === "2" ? 'save' : 'edit'}</button>
                <h1 className="education--title">Education</h1>
                <hr></hr>
                {this.props.editMode === "2" ?
                    <div className="general--container">
                        <input
                            className="general--input"
                            placeholder="School Name"
                            value={this.props.school}
                            onChange={this.props.onChange}
                            name="school"
                        ></input>
                            <input
                                className="general--input"
                                placeholder="Degree"
                                value={this.props.studyTitle}
                                onChange={this.props.onChange}
                                name="studyTitle"
                            ></input>
                        <input
                            className="general--input"
                            placeholder=""
                            type="date"
                            value={this.props.studyDate}
                            onChange={this.props.onChange}
                            name="studyDate"
                        ></input>
                    </div> :
                    <div className="general--container">
                        <h5>{this.props.school}</h5>
                        <h5>{this.props.studyTitle}</h5>
                        <h5>{this.props.studyDate}</h5>

                    </div>}
            </div>
        )
    }
}

export default Education