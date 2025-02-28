
"use client"

import React from 'react';
import Img1 from '@/public/assets/testimonial/user.png';
import Img2 from '@/public/assets/testimonial/hr.png';
import Img3 from '@/public/assets/testimonial/dv.png';
import Image from 'next/image';
const Testimonial = () => {
    const details1 = 
        "Mr. Saurabh Jain, founder and CEO of Kuber Jewellery, leads with a vision of blending tradition with modern elegance. " +
        "His craftsmanship and innovation set new standards in the jewellery industry, making Kuber Jewellery a trusted name.";

    const details2 = 
        "Diksha Deka, the HR Manager at Codes And Marketing, plays a crucial role in building a strong and talented team. " +
        "With her expertise in talent acquisition and employee engagement, she ensures a positive and growth-oriented work culture, " +
        "fostering creativity and excellence within the organization.";

    const details3 = 
        "Chandan Prajapati, Senior Developer at Codes And Marketing, is the driving force behind the brand’s digital transformation. " +
        "With a passion for technology and innovation, he develops seamless e-commerce experiences, ensuring customers enjoy " +
        "a smooth and secure online shopping journey.";

    const data = [
        { img: Img1, name: "Mr. Saurabh Jain", profile: "CEO & Founder", dd: details1 },
        { img: Img2, name: "Diksha Deka", profile: "HR Manager", dd: details2 },
        { img: Img3, name: "Chandan Prajapati", profile: "Senior Developer", dd: details3 }
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-[8%] py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data?.map((item, i) => (
                        <div key={i} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full flex-col justify-center text-center hover:scale-105 inline-block transition-transform duration-200 space-y-2 border-2 p-4 rounded-lg ease-in">
                                <div className='w-20 h-20 mx-auto'>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        layout="responsive"
                                        height={100}
                                        width={100}
                                        className="w-5 h-5 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 "
                                    />
                                </div>
                                <h2 className="text-gray-900 text-sm font-medium title-font tracking-wider">
                                    {item.name}
                                </h2>
                                <p className="text-[#666666] text-sm">{item.profile}</p>
                                <p className="leading-relaxed text-gray-600 font-monomakh font-thin text-[15px] text-left ">{item.dd}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial