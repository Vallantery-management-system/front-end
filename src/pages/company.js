import React, {useState} from 'react'
import Nav from '../components/header/header';
import Footer from '../components/footer/footer';
import '../styles/company.css';
import Gulag from '../images/gulag.jpeg'
import Shef from '../images/Slaveholder.jpeg'
import Facebook from '../components/footer/facebook-icon.png'
import Instagram from '../components/footer/instagram-icon.png'

var clickCount = 0;

const Popup = () =>{
  clickCount++;
  const [Popup, setpopup] = useState(false);
  if (clickCount%2 == 0){
    setpopup(true);
    console.log('gg');
  }
  
}

 export const Company = () => {
    return (
        <div>
            <Nav/>
            <div className = 'container-1'>
              <div className ='description'>
                <img className = 'cover-image' src = {Gulag}></img>
                <div align = 'left'>
                  <p className = 'title'>Viz struk a petq</p>
                  <p>Yerevan, Arabkir</p>
                </div>
                  <div align ='right'>
                    <p>14 Mar - 16 Mar, 9 hours, Afternoon</p>
                  </div>
                  <p className ='description-text'>
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
                  <p className = 'requirements'>
                    We’re looking for <i>xelaci, ujegh, arnakan, sirun, simpatichni, moshni tip</i>
                  </p>
                  <p className = 'requirements'>
                    Volunteering experience: <i>Required</i>
                  </p>
                  
              </div>
              <div className ='comp-contacts'>
                <div align ='center' className ='company-contacts'> 
                  <img className ='prof-pic' src ={Shef}></img>
                  <h2>Company name</h2>
                  <p>NGO</p>
                  <p className = 'description-text-2'>
                  Professional strkaterneri hamaynq himnadrvac 1942 tvakanin,
                   gorcuneutyun e varum himnakanum tarec mardkanc het
                  </p>
                  <p>Tel +37499 123456</p>
                  <p>Email: anunazganun@gm...</p>
                  <img className = 'icons' src ={Facebook}></img>
                  <img className = 'icons' src ={Instagram}></img>

                </div>
                <div align ='center' className ='apply'>
                  <h2>Interested?</h2>
                  <button onClick ={Popup()} className ='applyBtn'>Apply now</button>
                  <br></br>
                  <br></br>
                  <sup>Available till March 18</sup>
                </div>
              </div>
            </div>
            <div className = 'apply-popup'>
              <div align = 'center'>
                <h2 className ='apply-text'>Apply for the vacancy</h2>
              </div>
              <br></br>
              <p className = 'why-me'>Why choose you?</p>
              <div align = 'center'>
                <input className ='textarea' placeholder ='im gay' type="text"></input> <br></br><br></br>
                <button className ='applyBtn'> submit</button>
              </div>
              
            </div>

            <Footer/>
            
        </div>
    )
}

