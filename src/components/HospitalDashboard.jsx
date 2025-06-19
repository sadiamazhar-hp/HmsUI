import React from 'react';

const HospitalDashboardPage = () => {
  return (
    <div className="DashboardPage">
     <header>
        <div className='HeaderContent '>
            <img className='HeaderContent-img' src='/hms-Logo.png'/>
            <h1>Hospital Name</h1>
            <div className='Header-Search'>
                <input placeholder='search'/>
                <img src='/search-icon.png'/>
            </div>
            <button><img src="/user.png"/></button>
        </div>
     </header>
     <aside className='DashboardSideBar'>
        <div className='Module'>
            <img src="/dashboard.png"/>
            <h2>Dashboard</h2>
        </div>
        <div className='Module'>
            <img src="/patient.png"/>
            <h2>Patients</h2>
        </div>
        {/* <div className='Module'>
            <img src="/patient.png"/>
            <h2>Patients</h2>
        </div>
        <div className='Module'>
            <img src="/patient.png"/>
            <h2>Patients</h2>
        </div> */}
     </aside>
    </div>
  );
};

export default HospitalDashboardPage;
