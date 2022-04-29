import React from 'react'
import './offer.css'
import {Link} from 'react-router-dom';

function Offer() {
    return (
        <div className = {'offer'}>
            <div>
                <div className = {'squares'}></div>
            </div>
            <div>
                <div className = {'text-part'}>
                    <div className = {'top-part'}>
                        <p className = 'title-part'>Vacancy title</p>
                        <div className = 'dates-location'>
                            <h5>Yerevan, Arabkir</h5>
                            <h5>14 Mar - 16 Mar, 9 hours, Afternoon</h5>
                        </div>
                    </div>
                    <div align = 'left'>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Massa duis pellentesque viverra at quis metus. In nibh 
                        urna mus purus quis vehicula duis cursus ac. Sit imperdiet 
                        fames tortor integer cursus arcu aliquam dictum purus. 
                        Est est neque enim ultricies sed.
                        </h3>
                        <h3>volunteering experience <i className ={'blu'}>required</i></h3>
                        <h2><a className = 'links' href = {'/company'}>Learn more→</a></h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Offer
