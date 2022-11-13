import React, { Component } from 'react'
import logo from './assets/GatewayLogoIdea.jpg'
import './Login.css'

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        if (!e.target.email.value) {
            alert('Email is required');
        } else if (!e.target.email.value) {
            alert('Valid email is required');
        } else if (!e.target.password.value) {
            alert('Password is required');
        } else if (
            e.target.email.value === 'me@example.com' &&
            e.target.password.value === '123456'
        ) {
            alert('Successfully logged in');
            e.target.email.value = '';
            e.target.password.value = '';
        } else {
            alert('Wrong email or password combination');
        }
    };

    render() {
        return (
            <div className='Login'>
                <img src={logo} className='logo' alt='Gateway' />
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' id='password' />
                    </div>
                    <button className='primary'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
