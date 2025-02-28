"use client";

import React from "react";
import CarouselImg from "../components/carouselimg/page";
import carImg from "@/public/assets/necklaces/NB.jpg";
import Accordion from "../components/according/page";
import Card from "../components/cards/page";

import img1 from "@/public/assets/necklaces/imgneck1.jpg";
import img2 from "@/public/assets/necklaces/neck2.jpg";
import img3 from "@/public/assets/necklaces/neck3.jpg";
import img4 from "@/public/assets/necklaces/neck4.jpg";
import img5 from "@/public/assets/necklaces/1.jpg";
import img6 from "@/public/assets/necklaces/3.jpg";
import img7 from "@/public/assets/necklaces/4.jpg";
import img8 from "@/public/assets/necklaces/img8.png";
import img9 from "@/public/assets/necklaces/img9.png";
import img10 from "@/public/assets/necklaces/img10.png";
import img11 from "@/public/assets/necklaces/img11.png";
import img12 from "@/public/assets/necklaces/img12.png";
import img13 from "@/public/assets/necklaces/img13.png";
import img14 from "@/public/assets/necklaces/img14.png";
import img15 from "@/public/assets/necklaces/img15.png";

const Neckles = () => {
  const images = [
    { img: img1, title: "Necklace", desc: "White Gold 14 K" },
    { img: img2, title: "Necklace", desc: "White Gold 14 K" },
    { img: img3, title: "Necklace", desc: "White Gold 14 K" },
    { img: img4, title: "Necklace", desc: "White Gold 14 K" },
    { img: img5, title: "Necklace", desc: "White Gold 14 K" },
    { img: img6, title: "Necklace", desc: "White Gold 14 K" },
    { img: img7, title: "Necklace", desc: "White Gold 14 K" },
    { img: img8, title: "Necklace", desc: "White Gold 14 K" },
    { img: img9, title: "Necklace", desc: "White Gold 14 K" },
    { img: img10, title: "Necklace", desc: "White Gold 14 K" },
    { img: img11, title: "Necklace", desc: "White Gold 14 K" },
    { img: img12, title: "Necklace", desc: "White Gold 14 K" },
    { img: img13, title: "Necklace", desc: "White Gold 14 K" },
    { img: img14, title: "Necklace", desc: "White Gold 14 K" },
    { img: img15, title: "Necklace", desc: "White Gold 14 K" },
  ];

  return (
    <div className="w-full  min-h-[800px]  mx-auto bg-white ">
      <div className="">
        <CarouselImg Img={carImg} />
      </div>
      <div className="text-center text-3xl  font-bold font-grandiflora p-4 mt-10">
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          Elegant necklaces enhance style with pendants, gemstones, chains, and
          timeless charm.
        </h1>
      </div>
      <section className="w-full pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            <div className="w-full lg:w-3/4 py-10">
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

export default Neckles;
