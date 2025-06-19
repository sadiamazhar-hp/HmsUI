import React, { useState } from "react";
import ThemeImage from "./ThemeImage";
import AuthSwitcher from "./AuthSwitcher";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

export default function AuthLayout(){
    const [view, setView] = useState("login");
    return(
        <div className="AuthLayout">
          <AuthSwitcher setView={setView} view={view}/>
          <ThemeImage view={view} setView={setView} />
            <div class="content">
              <SignupForm setView={setView} view={view} />
              <LoginForm/>
            </div>

        </div>
    );

}