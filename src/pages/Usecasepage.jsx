import 'react'
import { NavLink } from 'react-router-dom';

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
                    <span>Professional Services</span>  
                </h1>
                <div className='mb-9 mx-3 text-left'>
                    <ul className='decoration-dotted'>
                        <li className='font-semibold text-2xl'>Use Case:</li> 
                        <p className='inline text-xl  mb-2'>Invoicing clients for ongoing services such as monthly retainers.</p>
                        <li className='text-2xl font-semibold'>Scenario:</li> 
                        <p className='inline text-xl  mb-2'>An accounting firm bills its clients monthly for ongoing services but often faces delayed payments, disrupting cash flow.</p>
                        <li className='text-2xl font-semibold'>Benefit:</li> 
                        <p className='inline text-xl mb-2'>Billzy automates the process, collecting payments on the date agreed upon by you and your customer, helping the firm maintain a steady cash flow and reducing the time spent on payment follow-ups.</p>
                    </ul>
                </div>
                <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white mt-3 hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded"> <NavLink to="/contact">Contact Us Today!</NavLink></button>
            </div>
            <div className='relative sm:p-5 md:p-10 lg:p-12 order-1 md:order-2'>
                <img src="https://billzy.com/wp-content/uploads/2024/09/coming-to-them-for-advice-2023-11-27-04-56-05-utc-scaled.jpg" alt="demovideo" className='w-full h-full' />
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20'>
            <div className='relative sm:p-5 md:p-10 lg:p-20'>
                <img src="https://billzy.com/wp-content/uploads/2024/09/female-charity-worker-sorting-clothing-donations-a-2024-05-02-19-57-36-utc-scaled.jpg" alt="demovideo" />
            </div>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>Non-Profit Organisations</span>  
                </h1>
                <div className='mb-9 mx-3 text-left'>
                    <ul className='decoration-dotted'>
                        <li className='font-semibold text-2xl'>Use Case:</li> 
                        <p className='inline text-xl mb-2'>Invoicing clients for ongoing services such as monthly retainers.</p>
                        <li className='text-2xlt font-semibold'>Scenario:</li> 
                        <p className='inline text-xl mb-2'>An accounting firm bills its clients monthly for ongoing services but often faces delayed payments, disrupting cash flow.</p>
                        <li className='text-2xl font-semibold'>Benefit:</li> 
                        <p className='inline text-xl mb-2'>Billzy automates the process, collecting payments on the date agreed upon by you and your customer, helping the firm maintain a steady cash flow and reducing the time spent on payment follow-ups.</p>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20 mb-3'>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0 order-2 md:order-1'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>Equipment Hire and Rental</span>  
                </h1>
                <div className='mb-9 mx-3 text-left'>
                    <ul className='decoration-dotted'>
                        <li className='font-semibold text-2xl'>Use Case:</li> 
                        <p className='inline text-xl mb-2'>Invoicing clients for ongoing services such as monthly retainers.</p>
                        <li className='text-2xl font-semibold'>Scenario:</li> 
                        <p className='inline text-xl mb-2'>An accounting firm bills its clients monthly for ongoing services but often faces delayed payments, disrupting cash flow.</p>
                        <li className='text-2xlt font-semibold'>Benefit:</li> 
                        <p className='inline text-xl mb-2'>Billzy automates the process, collecting payments on the date agreed upon by you and your customer, helping the firm maintain a steady cash flow and reducing the time spent on payment follow-ups.</p>
                    </ul>
                </div>
            </div>
            <div className='sm:p-5 md:p-10 lg:p-20 order-1 md:order-2'>
                <img src="https://billzy.com/wp-content/uploads/2024/09/8525b680-457d-4bed-839e-cc134bcac7ac.webp" alt="demovideo" />
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20'>
            <div className='relative sm:p-5 md:p-10 lg:p-20'>
                <img src="https://billzy.com/wp-content/uploads/2024/09/mothers-helping-sons-10-11-12-13-get-dressed-fo-2023-11-27-04-53-29-utc-scaled.jpg" alt="demovideo" />
            </div>
            <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 mb-10 md:mb-0'>
                <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                    <span>Local Sporting Clubs</span>
                </h1>
                <div className='mb-9 mx-3 text-left'>
                    <ul className='decoration-dotted'>
                        <li className='font-semibold text-2xl'>Use Case:</li> 
                        <p className='inline text-xl mb-2'>Invoicing clients for ongoing services such as monthly retainers.</p>
                        <li className='text-2xl font-semibold'>Scenario:</li> 
                        <p className='inline text-xl mb-2'>An accounting firm bills its clients monthly for ongoing services but often faces delayed payments, disrupting cash flow.</p>
                        <li className='text-2xl font-semibold'>Benefit:</li> 
                        <p className='inline text-xl mb-2'>Billzy automates the process, collecting payments on the date agreed upon by you and your customer, helping the firm maintain a steady cash flow and reducing the time spent on payment follow-ups.</p>
                    </ul>
                </div>
                <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded"><NavLink to="/contact">Contact Us Today!</NavLink></button>
            </div>
        </div>
    </>
  )
}

export default Usecasepage
