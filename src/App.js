import React from 'react';
import './App.css';
import General from './components/General';
import Education from './components/Education';
import Generic from './components/Generic';

//maybe we should move the state to the app instead of having each component control its own state?


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
  render(){
    return(
      <div className="App">
        <div className='app--forms'>
        {/* <General />
        <Education /> */}
        <Generic 
          onChange={this.handleInput}
          inputs={['text', 'text', 'text', 'number']}
          names={['firstName', 'lastName', 'email', 'phone']}
        />
        </div>
    </div>
    )
  }
}

export default App;
