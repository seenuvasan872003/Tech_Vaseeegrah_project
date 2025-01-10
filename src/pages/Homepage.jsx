import 'react'
import Hero from '../components/Hero'
import Struggling from '../components/Struggling'
import Demovideo from '../components/Demovideo'
import Choosebillzy from '../components/Choosebillzy'
import Fees from '../components/Fees'
import Contacttoday from '../components/Contacttoday'


const Homepage = () => {
  return (
    <>
        <Hero />
        <Struggling/>
        <Demovideo/>
        <Choosebillzy/>
        <Fees/>
        <Contacttoday/>
    </>
  )
}

export default Homepage