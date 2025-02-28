"use client";

import React from "react";
import CarouselImg from "../components/carouselimg/page";
import carImg from "@/public/assets/Ring/rb.jpg";
import Accordion from "../components/according/page";
import Card from "../components/cards/page";

import img1 from "@/public/assets/Ring/Ring1.jpg";
import img2 from "@/public/assets/Ring/Ring2.jpg";
import img3 from "@/public/assets/Ring/Ring3.jpg";
import img4 from "@/public/assets/Ring/Ring4.jpg";
import img5 from "@/public/assets/Ring/img5.png";
import img6 from "@/public/assets/Ring/img6.png";
import img7 from "@/public/assets/Ring/img7.png";
import img8 from "@/public/assets/Ring/img8.png";
import img9 from "@/public/assets/Ring/img9.png";
import img10 from "@/public/assets/Ring/img10.png";
import img11 from "@/public/assets/Ring/img11.png";
import img12 from "@/public/assets/Ring/img12.png";
import img13 from "@/public/assets/Ring/img13.png";
import img14 from "@/public/assets/Ring/img14.png";
import img15 from "@/public/assets/Ring/img15.png";

const Bracelet = () => {
  const images = [
    { img: img1, title: "Ring", desc: "White Gold 14 K" },
    { img: img2, title: "Ring", desc: "White Gold 14 K" },
    { img: img3, title: "Ring", desc: "White Gold 14 K" },
    { img: img4, title: "Ring", desc: "White Gold 14 K" },
    { img: img5, title: "Ring", desc: "White Gold 14 K" },
    { img: img6, title: "Ring", desc: "White Gold 14 K" },
    { img: img7, title: "Ring", desc: "White Gold 14 K" },
    { img: img8, title: "Ring", desc: "White Gold 14 K" },
    { img: img9, title: "Ring", desc: "White Gold 14 K" },
    { img: img10, title: "Ring", desc: "White Gold 14 K" },
    { img: img11, title: "Ring", desc: "White Gold 14 K" },
    { img: img12, title: "Ring", desc: "White Gold 14 K" },
    { img: img13, title: "Ring", desc: "White Gold 14 K" },
    { img: img14, title: "Ring", desc: "White Gold 14 K" },
    { img: img15, title: "Ring", desc: "White Gold 14 K" },
  ];

  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="w-full">
        <CarouselImg Img={carImg} />
      </div>
      <div className="text-center text-3xl  font-bold font-grandiflora p-4 mt-10">
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        A delicate touch of elegance, capturing moments of love.
        </h1>
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

export default Bracelet;
