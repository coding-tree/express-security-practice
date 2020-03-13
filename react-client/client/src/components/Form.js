import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="login" />
                <input type="text" placeholder="hasło" />
                <div className="buttons">
                    <button>Zaloguj</button>
                    <button>Zarejestruj</button>
                </div>
            </form>
        )
    }
}
export default Form;