import 'react'
import { FaRegFaceFlushed } from "react-icons/fa6";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { FaRegFaceDizzy } from "react-icons/fa6";

const Struggling = () => {
return (
        <>
                <div className='text-center mt-10 md:mt-28 lg:mt-36 py-5 '>
                        <h1 className='text-center font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                                <span className='inline min-[430px]:block'>Struggling with manual</span>
                                <span className='inline min-[430px]:block'>payment processes &</span>
                                <span className='inline min-[430px]:block'>late payments?</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 lg:mt-40 md-10 md:mb-20 lg:mb-40 gap-12 mx-10 md:mx-20 lg:mx-40 ">
                                <div className='w-auto text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] border-2 border-black rounded-xl  py-12'>
                                        <div className='w-auto flex justify-center '>
                                                <FaRegFaceFlushed className='text-5xl pb-2' />
                                        </div>
                                        <p className='mx-5'>Regularly sending out invoices to the same customers ?</p>
                                </div>
                                <div className='text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] border-2 border-black rounded-xl py-12'>
                                        <div className='flex justify-center'>
                                                <FaRegFaceRollingEyes className='text-5xl pb-2' />
                                        </div>
                                        <p className='mx-5'>You&apos;re the one chasing clients for payment?</p>
                                </div>
                                <div className='text-center font-bold  shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] border-2 border-black rounded-xl py-12'>
                                        <div className='flex justify-center'>
                                                <FaRegFaceDizzy className='text-5xl pb-2' />
                                        </div>
                                        <p className='mx-5'>Customers have asked if there is an easier way to pay?</p>
                                </div>
                        </div>
                </div>
        </>
)
}

export default Struggling