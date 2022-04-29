import React from 'react'
import {useState} from 'react';
import './vacancies.css'


function Vacancies() {

const [calendar, setCalendar] = useState(false);
var monthList = ['January', 'February', 'March', 'April', 'May', 'June', "july", 'August', 'September', 'October', 'November', 'December'];
var daysInMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
var weekdayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',];
var clicks = 0;
var today = new Date;
//gives which month in number is now    ex. March
var monthNumber = today.getMonth();
//day of the month is now    ex. 16
var thisDay = today.getDate();
//weekday               ex. Monday
var thisDayOfWeek = today.getDay();
var RealMonth = monthList[monthNumber];
var dayLimit = daysInMonth[monthNumber];
var DayOfWeek = weekdayList[thisDayOfWeek];

//generating the calendar in js
var Line1 = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ];
var Line2 = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ];
var Line3 = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ];
var Line4 = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ];
var Line5 = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ];

//need to find empty fields and replace those with spaces

//to be sure that only 7 days are marked on each linee
for (var i = 1; i<=dayLimit; i++){   
    if (i<7){
        Line1[i] = '0'+ i + '\xa0\xa0\xa0\xa0'; 
        
    }
    else if (i<14){
        if (i<10){
            Line2[i] = '0' + i+ '\xa0\xa0\xa0\xa0';                 
        }
        else{
            Line2[i] = i+ '\xa0\xa0\xa0\xa0';    
        }
    }
    else if (i<21){
        Line3[i] = i+ '\xa0\xa0\xa0\xa0';
    }
    else if (i<28){
        Line4[i] = i+ '\xa0\xa0\xa0\xa0';
    }
    else if (i<=dayLimit){
        Line5[i] = i+ '\xa0\xa0\xa0\xa0';
    }
}


// what we have to do
// if scrolled it dissapears

const cal = () =>{
    clicks+=1;
    if(clicks%2 === 0){
        setCalendar(true);
    }
    else{
        setCalendar(false);
    }
}

    return (
        <div>
            <div className ={'scroll'}>
                <div>

                    <div align = 'center' id ='calendar' className = {calendar ? 'CalendarActive': "ClosedCalendar"}>
                        {RealMonth}
                        <ul className ={'weekdays'}> 
                            <li>Mo</li> <li>Tu</li> <li>We</li> <li>Th</li> <li>Fr</li> <li>Sa</li> <li>Su</li>
                        </ul>

                        <ul align ='right' className = {'bullet'}>
                            <li className = {'days longer'}>{Line1}</li>
                            <br></br>
                            <li className = {'days'}>{Line2}</li>
                            <br></br>
                            <li className = {'days'}>{Line3}</li>
                            <br></br>
                            <li className = {'days'}>{Line4}</li>
                            <br></br>
                            <li className = {'days'} align = 'left' >{Line5}</li>
                        </ul>
                    </div>
                </div>
                <div align ='left'>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div align ='left' className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a className = 'mylink' href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                    <li className={"list-item"}>                    
                        <div className ={'top-line'}>                       
                            <h6>Yerevan, Arabkir</h6>
                            <h6 className ={'date-margin'} onClick = {cal} >14 Mar - 16 Mar</h6>
                        </div>  
                            <p className ={'headline'}>Banvor apeh struk karochi</p>
                        <div className = {'description'}>Lorem ipsum dolor sit amet, consectetur adipiscing  <br></br>
                                elit. Morbi malesuada malesuada tortor a turpis  <br></br>
                                aliquam ut. Mauris mollis donec vivamus sem
                        </div> 
                        <br></br>
                        <a href = 'www.youtube.com'> Learn more →</a>
                    </li>
                </div>
                
            </div>
        </div>
    )
}

export default Vacancies
