import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Chat<em>Zo</em></span>
                <span className='title'>Login</span>
                <form action="">
                    <input type="email" placeholder='E-mail'></input>
                    <input type="password" placeholder='Password'></input>
                    <button>Login</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    );
};

export default Login