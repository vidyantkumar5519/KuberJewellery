"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/ankle/bg.jpg";
import img2 from "@/public/assets/Earing/Earrings3.jpg";
import img3 from "@/public/assets/Ring/Ring1.jpg";
import img4 from "@/public/assets/bracelets/Bracelet3.jpg";
import img5 from "@/public/assets/Ring/Ring2.jpg";
import img6 from "@/public/assets/bracelets/Bracelet1.jpg";
import img7 from "@/public/assets/ankle/Bangle2.jpg";
import img8 from "@/public/assets/necklaces/imgneck1.jpg";
import PageTitle from "../pageTitle/PageTitle";

const Trendy = () => {
  const data = [
    { img: img1, alt: "Image 1", title: "Bangles" },
    { img: img2, alt: "Image 2", title: "Earrings" },
    { img: img3, alt: "Image 3", title: "Ring" },
    { img: img4, alt: "Image 4", title: "Bracelets" },
    { img: img5, alt: "Image 1", title: "Ring" },
    { img: img6, alt: "Image 2", title: "Bracelets" },
    { img: img7, alt: "Image 3", title: "Bangles" },
    { img: img8, alt: "Image 4", title: "Necklaces" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12  ">
      {/* Title Section */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-7 ">
        <PageTitle title="Introducing Our Trendy Collection" />
      </div>
      <p data-aos="flip-up" className="text-center font-medium font-monomakh text-xl mb-5">Crafting timeless treasures, inspired by heritage and designed for the future</p>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto">
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {data.map((item, i) => (
            <div key={i}  data-aos="fade-up" className="group w-full p-2 sm:p-3 md:p-4">
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 
                                           (max-width: 1024px) 45vw, 
                                           25vw"
                  className="object-cover object-center 
                                             transition-transform duration-300 ease-in-out
                                             group-hover:scale-110"
                  priority={i === 0}
                />
              </div>

              {/* Title */}
              <h2
                className="text-base sm:text-lg font-semibold text-gray-800 text-center 
                                         transition-colors duration-300 group-hover:text-defaultColor"
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trendy;
