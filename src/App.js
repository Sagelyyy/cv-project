import React from 'react';
import './App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import { render } from '@testing-library/react';

const App = () => {
  const [userData, setUserData] = React.useState({
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
  })

  const handleInput = (event) => {
    const { name, value } = event.target
    setUserData(old => ({ ...old, [name]: value }))
  }

  const handleEdit = (event) => {
        const { value } = event.target
    if (userData.editMode === "0") {
      setUserData(old => {
        return {
          ...old,
          editMode: value
        }
      })
    } else if (userData.editMode > 0) {
      setUserData(old => {
        return {
          ...old,
          editMode: "0"
        }
      })
    }
  }

  const handlePhone = (event) => {
        const { name, value } = event.target
    const regex = new RegExp(/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/)
    if (regex.test(value)) {
      setUserData(old => ({...old, [name]: value }))
      setUserData(old => { return { ...old, validPhone: true } })
    } else {
      setUserData(old => ({...old, [name]: value }))
      setUserData(old => { return { ...old, validPhone: false } })
    }
  }

  return(
          <div className="App">
        <div className='App--container'>
        <Personal
          editMode={userData.editMode}
          onChange={handleInput}
          firstName={userData.firstName}
          lastName={userData.lastName}
          phone={userData.phone}
          email={userData.email}
          onClick={handleEdit}
          onPhone={handlePhone}
        />
        <Education
          editMode={userData.editMode}
          onChange={handleInput}
          school={userData.school}
          studyTitle={userData.studyTitle}
          studyDate={userData.studyDate}
          onClick={handleEdit}
        />
        <Experience
          editMode={userData.editMode}
          onChange={handleInput}
          company={userData.company}
          position={userData.position}
          jobTasks={userData.jobTasks}
          jobStart={userData.jobStart}
          jobEnd={userData.jobEnd}
          onClick={handleEdit}
        />
        </div>
      </div>
  )

}

export default App;
