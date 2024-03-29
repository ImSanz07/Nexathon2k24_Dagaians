import { useState } from "react";
import './Signup.css'
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const Signup = ({onNewUserClick}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            <div>
                <h1>Signup Page</h1>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signUp}>
                    Sign Up
                </button>
                <button onClick={onNewUserClick}>
                    Already User?
                </button>
            </div>
        </>
    );
}

export default Signup;