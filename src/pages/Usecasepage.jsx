import 'react'
import Manimg from '../assets/Homepage/manimg.png'
import videoimg from '../assets/Homepage/video_thumbnail.png'

const Usecasepage = () => {
  return (
    <>
        <h1 className='text-center font-serif text-4xl sm:text-5xl  lg:text-6xl font-semibold mt-5 mx-3 mb-9 pt-20'>
            <span className='inline min-[1026px]:block mr-3'>Supporting a Wide</span> 
            <span className='inline min-[1026px]:block mr-1'>Range of Industries</span>
        </h1>
        <p className='mb-9 mx-3 text-center'>
            <span className='block text-lg'>Easily set up one-time, direct debit and recurring payments for your</span>
            <span className='block text-lg'>customers and clients.</span>
        </p>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20 mb-3'>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0 order-2 md:order-1'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>We are upfront with</span>
                    <span>our fees.</span>  
                </h1>
                <p className='mb-9 mx-3 text-left'>We believe in transparency. With Billzy, you’ll always know exactly what you’re paying for, with no hidden costs or surprises. Our straightforward pricing ensures you can manage your finances with confidence and ease.</p>
                <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded">Contact Us Today!</button>
            </div>
            <div className='relative sm:p-5 md:p-10 lg:p-20 order-1 md:order-2'>
                <img src={Manimg} alt="demovideo" />
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20'>
            <div className='relative sm:p-5 md:p-10 lg:p-20 '>
                <img src={videoimg} alt="demovideo" />
                            
            </div>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>Billzy simplifies the</span>
                    <span>process of setting up</span>
                    <span>direct debits.</span>  
                </h1>
                <p className='mb-9 mx-3 text-left'>We also give you the ability to setup recurring payments for your customers, allowing you to focus on growing your business.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20 mb-3'>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0 order-2 md:order-1'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>We are upfront with</span>
                    <span>our fees.</span>  
                </h1>
                <p className='mb-9 mx-3 text-left'>We believe in transparency. With Billzy, you’ll always know exactly what you’re paying for, with no hidden costs or surprises. Our straightforward pricing ensures you can manage your finances with confidence and ease.</p>
            </div>
            <div className='relative sm:p-5 md:p-10 lg:p-20 order-1 md:order-2'>
                <img src={Manimg} alt="demovideo" />
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20'>
            <div className='relative sm:p-5 md:p-10 lg:p-20 '>
                <img src={videoimg} alt="demovideo" />
                            
            </div>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>Billzy simplifies the</span>
                    <span>process of setting up</span>
                    <span>direct debits.</span>  
                </h1>
                <p className='mb-9 mx-3 text-left'>We also give you the ability to setup recurring payments for your customers, allowing you to focus on growing your business.</p>
                <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded">Contact Us Today!</button>

            </div>
        </div>
    </>
  )
}

export default Usecasepage