import React, {useEffect, useState} from 'react';
import "./profile.css";
import image from './profiiepic.png';
import axios from 'axios';

const BACKEND_URL = 'https://vms-ayb.herokuapp.com'

const profilePageRequest = async () => {
  try {
    const response = await axios.post(`${BACKEND_URL}/profile`)
    return response.data;
  } catch (e) {
    throw e;
  }
}

function Profile() {
  const [userState, setUserState] = useState({})
  useEffect(() => {
    profilePageRequest().then((data) => setUserState(data))
  }, [])

  const userImage = userState.avatar ?? image;

  return (
    <div>
      <div className={'profile-wrapper'}>
        <div className={'profile-part-1'}>
          <img className='profile-pic' src={userImage}></img>
          <div className='description-part'>
            <div>
              <p className='name-text'>{userState.name} {userState.surname}</p>
              <p className='name-text'>{userState.username}</p>
              <p className='name-text'>{userState.email}</p>
              <p className='name-text'>{userState.tel}</p>

              <h4>{userState.gender}</h4>
            </div>
            <div>
              <h2>{userState.city}</h2>
              <h2>{userState.hobby}</h2>
              <h2>{userState.skills}</h2>
              <h2>{userState.why}</h2>
              <h2>{userState.profit}</h2>
            </div>
            <button className={'button-blue'}>Approve</button>
            <button className={'button'}>Decline</button>
          </div>

        </div>
        <div align='center' className={'profile-part-2'}>
          <p className='name-text'>Contacts</p>
          <h2>Tel: +37499 123456</h2>
          <h2>E-mail: anunazganun@...</h2>
          <button className='sm-button one'>Telegram</button>
          <br></br>
          <button className='sm-button'>Messenger</button>
        </div>
      </div>
    </div>
  )
}

export default Profile