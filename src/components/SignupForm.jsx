import React from "react";
import axios from "axios";


export default function SignupForm({ setView, view }) {

  return (
    <div className="half">
      <div id="flipContainer" className={`flip-container ${view === 'signupHospital' ? 'flip' : ''}`}>
          <div className="signup-user">
            <div className="form-box">
              <h3>SIGNUP USER</h3>
              <input id="Name-User" placeholder="Name" type="text"/><br /><br />
              <input placeholder="Email" id="UserEmail" type="text"/><br /><br />
              <input placeholder="Password" id="UserPass" type="password" /><br /><br />
              <input placeholder="Hospital" type="text" id="UserHos" /><br /><br />
              <input placeholder="Role" type="text" id="UserRole" /><br /><br />
              <button className="submit" onClick={()=>{
                var url = "https://localhost:44354/signup/signup/userRequest"
                var payload = {
                  Name : document.getElementById("Name-User").value,
                  Email : document.getElementById("UserEmail").value,
                  Password : document.getElementById("UserPass").value,
                  RequestedRoleId : document.getElementById("UserHos").value,
                  TargetHospitalId : document.getElementById("UserRole").value
                }
                console.log(payload);
                axios
                  .post(url,payload)
                  .then((response)=>console.log(response))
                  .catch((error)=>console.error(error));
              }}>Register</button>
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