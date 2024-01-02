import React from 'react'
import Feautered from '../components/Feautered'
import New from '../components/New'
import Newtxt from '../components/Newtxt'
import Panner from '../components/Panner'
import Reservice from '../components/Reservice'
import Services from '../components/Services'
import Small from '../components/Small'


const Home = () => {
  return (
    <div>
      <Panner />
      <Services />
      <Feautered  />
      <Reservice />
      <New  />
      <Small />
      <Newtxt />
    </div>
  )
}

export default Home