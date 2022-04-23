<<<<<<< HEAD
import React from 'react'
import Nav from './components/header/header'
import Categories from './components/categories/categories'
import '../styles/landing.css'
import Offer from './components/offer/offer'
import Footer from './components/footer/footer.js'

export const Home = () =>  {
  var i = 27;

  return (
    <div>
      <Nav />
      <h1 className = {'headline'}>Available tasks</h1>
      <Categories />
      <div className = {'cover-1'}>
        <p>{i} results found</p> 
        <br></br>
        <Offer></Offer>
        <Offer></Offer>
        <Offer></Offer>
        <Offer></Offer>
      </div>
      <Footer />
    </div>
  )
}
=======
import React from "react";
import { Link } from "react-router-dom";
import {Header} from '../components/Header'

export const Home = () => {
    return (
        <div>
            <Header />
            <Link to = '/login'>Log in here</Link>
            <p></p>
            <Link to = '/privacy'>Privacy Policy</Link>
        </div>
    )
}
>>>>>>> 859622600dfc5c45b5ebc4fb039812ae1bd85c96
