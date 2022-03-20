import React, { Component } from 'react'
import './Form.css';
export class Form extends Component {
    render() {
        return (
            <div className='form'>
                <div className='form_body'>
                    <input type="text"
                        className='input_username'
                        value={this.props.username}
                        placeholder='שם משתמש'
                        name="username"
                        onChange={(e) => this.props.onChangeHandler(e)} />
                    <input type="password"
                        className='input_password'
                        value={this.props.password}
                        placeholder='סיסמא'
                        name="password"
                        onChange={(e) => this.props.onChangeHandler(e)} />
                    <button
                        className='submit'
                        onClick={() => this.props.handleClick()}>
                        כניסה למערכת
                    </button>
                </div>
            </div>
        )
    }
}

export default Form