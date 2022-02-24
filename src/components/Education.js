import React from "react";

class Education extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            school: '',
            studyTitle: '',
            studyDate: '',
        }
    }

    handleInput = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
        console.log(this.state)
    }


    render() {
        return (
            <div className="education--container">
                <form className="education--form">
                    <input className="education--input" onChange={this.handleInput} value={this.state.school} name="school" placeholder="School Name" type='text'></input>
                    <input className="education--input" onChange={this.handleInput} value={this.state.studyTitle} name="studyTitle" placeholder="Study Title" type='text'></input>
                    <input className="education--input" onChange={this.handleInput} value={this.state.studyDate} name="studyDate" placeholder="Study Date" type='text'></input>
                    <button className="education--button">Submit</button>
                </form>
            </div>
        )
    }
}

export default Education;