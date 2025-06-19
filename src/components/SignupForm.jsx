import React from "react";
import axios from "axios";


export default function SignupForm({ setView, view }) {

  return (
    <div className="half">
      <div id="flipContainer" className={`flip-container ${view === 'signupHospital' ? 'flip' : ''}`}>
          <div className="signup-user">
            <div className="form-box">
              <h3>SIGNUP USER</h3>
              <input placeholder="Email" /><br /><br />
              <input placeholder="Password" type="password" /><br /><br />
              <input placeholder="Hospital" type="text" /><br /><br />
              <input placeholder="Role" type="text" /><br /><br />
              <button className="submit">Register</button>
            </div>
          </div>
          <div className="signup-hospital">
            <div className="form-box">
              <h3>SIGNUP HOSPITAL</h3>
              <input id="Name-Admin" placeholder="Name" type="text"/><br /><br />
              <input id="HosEmail" placeholder="Email" type="email"/><br /><br />
              <input id="HosPass" placeholder="Password" type="Password" /><br /><br />
              <input id="HosName-Hos" placeholder="Hospital Name" type="text"/><br /><br />
              <button onClick={()=>{
                var url = "https://localhost:44354/signup/hospital"
                var payload = {
                  Name : document.getElementById("Name-Admin").value,
                  Email : document.getElementById("HosEmail").value,
                  Password: document.getElementById("HosPass").value,
                  HospitalName:document.getElementById("HosName-Hos").value
                }
                console.log(payload);
                    axios
                      .post(url, payload)
                      .then((response) => console.log(response))
                      .catch((error) => console.error(error));
              }} className="submit">Register</button>
            </div>
          </div>
        </div>
      </div>
  )
}