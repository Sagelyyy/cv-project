import React from 'react';
import './App.css';
import Generic from './components/Generic';
import Composed from './components/Composed';

//maybe we should move the state to the app instead of having each component control its own state?


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      school: '',
      studyTitle: '',
      studyDate: '',
      company: '',
      position: '',
      jobTasks: '',
      jobStart: '',
      jobEnd: ''
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    // const { name, value } = e.target
    // this.setState({ [name]: value })
    // console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div className='app--forms'>
          <Generic
            //General info
            title='General Info'
            onSubmit={this.handleSubmit}
            onChange={this.handleInput}
            inputs={['text', 'text', 'text', 'number']}
            placeholder={['First Name', 'Last Name', 'email@address.com', 'Phone',]}
            names={['firstName', 'lastName', 'email', 'phone']}
          />
          <Generic
            //Education
            title='Education'
            onSubmit={this.handleSubmit}
            onChange={this.handleInput}
            inputs={['text', 'text', 'date']}
            placeholder={['Schoo Name', 'Degree', ' ']}
            names={['school', 'studyTitle', 'studyDate']}
          />
          <Generic
            //Practical Experience
            title='Experience'
            onSubmit={this.handleSubmit}
            onChange={this.handleInput}
            inputs={['text', 'text', 'textarea', 'date', 'date']}
            placeholder={['Company', 'Title', 'Tasks', 'Start Date', 'End Date']}
            names={['company', 'position', 'jobTasks', 'jobStart', 'jobEnd']}
          />

        </div>
        <Composed
        //somehow make this so it does not update instantly. Maybe a seperate state for the composed cv??
          firstName={this.state.firstName}
        />
      </div>
    )
  }
}

export default App;
