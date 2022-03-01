import React from 'react';
import './App.css';
import Generic from './components/Generic';
import Composed from './components/Composed';

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
      jobEnd: ''
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state)
  }

  handlePhone = (event) => {
    const {name, value} = event.target
    const regex = new RegExp(/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/)
    if(regex.test(value)){
      this.setState({ [name]: value })
      this.setState({validPhone: true})
    }else{
      this.setState({validPhone: false})
    }
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
            handlePhone={this.handlePhone}
            validPhone={this.state.validPhone}
            inputs={['text', 'text', 'text', 'tel']}
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
            dateTitle={[null,null,'Year']}
          />
          <Generic
            //Practical Experience
            title='Experience'
            onSubmit={this.handleSubmit}
            onChange={this.handleInput}
            inputs={['text', 'text', 'textarea', 'date', 'date']}
            placeholder={['Company', 'Title', 'Tasks', 'Start Date', 'End Date']}
            names={['company', 'position', 'jobTasks', 'jobStart', 'jobEnd']}
            dateTitle={[null, null, null, 'Start Date','End Date']}
          />

        </div>
        <Composed
          // Anyway to make this more clean??
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          school={this.state.school}
          studyTitle={this.state.studyTitle}
          studyDate={this.state.studyDate}
          company={this.state.company}
          position={this.state.position}
          jobTasks={this.state.jobTasks}
          jobStart={this.state.jobStart}
          jobEnd={this.state.jobEnd}
        />
      </div>
    )
  }
}

export default App;
