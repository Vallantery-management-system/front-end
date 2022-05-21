import React, {useState} from 'react'
import Nav from '../components/header/header';
import {Footer} from '../components/footer/footer';
import '../styles/company.css';
import Gulag from '../images/gulag.jpeg'
import Shef from '../images/Slaveholder.jpeg'
import Facebook from '../components/footer/facebook-icon.png'
import Instagram from '../components/footer/instagram-icon.png'

var clicks = 0;

export const Company = () => {
  const [isOpen, setIsOpen] = useState(false);

  const printSomething = () =>{
    clicks++;
    if(clicks%2 === 0){
      setIsOpen(true);
    }
    else{
      setIsOpen(false);

    }
  }

    return (
        <div className = {isOpen? 'darker' :''}>
            <Nav/>
            <div className = 'container-1'>
              <div className ='description'>
                <img alt ='' className = 'cover-image' src = {Gulag}></img>
                <div align = 'left'>
                  <p className = {isOpen?'title-dark':'title'}>Viz struk a petq</p>
                  <p>Yerevan, Arabkir</p>
                </div>
                  <div align ='right'>
                    <p>14 Mar - 16 Mar, 9 hours, Afternoon</p>
                  </div>
                  <p className ={isOpen? 'description-text dark':'description-text'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Vulputate diam, morbi sagittis viverra fusce pellentesque
                   euismod egestas. Lectus ullamcorper elementum scelerisque
                    commodo, tincidunt magna donec felis eget. Commodo viverra
                     eu vulputate lacinia quam molestie. Ipsum diam enim ut 
                     accumsan.<br></br><br></br>
                     Dui rhoncus duis pellentesque magna est non. 
                     Pellentesque risus nunc, consequat leo vitae ut tortor quam.
                      Lorem diam sed pulvinar sed vulputate massa. Quis leo amet,
                       eu risus consequat. Nunc, non consequat quam tempus eros 
                       aliquet lectus. Hendrerit leo tincidunt tortor ornare augue 
                       in non elit. Augue molestie faucibus ac posuere. Eget mi sit 
                       vestibulum scelerisque massa. Risus sem pulvinar duis lacus.
                  </p>
                  <div align = 'left'>
                  <p className = {isOpen?'requirements dark':'requirements'}>
                    We’re looking for <i>xelaci, ujegh, arnakan, sirun, simpatichni, moshni tip</i>
                  </p>
                  <p className = {isOpen?'requirements dark':'requirements'}>
                    Volunteering experience: <i>Required</i>
                  </p>
                  </div>
                  
              </div>
              <div className ='comp-contacts'>
                <div align ='center' className ={isOpen?'company-contacts-faded':'company-contacts'}> 
                  <img alt = '' className ='prof-pic' src ={Shef}></img>
                  <h2>Company name</h2>
                  <p>NGO</p>
                  <p className = {isOpen?'description-text-2 dark' :'description-text-2'}>
                  Professional strkaterneri hamaynq himnadrvac 1942 tvakanin,
                   gorcuneutyun e varum himnakanum tarec mardkanc het
                  </p>
                  <p>Tel +37499 123456</p>
                  <p>Email: anunazganun@gm...</p>
                  <img alt ='' className = 'icons' src ={Facebook}></img>
                  <img alt ='' className = 'icons' src ={Instagram}></img>

                </div>
                <div align ='center' className ={isOpen?'apply faded':'apply'}>
                  <h2>Interested?</h2>
                  <button onClick ={printSomething} className ='applyBtn'>Apply now</button>
                  <br></br>
                  <br></br>
                  <sup>Available till March 18</sup>
                </div>
              </div>
            </div>
            <Footer/>
            <div className = {isOpen?'apply-popup':'no-visible'} >
              <div align = 'center'>
                <h2 className ='apply-text'>Apply for the vacancy</h2>
              </div>
              <br></br>
              
              <div align = 'center'>
                <p className = 'why-me'>Why choose you?</p>
                <textarea className ='textarea' placeholder ='im gay' type="text"></textarea> <br></br><br></br>
                <button type ='submit' className ='applyBtn'> submit</button>
              </div>
              
            </div>

            
        </div>
    )
}

