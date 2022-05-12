import React from 'react'
import './offer.css'
import {Link} from 'react-router-dom';

function Offer(props) {
    const post = props.post;
    return (
        <div className = {'offer'}>
            <div>
                <div className = {'squares'}></div>
            </div>
            <div>
                <div className = {'text-part'}>
                    <div className = {'top-part'}>
                        <p className = 'title-part'>{post.title}</p>
                        <div className = 'dates-location'>
                            <h5>{post.location}</h5>
                            <h5>{post.date}</h5>
                        </div>
                    </div>
                    <div align = 'left'>
                        <h3>{post.description}
                        </h3>
                        <h3>volunteering experience <i className ={'blu'}>required</i></h3>
                        <h2><Link className = 'links' to = {'/company'}>Learn more→</Link></h2>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Offer
