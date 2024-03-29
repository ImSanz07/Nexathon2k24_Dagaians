import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Signup from '../components/Signup'

export const Login = ({ onNewUserClick }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);

        } catch (err) {
            console.error(err)
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);

        } catch (err) {
            console.error(err)

        }

    };

    return (
        <>
            <div>
                <h1>Login Page</h1>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signIn}>
                    Sign In
                </button>
                <button onClick={logOut}>
                    Logout
                </button>

                <button onClick={onNewUserClick}>New User ?</button>

            </div>
        </>
    );
}

export default Login;