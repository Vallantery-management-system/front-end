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
