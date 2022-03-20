import React, { Component } from 'react'
import Form from './Components/Form'
import './Login.css';
export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '', errorMessage: '' };
        this.handleClick = this.handleClick.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    handleClick() {
        if (this.state.password && this.state.username) {
            const user = {
                username: this.state.username,
                password: parseInt(this.state.password),
            }
            console.log(user);
            this.setState({ username: '', password: '' });
        } else {
            let error = 'נא להזין את השדות הבאים';
            this.setState({ errorMessage: error });
        }

    }
    onChangeHandler(e) {
        let error = '';
        const value = e.target.value;
        this.setState({ ...this.state, [e.target.name]: value, errorMessage: error });
    }
    render() {
        return (
            <div className='container'>
                <Form
                    handleClick={this.handleClick}
                    onChangeHandler={this.onChangeHandler}
                    username={this.state.username}
                    password={this.state.password} />
                {this.state.errorMessage &&
                    <div className='error_form'>
                        {this.state.errorMessage}
                    </div>}

            </div>
        )
    }
}

export default Login