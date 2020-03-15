import React from 'react';
import './Form.css';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            form: "login"
        }
    }
    handleChanger = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state) })
    }

    registerHandler = (e) => {
        e.preventDefault()
        axios.post('http://server.localhost/register', this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
    loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://server.localhost/login', this.state)
            .then(response => {
                document.cookie = `Authorization=${response.data.token}`
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const { name, password } = this.state
        return (
            <form onSubmit={this.state.form === 'login' ? this.loginHandler : this.registerHandler}>
                <div className="labels">
                    <label>
                        <input type="radio" name="form" defaultChecked onChange={this.handleChanger} value="login" />
                        Zaloguj
                    </label>
                    <label>
                        <input type="radio" name="form" onChange={this.handleChanger} value="register" />
                        Zarejestruj
                    </label>
                </div>
                <input type="text" placeholder="login" name="name" value={name} onChange={this.handleChanger} />
                <input type="password" placeholder="hasło" name="password" value={password} onChange={this.handleChanger} />
                <div className="buttons">
                    <button type="submit">zaloguj</button>
                </div>
            </form>
        )
    }
}
export default Form;