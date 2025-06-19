import React from "react";
import ThemeImage from "./ThemeImage";

export default function AuthSwitcher({setView, view}) { //state: Login, SignupUser, SignupHos
     console.log(typeof setView); 
 return(
    <>
   <div className="top-buttons">
  <div>
    <button 
      onClick={() => setView('login')} 
      className={view === 'login' ? 'active' : ''}>
      Login
    </button>
  </div>
  <div>
    <button 
      onClick={() => setView('signupUser')} 
      className={view === 'signupUser' ? 'active' : ''}>
      Signup User
    </button>
    <button 
      onClick={() => setView('signupHospital')} 
      className={view === 'signupHospital' ? 'active' : ''}>
      Signup Hospital
    </button>
  </div>
</div>

    </>
 )
}
