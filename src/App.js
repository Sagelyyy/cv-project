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
 
      </div>
    )
  }
}

export default App;
