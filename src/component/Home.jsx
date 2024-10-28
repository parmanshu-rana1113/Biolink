import React from 'react'
import "../App.css"
import BoxSlider from '../Boxslider';
import { useInView } from "react-intersection-observer";
import Reviewsection from './Reviewsection';
import FAQ from '../component/FAQ/FAQ';
import { useEffect, useState, useRef } from 'react';
import Leftherosec from './Leftherosec';
import Rightherosec from './Rightherosec';

function Home() {



    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    const { ref: bref, inView: bnView } = useInView({
        threshold: 0.3,
    });



    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {

    //                     setBnView(true);
    //                 } else {
    //                     setBnView(false);
    //                 }
    //             });
    //         },
    //         {
    //             threshold: [0.1], // Trigger when 10% of the section is in the viewport
    //         }
    //     );

    //     if (sectionRef.current) {
    //         observer.observe(sectionRef.current);
    //     }

    //     return () => {
    //         if (sectionRef.current) {
    //             observer.unobserve(sectionRef.current);
    //         }
    //     };
    // }, []);



    return (
        <>
            <div className='fixed w-12 h-12 right-10 bottom-10 z-40 hover:cursor-pointer'>
                <img src="https://cdn-icons-png.flaticon.com/128/9073/9073268.png" alt="" />
            </div>

            <div className="grid grid-cols-12 gap-4 px-4 md:px-10 h-96 md:h-screen "> 
                {/* Left Column - 2 Columns */}
                <div className="col-span-3 hidden lg:block">
                    <Leftherosec />
                </div>

                {/* Center Column - 8 Columns */}
                <div className="col-span-12 lg:col-span-6  flex flex-col items-center justify-center ">
                    {/* SVG Stars */}
                    <div className="flex">
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="w-7 h-7 m-1" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="w-7 h-7 m-1" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="w-7 h-7 m-1" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="w-7 h-7 m-1" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="w-7 h-7 m-1" alt="" />
                    </div>
                    <h2 className="text-lg font-medium mb-4 font-serif">Loved by 500,000+ creators</h2>
                    <h1 className="text-3xl md:text-7xl font-bold text-center font-serif text-animation">
                        Launch Your Site <br></br> in seconds
                    </h1>
                    <div className="relative w-full max-w-md md:px-5 pt-6 my-2">
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <span className="text-black px-3 rounded-l-md font-serif h-full">bio.link/</span>
                            <input type="text" placeholder="Your Name" className="flex-1 font-serif h-12 focus:outline-none" />
                            <button className="h-full font-serif p-3 text-white bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 rounded-r-md  focus:outline-none">
                                Claim My Link
                            </button>
                        </div>
                    </div>
                    <h3 className='font-serif'>its free and take less than a minute</h3>
                </div>
                 
                {/* Right Column - 2 Columns */}
                <div className="col-span-3 hidden lg:block">
                    < Rightherosec/>
                </div>
            </div>
             <div className=''>
             <Mobileherosec/>   
   
             </div>
                    
            {/* second */}
            <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <div className='flex justify-center items-center'>
                    <div className='flex-col'>
                        <h2 className='text-4xl md:text-6xl '>Unmatchable features</h2>

                        <div className='flex justify-center font-extralight'>
                            <span className='text-5xl p-2 font-semibold'
                                style={{
                                    backgroundImage: 'linear-gradient(.351turn, #ff5858 23.71%, #c058ff 78.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                Free, Forever
                            </span>
                        </div>

                    </div>

                </div>
                {/* Boxes Section */}
                <div className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                    <div className=' md:px-32 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10 '>
                            {/* Box 1 */}
                            <div className={`bg-white p-1 rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`} >
                                <img src="https://cdn.bio.link/landing/new-features/themes.png" alt="Box Image 1" className='h-4/5 w-auto' />
                                <span className='mt-6 text-center text-xl font-semibold'>Pick a theme <br /> or
                                    design your own</span>
                            </div>
                            {/* Box 2 */}
                            <div className={`bg-white p-1 rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`}>
                                <img src="https://cdn.bio.link/landing/new-features/embed-apps.png" alt="Box Image 2" className='h-4/5 w-auto' />
                                <span className='mt-4 text-center text-xl font-semibold'>Embed your favorite apps <br />
                                    and content</span>
                            </div>
                            {/* Box 3 */}
                            <div className={`bg-white p-1 rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`}>
                                <img src="https://cdn.bio.link/landing/new-features/stats.png" alt="Box Image 3" className='h-4/5 w-auto' />
                                <span className='mt-4 text-center text-xl font-semibold'>Keep track of everything, <br />
                                    only for your eyes</span>
                            </div>
                            {/* Box 4 */}
                            <div className={`bg-white p-1 rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`}>
                                <BoxSlider />
                                <span className='mt-4 text-center text-xl font-semibold'>
                                    Everything you need for a <br /> complete site
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* third */}

            <div ref={bref} className={`rounded-2xl transition-all duration-700 transition-section ease-in-out ${bnView ? ' fullscreen-black' : 'md:mx-20 h-auto'} bg-black `}>

                <div className='flex justify-center text-white text-3xl md:text-5xl font-semibold pt-4'>
                    <span
                        className=''
                        style={{
                            backgroundImage: 'linear-gradient(.351turn, #ff5858 23.71%, #c058ff 78.8%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        Pro.</span>
                    <span className='px-1'>For creators who <br /> want more.</span>
                </div>

                <div >
                    <div className=' md:px-20 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-10 '>
                            {/* Box 1 */}
                            <div className={`bg-black p-1 rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`} >
                                <img src="https://cdn.bio.link/landing/feature/multiple-sites.png" alt="Box Image 1" className='h-4/5 w-auto' />
                                <span className='mt-6 text-center text-white  text-2xl font-bold'>Create  <span style={{
                                    backgroundImage: 'linear-gradient(.351turn, #ff5858 23.71%, #c058ff 78.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Unlimited sites</span> </span>

                            </div>
                            {/* Box 2 */}
                            <div className={`bg-black p-1  rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`}>
                                <img src="https://cdn.bio.link/landing/feature/custom-domains.png" alt="Box Image 2" className='h-4/5 w-auto' />
                                <span className='mt-6 text-center text-white  text-2xl font-bold'>use your  <span style={{
                                    backgroundImage: 'linear-gradient(.351turn, #ff5858 23.71%, #c058ff 78.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Own domain name</span> <br /> <span> to host your sites</span> </span>

                            </div>
                            {/* Box 3 */}
                            <div className={`bg-black p-1  rounded-3xl flex flex-col items-center shadow-xl box ${inView ? 'box-inview' : ''}`}>
                                <img src="https://cdn.bio.link/landing/feature/custom-domains.png" alt="Box Image 2" className='h-4/5 w-auto' />
                                <span className='mt-6 text-center text-white  text-2xl font-bold'>Build an  <span style={{
                                    backgroundImage: 'linear-gradient(.351turn, #ff5858 23.71%, #c058ff 78.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>email list,</span> <br /> <span> a creators biggest asset</span> </span>

                            </div>
                            {/* Box 4 */}
                            <div className={`bg-black p-1 rounded-3xl flex flex-col items-center  shadow-xl box ${inView ? 'box-inview' : ''}`}>
                                <img src="https://cdn.bio.link/landing/feature/blog-posts.png" alt="Box Image 3" className='h-4/5 w-auto' />
                                <span className='mt-6 text-center text-white  text-2xl font-bold'> <span style={{
                                    backgroundImage: 'linear-gradient(.351turn, #ff5858 23.71%, #c058ff 78.8%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>Publish post</span>  <span> and <br /> alert your subscribers</span> </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* fourth */}
            <div >
                <Reviewsection />
            </div>

            <div className="fq">
                <FAQ />
            </div>

        </>
    );
}

export default Home


function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, []);

    return scrollDirection;
}

const Mobileherosec = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div
            className="relative bg-cover bg-center flex justify-center  h-screen  lg:hidden perspective"
        >
            {/* Top Center Tilted Image - Flip Card */}
            <div
                className={`absolute transition-transform duration-500 transform ${scrollDirection === 'down' ? 'rotate-y-180' : ''} w-72 top-16 sm:top-24 z-20 shadow-xl shadow-transparent transform-style-3d`}
            >
                <div className="relative transform-style-3d">
                    {/* Front Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-2.png"
                        alt="Top Image Front"
                        className="backface-hidden"
                        style={{ transform: 'rotateY(0deg)', width: '100%', height: 'auto' }} // Ensure it takes full width
                    />
                    {/* Back Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-1.png"
                        alt="Top Image Back"
                        className="backface-hidden absolute top-0 left-0 w-full h-full"
                        style={{ transform: 'rotateY(180deg)' }} // Ensure it takes full width
                    />
                </div>
            </div>

            {/* Bottom-left Image - Flip Card */}
            <div
                className={`absolute bottom-36  left-0 md:left-52 md:bottom-32 transition-transform duration-500 transform ${scrollDirection === 'down' ? 'rotate-y-180' : ''} h-28 sm:h-28 z-40 shadow-xl shadow-transparent transform-style-3d`}
                style={{
                    animation: scrollDirection === 'down' ? 'swipeRightheroimg 1s ease-in-out' : 'none',
                }}
            >
                <div className="relative w-full h-full transform-style-3d">
                    {/* Front Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-2-embed.png"
                        alt="Bottom-left Image Front"
                        className="w-full h-full backface-hidden"
                        style={{ transform: 'rotateY(0deg)' }}
                    />
                    {/* Back Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-1-embed.png"
                        alt="Bottom-left Image Back"
                        className="w-full h-full backface-hidden absolute top-0 left-0"
                        style={{ transform: 'rotateY(180deg)' }}
                    />
                </div>
            </div>

            {/* Top-right Image - Flip Card */}
            <div
                className={`absolute top-28 right-0 md:right-60  transition-transform duration-500 transform ${scrollDirection === 'down' ? 'rotate-y-180' : ''}  h-12 z-40 shadow-xl shadow-transparent transform-style-3d`}
                style={{
                    animation: scrollDirection === 'down' ? 'swipeLeftheroimg 1s ease-in-out' : 'none',
                }}
            >
                <div className="relative w-full h-full transform-style-3d">
                    {/* Front Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-3-socials.png"
                        alt="Top-right Image Front"
                        className="w-full h-full backface-hidden"
                        style={{ transform: 'rotateY(0deg)' }}
                    />
                    {/* Back Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-1-socials.png"
                        alt="Top-right Image Back"
                        className="w-full h-full backface-hidden absolute top-0 left-0"
                        style={{ transform: 'rotateY(180deg)' }}
                    />
                </div>
            </div>
        </div>
    );
};
