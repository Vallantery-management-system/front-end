import React from 'react';
import '../styles/App.css';
import lines from '../images/lines.png';
import backlines from '../images/backlines.png';

import Navbar from '../components/Navbar/Navbar.js';
import Description from '../components/description/description.js';
import Signins from '../components/signins/signins.js';
import Vacancies from '../components/recent-vacancies/vacancies.js'
import Pricings from '../components/pricings/pricing';
import Footer from '../components/footer/footer.js';


export const Landing = () => {
  return (
      <div className="App">
        <Navbar ></Navbar>
        <Description></Description> 
          <div align = "center"> 

            <p className ={'we-give-volunteers'}>We give volunteers a place to experience.</p>
            </div>
        <div align = "left"> 
          <img className = {'lines'} src = {lines}></img> 
        </div>
        <div align = "center">
          <h1 id ={"info"} className={'info'}>We've created a networking platform where <i>volunteers</i> and      
          <i> business</i> companies may interact directly, and both can benefit 
          from this website by choosing the best work / volunteer for them. 
          We make your job easier.</h1>
        </div>
        <div align='right'>
          <img  className = {'backlines'} src = {backlines}></img> 
          <Signins />
        </div>
        <div>
          <div align ='center'>
            <p className ={'we-give-volunteers'}>Recent Activities</p> 
            <h2>See what tasks are currently available</h2>
          </div>  
          <Vacancies />
          <Vacancies />

        </div>
        <div align = 'center'>
          <h1 className = {'away'}>Our Pricing</h1>
          
          <Pricings />
        </div>
        <Footer />
      </div>
  );
}



