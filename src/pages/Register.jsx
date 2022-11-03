import React from 'react'
import Add from '../img/img.png'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className="logo">Chat<em>Zo</em></span>
                <span className='title'>Register</span>
                <form action="">
                    <input type="text" placeholder='Name'></input>
                    <input type="text" placeholder='Number'></input>
                    <input type="email" placeholder='E-mail'></input>
                    <input type="password" placeholder='Password'></input>
                    <input style={{display:"none"}} type="file"></input>
                    <label htmlFor='file'>
                        <img src={Add}></img>
                        <span>Add an avatar</span>
                    </label>
                    <button>Register</button>
                </form>
                <p>Already an existing user? Login</p>
            </div>
        </div>
    );
};

export default Register