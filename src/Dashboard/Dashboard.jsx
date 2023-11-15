import React from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
// import logo_nav from '../img/logo/logo_thavari.png'

const Dashboard = () => {


  return (
    <>
      <div id="root">
        <div className='dashboard'>

          <Topbar />
          <Sidebar />

          <div className='main-content' id='mainbody'>
            <h1> main container</h1>
            <h1> main container</h1>

          </div>



        </div>

        {/* <Footer/> */}

      </div>
    </>
  )
}

export default Dashboard
