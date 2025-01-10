import 'react'
import { HiCheckCircle } from "react-icons/hi";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

const Choosebillzy = () => {
return (
    <>
        <div className="text-center bg-[#72da83] px-4 md:px-10 lg:px-20 py-28 mb-10">
            <div>
                <h1 className="text-3xl font-bold mb-4">Why choose Billzy today?</h1>
                <p className="text-lg mb-8">Discover the benefits that set Billzy apart with unmatched pricing, secure transactions and dedicated support.</p>
            </div>
            <div className="flex flex-wrap justify-around px-3 md:px-10 lg:px-16">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className=" bg-white w-auto text-left shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] border-2 border-black rounded-xl px-4 py-4">
                        <div className='bg-[#72da83] p-5 w-fit border-2 border-black chooseicon mb-3'>
                            <BsCalendar2CheckFill size={50} className='text-white ' />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 mb-3 ">Automated Direct Debits</h2>
                        <p className="mt-2 mb-4 ">Focus on Growth while we handle the Payment automation.</p>
                        <ul>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Transparent pricing</li>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Plans to suit all sized businesses</li>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Save more with more Volume</li>
                        </ul>
                        <div className='border bottom-1 bg-black text-white hover:text-black hover:bg-[#1c58b9] w-fit px-10 py-5 rounded-lg mt-5'>Learn More</div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-white w-auto text-left  shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] border-2 border-black rounded-xl px-4 py-4">
                        <div className='bg-[#72da83] p-5 w-fit border-2 border-black chooseicon mb-3'>
                            <BsSend size={50} className='text-white' />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 mb-3">Streamline Your Payments</h2>
                        <p className="mt-2 mb-4">Prioritise what matters most and let us simplify your operations</p>
                        <ul>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Global security standards</li>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Protects cardholder information</li>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Regular security updates</li>
                        </ul>
                        <div className='border bottom-1 bg-black text-white hover:text-black hover:bg-[#1c58b9] w-fit px-10 py-5 rounded-lg mt-5'>Learn More</div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-white w-auto text-left  shadow-[5px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] border-2 border-black rounded-xl px-4  py-4">
                        <div className='bg-[#72da83] p-5 w-fit border-2 border-black chooseicon mb-3'>
                            <FaHandsHelping size={50} className='text-white' />
                        </div>
                        <h2 className="text-xl font-semibold mt-4 mb-3">Real Time Support</h2>
                        <p className="mt-2 mb-4">We are here for you! Get assistance whenever you need it.</p>
                        <ul>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Fast response times.</li>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Dedicated support team.</li>
                            <li className="text-left mt-2"><HiCheckCircle className='inline' />Personalised support experience</li>
                        </ul>
                        <div className='border bottom-1 bg-black text-white hover:text-black hover:bg-[#1c58b9] w-fit px-10 py-5 rounded-lg mt-5'>Learn More</div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

}

export default Choosebillzy