import React from 'react';
import './Form.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            name: '',
            password: '',
            message: ''
        }
    }

    handleChanger = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => { console.log(this.state); console.log(this.props.type) })
    }

    registerHandler = (e) => {
        e.preventDefault()
        axios.post('http://server.localhost/register', this.state)
            .then(response => {
                this.setState({ message: 'zarejestrowano użytkownika' })
                console.log(response)
            }).catch(error => {
                this.setState({ message: 'blad rejestracji' })
                console.log(error)
            })
    }

    loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://server.localhost/login', this.state)
            .then(response => {
                document.cookie = `Authorization=${response.data.token}`
                console.log(response)
                this.setState({ message: 'zalogowano' })
            }).catch(error => {
                this.setState({ message: 'blad logowania' })
                console.log(error)
            })
    }

    render() {
        const { name, password } = this.state
        return (
            <>
                <h3 className="title">{this.props.location.pathname === '/login' ? "Logowanie" : "Rejestracja"}</h3>
                <form onSubmit={this.props.location.pathname === '/login' ? this.loginHandler : this.registerHandler}>
                    <input type="text" placeholder="login" name="name" value={name} onChange={this.handleChanger} />
                    <input type="password" placeholder="hasło" name="password" value={password} onChange={this.handleChanger} />
                    <div className="buttons">
                        <button type="submit">{this.props.location.pathname === '/login' ? 'zaloguj' : 'zarejestruj'}</button>
                    </div>
                </form>
                <h3 style={{ color: "red", textAlign: "center", marginTop: '12px' }}>{this.state.message}</h3>
            </>
        )
    }
}

export default withRouter(Form);