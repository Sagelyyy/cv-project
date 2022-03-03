import React from 'react';
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johnny@jd.com',
      phone: '123-456-7899',
      validPhone: false,
      school: 'Omega Academy',
      studyTitle: 'Awesome Degree',
      studyDate: '2022-02-10',
      company: 'Alpha Industries',
      position: 'CEO',
      jobTasks: 'Being Amazing',
      jobStart: '2022-03-01',
      jobEnd: '2022-03-02',
      editMode: "0"
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state)
  }

  handlePhone = (event) => {
    const { name, value } = event.target
    const regex = new RegExp(/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/)
    if (regex.test(value)) {
      this.setState({ [name]: value })
      this.setState(old => { return { ...old, validPhone: true } })
    } else {
      this.setState({ [name]: value })
      this.setState(old => { return { ...old, validPhone: false } })
    }
  }

  handleEdit = (event) => {
    const { value } = event.target
    if (this.state.editMode === "0") {
      this.setState(old => {
        return {
          ...old,
          editMode: value
        }
      })
    } else if (this.state.editMode > 0) {
      this.setState(old => {
        return {
          ...old,
          editMode: "0"
        }
      })
    }
  }

  render() {

    return (
      <div className="App">
        <div className='App--container'>
        <Personal
          editMode={this.state.editMode}
          onChange={this.handleInput}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phone={this.state.phone}
          email={this.state.email}
          onClick={this.handleEdit}
          onPhone={this.handlePhone}
        />
        <Education
          editMode={this.state.editMode}
          onChange={this.handleInput}
          school={this.state.school}
          studyTitle={this.state.studyTitle}
          studyDate={this.state.studyDate}
          onClick={this.handleEdit}
        />
        <Experience
          editMode={this.state.editMode}
          onChange={this.handleInput}
          company={this.state.company}
          position={this.state.position}
          jobTasks={this.state.jobTasks}
          jobStart={this.state.jobStart}
          jobEnd={this.state.jobEnd}
          onClick={this.handleEdit}
        />
        </div>
      </div>
    )
  }
}

export default App;
