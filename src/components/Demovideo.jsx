import  { useRef } from 'react';
import videoimg from '../assets/Homepage/video_thumbnail.png';

const Demovideo = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between px-4 lg:px-0 py-10 lg:py-20'>
                <div className='relative sm:p-5 md:p-10 lg:p-20 order-2 md:order-1'>
                    <img src={videoimg} alt="demovideo" />
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <button onClick={playVideo} className='bg-black rounded-full p-3 shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='sm:pl-5 md:pl-10 lg:pl-20 sm:pr-10 md:pr-15 lg:pr-32 order-1 md:order-2 mb-10 md:mb-0'>
                    <h1 className='text-left font-serif text-3xl sm:text-4xl  lg:text-5xl font-semibold mt-5 mx-3 mb-9'>
                        <span>Billzy simplifies the</span>
                        <span>process of setting up</span>
                        <span>direct debits.</span>  
                    </h1>
                    <p className='mb-9 mx-3 text-left'>We also give you the ability to setup recurring payments for your customers, allowing you to focus on growing your business.</p>
                    <button className="bg-[#1c58b9] hover:bg-[#72da83] text-white hover:text-black text-center font-bold shadow-[5px_5px_0px_0px_rgba(0,0,0)] py-3 px-6 rounded">Get Started</button>
                </div>
            </div>
            <video ref={videoRef} width="600" controls style={{ display: 'none' }}>
                <source src="your-video-link.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    );
}

export default Demovideo;