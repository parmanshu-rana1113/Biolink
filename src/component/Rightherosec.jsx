import React, { useState, useEffect } from 'react';

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

const Rightherosec = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div
            className="relative bg-cover bg-center h-full flex items-center justify-center perspective"
            style={{
                transform: 'scale(0.95) rotate(-12deg) translateX(-25%)',
            }}
        >
            {/* Top Center Tilted Image - Flip Card */}
            <div
                className={`absolute transition-transform duration-500 transform ${scrollDirection === 'down' ? 'rotate-y-180' : ''} w-[60%] top-24 z-20 shadow-xl shadow-transparent transform-style-3d`}
            >
                <div className="relative w-full h-full transform-style-3d">
                    {/* Front Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-2.png"
                        alt="Top Image Front"
                        className="w-full h-full backface-hidden"
                        style={{ transform: 'rotateY(0deg)' }}
                    />
                    {/* Back Side */}
                    <img
                        src="https://cdn.bio.link/landing/top-animations/theme-1.png"
                        alt="Top Image Back"
                        className="w-full h-full backface-hidden absolute top-0 left-0"
                        style={{ transform: 'rotateY(180deg)' }}
                    />
                </div>
            </div>

            {/* Bottom-left Image - Flip Card */}
            <div
                className={`absolute bottom-52 left-0 transition-transform duration-500 transform ${scrollDirection === 'down' ? 'rotate-y-180' : ''} h-28 z-40 shadow-xl shadow-transparent transform-style-3d`}
                style={{
                    animation: scrollDirection === 'down'  ? 'swipeRightheroimg 1s ease-in-out' : 'none',
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
                className={`absolute top-32 right-0 transition-transform duration-500 transform ${scrollDirection === 'down' ? 'rotate-y-180' : ''} h-10 z-40 shadow-xl shadow-transparent transform-style-3d`}
                style={{
                    animation: scrollDirection === 'down'  ? 'swipeLeftheroimg 1s ease-in-out' : 'none',
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

export default Rightherosec;
