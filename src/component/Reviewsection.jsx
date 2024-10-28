import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Reviewsection = () => {
    const creators = [
        {
            name: 'Austin Archer',
            image: 'https://cdn.bio.link/landing/user_1.webp',
            link: 'bio.link/austinarcher',
        },
        {
            name: 'AC Milan',
            image: 'https://cdn.bio.link/landing/user_2.jpg',
            link: 'bio.link/acmilan',
        },
        {
            name: 'Jo Franco',
            image: 'https://cdn.bio.link/landing/user-3_1.jpeg', 
            link: 'bio.link/jo_franco',
        },
        {
            name: 'Padre Paulo',
            image: 'https://cdn.bio.link/landing/user_5_new.png', 
            link: 'bio.link/padrepauloricardo',
        },
        {
            name: 'The Bachelorette',
            image: 'https://cdn.bio.link/landing/user_1.webp', 
            link: 'bio.link/bachelorette',
        },
    ];

    return (
        <section className="bg-white py-12">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Loved by 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600"> 500,000+ </span> <br />
                    creators
                </h2>
            </div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
                className="flex justify-center"
            >
                {creators.map((creator, index) => (
                    <SwiperSlide key={index}>
                        <div className="text-center">
                            <img
                                src={creator.image}
                                alt={creator.name}
                                className="w-32 h-32 rounded-full mx-auto mb-2"
                            />
                            <p className="text-smlg font-semibold">{creator.name}</p>
                            <a
                                href={`https://${creator.link}`}
                                className="text-xs text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {creator.link}
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Reviewsection;
