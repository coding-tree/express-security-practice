import React from 'react';
import './Form.css';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: ''
        }
    }
    handleChanger = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    registerHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://server.localhost/register', this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        const { name, password } = this.state
        return (
            <form onSubmit={this.registerHandler}>
                <input type="text" placeholder="login" name="name" value={name} onChange={this.handleChanger} />
                <input type="password" placeholder="hasło" name="password" value={password} onChange={this.handleChanger} />
                <div className="buttons">
                    <button type="submit">Zarejestruj</button>
                </div>
            </form>
        )
    }
}
export default Form;