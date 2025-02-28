
"use client";

import Image from 'next/image';
import React from 'react';
import simg1 from '@/public/assets/categories/2.png';
import simg2 from '@/public/assets/categories/m1.png';
import simg3 from '@/public/assets/categories/m3.png';
import simg4 from '@/public/assets/categories/m2.png';
import Limg1 from '@/public/assets/categories/1.png';
import Limg2 from '@/public/assets/categories/3.png';
import PageHeading from '../pageTitle/PageTitle';

const page = () => {

  const sty = "w-full h-full object-cover object-center block hover:scale-95 inline-block transition-transform duration-200 ";

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5  mx-auto flex flex-wrap justify-center w-full">

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="flex w-full my-20 justify-center text-center flex-col font-monomakh">
          <PageHeading title="Luxury redefined, tradition preserved – only at Kuber Jewellery." />
        </div>

        <div  className="w-full justify-center flex flex-wrap md:-m-2 -m-1 ">
          <div className="flex flex-wrap w-1/2">
            <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                width={100}
                layout='responsive'
                src={Limg1} />
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                width={100}
                layout='responsive'
                src={simg3} />
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={simg2} />
            </div>
          </div>
          <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={simg1} />
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={simg4} />
            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={Limg2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page