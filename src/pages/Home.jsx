import React from 'react'
import Feautered from '../components/Feautered'
import New from '../components/New'
import Newtxt from '../components/Newtxt'
import Panner from '../components/Panner'
import Reservice from '../components/Reservice'
import Services from '../components/Services'
import Small from '../components/Small'


const Home = (props) => {
  return (
    <div>
      <Panner />
      <Services />
      <Feautered features={props.features} addCart={props.addCart} updateCartItem={props.updateCartItem} decCartItem={props.decCartItem} delItem={props.delItem} delAll={props.delAll} />
      <Reservice />
      <New news={props.news} addCart={props.addCart} updateCartItem={props.updateCartItem} decCartItem={props.decCartItem} delItem={props.delItem} delAll={props.delAll} />
      <Small />
      <Newtxt />
    </div>
  )
}

export default Home