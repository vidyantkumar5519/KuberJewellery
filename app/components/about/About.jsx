
"use client"

import React from 'react';
import AboutImg from '@/public/assets/about/aboutImg.png';
import Image from 'next/image';
import CustomButton from '../customButton/CustomButton';

const About = () => {
    return (
        <section className="bg-BrownDark body-font">
            <div className="mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        src={AboutImg}
                        alt="hero"
                        height={100}
                        width={100}
                        layout='responsive'
                        className="object-cover object-center rounded hover:scale-110 inline-block transition-transform duration-200"
                    />
                </div>
                <div className="flex mx-auto flex-col justify-center items-center text-center w-full lg:w-1/2 px-4">
                    <h1 className="title-font font-monomakh sm:text-4xl text-3xl mb-4 text-white">About Us</h1>
                    <p className="mb-8 font-monomakh leading-relaxed text-white">
                    Rooted in tradition, yet embracing modern elegance, Kuber Jewellery is a brand that symbolises trust, purity, and innovation. Every piece we create is a work of art, crafted with precision and passion by skilled artisans. With a legacy of excellence, we strive to redefine luxury with designs that are as unique as you.
                    </p>
                    <p className="mb-8 leading-relaxed font-monomakh  text-white">
                    Our jewellery is more than just gold and diamonds—it’s a reflection of your style, emotions, and personality. Whether you’re looking for heritage-inspired masterpieces or contemporary designs, we have something that resonates with every jewellery lover.
                    </p>
                    
                    <div className="flex justify-center">
                        <CustomButton title="View More" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About