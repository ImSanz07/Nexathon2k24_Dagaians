import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGenerator from './components/ImageGenerator'
import { auth } from './config/firebase'
import Login from './components/Login'
import { onAuthStateChanged } from 'firebase/auth'
import Authorization from './pages/Authorization'
import Signup from './components/Signup'


function App() {
  const [authUser, setAuthUser] = useState(null);
  

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });

    return () =>{
      listen();

    }

  }, [])

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleNewUserClick = () => {
    setIsSignUpMode(true);
  };

  const handleAldUserClick = () => {
    setIsSignUpMode(false);
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
        
        {isSignUpMode ? (<Signup onNewUserClick={handleAldUserClick} />) : (!authUser && <Login onNewUserClick={handleNewUserClick} />)}

      </div>
      {authUser && <ImageGenerator onLogout={logOut} />}



    </>
  )
}

export default App
