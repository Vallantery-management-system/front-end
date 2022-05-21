import axios from 'axios';
import '../styles/App.css';
import React, {useEffect} from 'react';
import lines from '../images/lines.svg';
import { useHistory } from 'react-router';
import backlines from '../images/backlines.svg';
import Navbar from '../components/Navbar/Navbar.js';
import {Footer} from '../components/footer/footer.js';
import {Pricing} from '../components/pricings/pricing';
import {Signins} from '../components/signins/signins.js';
import { useTranslation } from "react-i18next";
import Description from '../components/description/description.js';
import Vacancies from '../components/recent-vacancies/vacancies.js';


const BACKEND_URL = 'https://vms-ayb.herokuapp.com'

export const Landing = () => {
  const { t } = useTranslation();

  const history = useHistory();
  const href = window.location.href;
  // let url = 'https://vsm.com/?token=axasxmnhaxvnaaxnaxnasxasngx'
  // const splitedArray = ['https://vsm.com/?', "axasxasxaxax"];
  useEffect(() => {
    if(href.includes('token')) {
      const token = href.split('token=')[1];
      axios.post('/verify', {token}, {baseURL: BACKEND_URL}).then((res) => {
        history.push('/signin')
        alert("You're all done, now you can sign in to our system." )
      })
    }  
  }, [href])

  return (
      <div className="App">
        <Navbar ></Navbar>

        <Description></Description>

        <div align = "center">
          <p className ={'we-give-volunteers'}>{t('We_give')}</p>
        </div>
        
        <div align = "left">
          <img alt= '' className = 'lines' src = {lines}></img>
        </div>
          
        <div align = "center">
          <h1 id ={"info"} className={'info'}>{t('We_created')}</h1>
        </div>
        
        <div align='right'>
          <img alt = ''  className = 'backlines' src = {backlines}></img>
          <Signins />
        </div>
        
        <div>
          <div align ='center'>
            <p className ={'we-give-volunteers'}>{t('Recent_Act')}</p>
            <h2>{t('Tasks')}</h2>
          </div>
          <Vacancies />
        </div>
        
        <div align = 'center'>
          <h1 className = {'away'}>{t('Pricing')}</h1>
          <Pricing />
        </div>
        
        <Footer />
      </div>
  );
}



