import React from "react";

class General extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }
    }

    handleInput = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
        console.log(this.state)
    }


    render() {
        return (
            <div className="general--container">
                <form className="general--form">
                    <input className="general--input" onChange={this.handleInput} value={this.state.firstName} name="firstName" placeholder="First Name" type='text'></input>
                    <input className="general--input" onChange={this.handleInput} value={this.state.lastName} name="lastName" placeholder="Last Name" type='text'></input>
                    <input className="general--input" onChange={this.handleInput} value={this.state.email} name="email" placeholder="email@address.com" type='email'></input>
                    <input className="general--input" onChange={this.handleInput} value={this.state.phone} name="phone" placeholder="Phone Number" type='number'></input>
                    <button className="general--button">Submit</button>
                </form>
            </div>
        )
    }
}

export default General;