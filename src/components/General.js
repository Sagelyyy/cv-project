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

    handleInput(event){
        const {name, value} = event.target
        this.setState({[name]: value})
        console.log(this.state)
    }


    render() {
        return (
            <div className="general--container">
                <form>
                    <input onChange={this.handleInput} name="firstName" placeholder="First Name" type='text'></input>
                    <input onChange={this.handleInput} name="lastName" placeholder="Last Name" type='text'></input>
                    <input onChange={this.handleInput} name="email" placeholder="email@address.com" type='email'></input>
                    <input onChange={this.handleInput} name="phone" placeholder="Phone Number" type='number'></input>
                </form>
            </div>
        )
    }
}

export default General;