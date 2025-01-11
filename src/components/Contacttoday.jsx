import 'react'

const Contacttoday = () => {
const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    if (email) {
        alert(`Submitted your email address: ${email}`);
        e.target.elements.email.value = ' ';
    } else {
        alert('Please enter your email address.');
    }
};

return (
    <>
        <div className='bg-[#72da83] text-center flex flex-col items-center justify-center px-4 lg:px-0 pt-36 pb-36 mb-5'>
            <div>
                <h1 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mt-5 sm:mx-3 mb-9'>
                    <span className='inline min-[1026px]:block sm:mr-3'>
                        Ready to simplify your payments...
                    </span>
                    <span className='inline min-[1026px]:block sm:mr-3'>
                        contact us today
                    </span>
                </h1>
                <p className='mb-9 mx-3 text-center'>
                    <span className='block text-lg'>Take control of your business finances with</span>
                    <span className='block text-lg'>ease. Let Billzy handle the rest.</span>
                </p>
            </div>
            <div className='w-full md:w-96'>
                <form className='flex flex-col md:flex-row gap-4' onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="email" placeholder='Enter Your Email' className='text-center md:text-start border-2 border-black rounded-lg py-4 pl-4 pr-10 w-full' />
                    </div>
                    <button type="submit" className='w-full md:w-fit bg-[#1c58b9] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-3 rounded'>Get Started </button>
                </form>
            </div>
        </div>
    </>
);
}

export default Contacttoday