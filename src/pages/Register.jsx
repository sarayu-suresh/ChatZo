import React from 'react'
import Add from '../img/img.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {

    const [err,setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const phoneNumber = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
        const file = e.target[4].files[0];

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            
            const storageRef = ref(storage, displayName);

            await uploadBytesResumable(storageRef, file).then( 
            () => {
                getDownloadURL(storageRef).then( async(downloadURL) => {
                    await updateProfile(res.user, {
                        displayName,
                        photoURL: downloadURL,
                    });
                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        phoneNumber,
                        email,
                        photoURL: downloadURL,
                    });

                    await setDoc(doc(db, "userChats", res.user.uid), {});
                    navigate("/");
                });
            }
            );
        }catch(err){
            setErr(true);
            console.log(err);
        }
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
            <span className="logo">Chat<em>Zo</em></span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name'></input>
                    <input type="text" placeholder='Number'></input>
                    <input type="email" placeholder='E-mail'></input>
                    <input type="password" placeholder='Password'></input>
                    <input required style={{ display:"none" }} type="file" id="file"></input>
                    <label htmlFor='file'>
                        <img src={Add}></img>
                        <span>Add an avatar</span>
                    </label>
                    <button>Register</button>
                    {err && <span>Oops, something went wrong!</span>}
                </form>
                <p>Already an existing user? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register