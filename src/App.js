import React from 'react';
import './App.css';
import Generic from './components/Generic';
import Composed from './components/Composed';
import Personal from './components/Personal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      validPhone: false,
      school: '',
      studyTitle: '',
      studyDate: '',
      company: '',
      position: '',
      jobTasks: '',
      jobStart: '',
      jobEnd: '',
      editMode: true
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
      this.setState(old => { return { ...old, validPhone: false } })
    }
  }

  handleEdit = (event) => {
    this.setState(old => {
      return {
        ...old,
        editMode: !old.editMode
      }
    })
    console.log(this.state.editMode)
    console.log(this.state)
  }

  render() {

    return (
      <div className="App">
        <Personal 
        editMode={this.state.editMode}
        onChange={this.handleInput}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        phone={this.state.phone}
        email={this.state.email}
        onClick={this.handleEdit}
        
        />
      </div>
    )
  }
}

export default App;
