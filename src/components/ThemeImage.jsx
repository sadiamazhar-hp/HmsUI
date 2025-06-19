import React from "react";

export default function ThemeImage({setView, view}){
    return(
        <>
        <div className={`theme-image ${view === 'signupUser' || view === 'signupHospital' ? 'slide-left' : ''}`}>
            <img src="/hms-Logo.png"/>
            <h2 className="text-2xl font-bold">Impeccable Health Solutions</h2>
        </div>
        </>
    )
}