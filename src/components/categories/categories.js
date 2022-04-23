import React from 'react'
import {useState} from 'react';
import './categories.css'
import filter from './filter.png';
function categories() {

    var clickCount = 0;
    const filters = () =>{
        clickCount+=1;
        console.log(clickCount);
    }

    return (
        <div>
            <div align = 'center' className = {'top'}>
                <input placeholder = 'search' className ={'searchbar'} type = 'search'></input>
                <button className = {'searchbtn'}>Search</button>
                <button className = {'Applybtn'}>filter results ▾</button>
            </div>
            <div align ='center' className = {'filter-wrapper'}>
                <ul className={'categories'}>
                    <li className ={'type'}>
                        <p>volunteering experience</p>
                        <label>
                            1 year
                            <input type="checkbox" />                            
                            <br></br>
                            2 year
                            <input type="checkbox" />                  
                            <br></br>
                            not required
                            <input type="checkbox" />
                        </label>
                    </li>
                    <li className ={'type'}>
                        <p>starting date</p>
                        <label>
                            Today
                            <input type="checkbox" />                            
                            <br></br>
                            This week
                            <input type="checkbox" />                  
                            <br></br>
                            Next week
                            <input type="checkbox" />
                        </label>
                    </li>
                    <li className ={'type'}>
                        <p>ending date</p>
                        <label>
                            This week
                            <input type="checkbox" />                            
                            <br></br>
                            Next week
                            <input type="checkbox" />                  
                            <br></br>
                            Later
                            <input type="checkbox" />
                        </label>
                    </li>
                    <li className ={'type'}>
                        <p>working hours</p>
                            Morning
                            <input type="checkbox" />                            
                            <br></br>
                            Afternoon
                            <input type="checkbox" />                  
                            <br></br>
                            Evening
                            <input type="checkbox" />
                            <br></br>
                            Night
                            <input type="checkbox" />
                    </li>
                    <li className ={'type'}>
                        <p>location</p>
                        <select className={'five'} id="location" name="location" placeholder = 'location'>
                            <option value="volvo">Arabkir</option>
                            <option value="saab">Ajapnyak</option>
                            <option value="fiat">Avan</option>
                            <option value="audi">Davtashen</option>
                            <option value="audi">Erebuni</option>
                            <option value="audi">Kentron</option>
                            <option value="audi">Malatia-Sebastia</option>
                            <option value="audi">Nor Nork</option>
                            <option value="audi">Shengavit</option>
                            <option value="audi">Kanaker-Zeitun</option>
                            <option value="audi">Online</option>
                        </select>
                    </li>
                </ul>
                <ul>
                    <li className ={'type'}>
                        <p>Work duration</p>
                        1-5 hours
                        <input type="checkbox" />  
                        <br></br>
                        5-10 hours
                        <input type="checkbox" />
                        <br></br>
                        10+ hours
                        <input type="checkbox" />
                        <br></br>
                    </li>
                    <li className ={'type'}>
                        <p>Age registration</p>
                        younger than 16
                        <input type="checkbox" />  
                        <br></br>
                        16-18
                        <input type="checkbox" />
                        <br></br>
                        18+
                        <input type="checkbox" />
                        <br></br>
                    </li>
                </ul>          
            </div>
        </div>
    )
}

export default categories
