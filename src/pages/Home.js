import React, {useEffect, useState} from 'react'
import Nav from '../components/header/header'
import Categories from '../components/categories/categories'
import '../styles/landing.css'
import Offer from '../components/offer/offer'
import {Footer} from '../components/footer/footer.js'
import axios from 'axios'
import { useHistory } from 'react-router'

const BACKEND_URL = 'https://vms-ayb.herokuapp.com'

export const Home = () =>  {
  var i = 27;

  const history = useHistory();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      history.push('/')
    }

    axios.get('/posts', {baseURL: BACKEND_URL, headers: {
      authentication: token,
    }}).then((response) => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div className = 'bg'>
      <Nav />
      <h1 className = {'headline'}>Available tasks</h1>
      <Categories />
      <div className = {'cover-1'}>
        <p>{i} results found</p> 
        <br></br>
        {posts.map((post) => {
          return <Offer post={post} key={post.id} />
        })}
      </div>
      <Footer />
    </div>
  )
}