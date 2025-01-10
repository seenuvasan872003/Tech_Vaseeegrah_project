import 'react'
import Manimg from "../assets/Homepage/manimg.png";

const Fees = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20 mb-10'>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0 order-2 md:order-1'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>We are upfront with</span>
                    <span>our fees.</span>  
                </h1>
                <p className='mb-9 mx-3 text-left'>We believe in transparency. With Billzy, you’ll always know exactly what you’re paying for, with no hidden costs or surprises. Our straightforward pricing ensures you can manage your finances with confidence and ease.</p>
                <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded">View Pricing Schedule</button>
            </div>
            <div className='relative sm:p-5 md:p-10 lg:p-20 order-1 md:order-2'>
                <img src={Manimg} alt="demovideo" />
            </div>
        </div>
    </>
  )
}

export default Fees