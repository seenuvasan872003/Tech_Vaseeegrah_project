import 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom'

const Hero = () => {

    const [text] = useTypewriter({
        words: ['Retail.', 'E-Commerce.', 'Fitness.', 'Hospitality.','Not For profit.','SaaS Startups.'],
        loop: true,
        typeSpeed:90,
        deleteSpeed: 20,
        delaySpeed: 2000
      })


  return (
    <>
        <div className='max-w-3xl mx-auto mt-10 md:mt-14 lg:mt-28 py-5 '>
            <h1 className='text-center font-serif text-4xl sm:text-5xl  lg:text-6xl font-semibold mt-5 mx-3 mb-9'>
                <span className='block min-[430px]:inline mr-3'>Your payments</span> 
                <span className='tracking-widest'>
                    <span className='block min-[430px]:inline mr-1'>should be made</span>
                    <span className='block min-[430px]:inline  scroll-underline'>Simple.</span>
                </span> 
                </h1>
            <p className='mb-9 mx-3 text-center'>
                <span className='block text-lg'>Easily set up one-time, direct debit and recurring payments for your</span>
                <span className='block text-lg'>customers and clients.</span>
            </p>
            <div className='flex justify-center'>
                <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded"><NavLink to="/pricing">Get Started Today</NavLink></button>
            </div>

        </div>
        <div className='text-center mt-10 sm:mt-14 md:mt-20 lg:mt-36 mx-3 mb-20 md:mb-40 lg:mb-60'>
            <h1 className='text-2xl font-serif font-semibold'>
                Serving Small to Medium Business Owners in {' '}
                <span className='min-[440px]:inline'>{text}</span>
                <Cursor cursorColor='black' />
            </h1>
        </div>
    </>
  )
}

export default Hero