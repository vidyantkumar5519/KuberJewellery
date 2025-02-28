"use client";

import React from "react";
import CarouselImg from "../components/carouselimg/page";
import carImg from "@/public/assets/ankle/BB.png";
import Accordion from "../components/according/page";
import Card from "../components/cards/page";
import PageTitle from "../components/pageTitle/PageTitle";

import img1 from "@/public/assets/ankle/Bangle1.jpg";
import img2 from "@/public/assets/ankle/Bangle2.jpg";
import img3 from "@/public/assets/ankle/Bangle3.jpg";
import img4 from "@/public/assets/ankle/Bangle4.jpg";
import img5 from "@/public/assets/bracelets/img5.png";
import img6 from "@/public/assets/bracelets/img6.png";
import img7 from "@/public/assets/bracelets/img7.png";
import img8 from "@/public/assets/bracelets/img8.png";
import img9 from "@/public/assets/bracelets/1.jpg";
import img10 from "@/public/assets/bracelets/img10.png";
import img11 from "@/public/assets/bracelets/img11.png";
import img12 from "@/public/assets/bracelets/2.jpg";
import img13 from "@/public/assets/bracelets/3.jpg";
import img14 from "@/public/assets/bracelets/img14.png";
import img15 from "@/public/assets/bracelets/4.jpg";

const Pendent = () => {
  const images = [
    { img: img1, title: "Bangles", desc: "White Gold 14 K" },
    { img: img2, title: "Bangles", desc: "White Gold 14 K" },
    { img: img3, title: "Bangles", desc: "White Gold 14 K" },
    { img: img4, title: "Bangles", desc: "White Gold 14 K" },
    { img: img5, title: "Bangles", desc: "White Gold 14 K" },
    { img: img6, title: "Bangles", desc: "White Gold 14 K" },
    { img: img7, title: "Bangles", desc: "White Gold 14 K" },
    { img: img8, title: "Bangles", desc: "White Gold 14 K" },
    { img: img9, title: "Bangles", desc: "White Gold 14 K" },
    { img: img10, title: "Bangles", desc: "White Gold 14 K" },
    { img: img11, title: "Bangles", desc: "White Gold 14 K" },
    { img: img12, title: "Bangles", desc: "White Gold 14 K" },
    { img: img13, title: "Bangles", desc: "White Gold 14 K" },
    { img: img14, title: "Bangles", desc: "White Gold 14 K" },
    { img: img15, title: "Bangles", desc: "White Gold 14 K" },
  ];

  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="w-full">
        <CarouselImg Img={carImg} />
      </div>
      {/* <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-7 text-center mt-5 ">
        <PageTitle title="Elegant necklaces enhance style with pendants, gemstones, chains, and timeless charm." />
      </div> */}
      <div className="text-center text-3xl  font-bold font-grandiflora p-4 mt-10">
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">Traditional yet trendy, adding beauty with every graceful movement.</h1>
      </div>
      <section className="w-full min-h-screen pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                {images.map((item, index) => (
                  <div key={index} data-aos="fade-up">
                    <Card img={item.img} title={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pendent;
