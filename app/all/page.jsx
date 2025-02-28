"use client";

import carImg from "@/public/assets/All/KUBER2.png";
import Card from "../components/cards/page";
import CarouselImg from "../components/carouselimg/page";

import img1 from "@/public/assets/ankle/Bangle1.jpg";
import {
  default as img11,
  default as img7,
} from "@/public/assets/ankle/Bangle2.jpg";
import img6 from "@/public/assets/bracelets/Bracelet1.jpg";
import img4 from "@/public/assets/bracelets/Bracelet3.jpg";
import img2 from "@/public/assets/Earing/Earrings3.jpg";
import img15 from "@/public/assets/Earing/Earrings4.jpg";
import img8 from "@/public/assets/necklaces/imgneck1.jpg";
import img9 from "@/public/assets/necklaces/neck3.jpg";
import img13 from "@/public/assets/Pendent/Mangalsutra2.jpg";
import img3 from "@/public/assets/Ring/Ring1.jpg";
import {
  default as img10,
  default as img5,
} from "@/public/assets/Ring/Ring2.jpg";
import img12 from "@/public/assets/Ring/Ring3.jpg";
import img14 from "@/public/assets/Ring/Ring4.jpg";

const All = () => {
  const images = [
    { img: img1, title: "Bangles", desc: "White Gold 14 K" },
    { img: img2, title: "Earrings", desc: "White Gold 14 K" },
    { img: img3, title: "Ring", desc: "White Gold 14 K" },
    { img: img4, title: "Bracelet", desc: "White Gold 14 K" },
    { img: img5, title: "Ring", desc: "White Gold 14 K" },
    { img: img6, title: "Bracelet", desc: "White Gold 14 K" },
    { img: img7, title: "Bangles", desc: "White Gold 14 K" },
    { img: img8, title: "Necklace", desc: "White Gold 14 K" },
    { img: img9, title: "Necklace", desc: "White Gold 14 K" },
    { img: img10, title: "Ring", desc: "White Gold 14 K" },
    { img: img11, title: "Bangles", desc: "White Gold 14 K" },
    { img: img12, title: "Ring", desc: "White Gold 14 K" },
    { img: img13, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img14, title: "Ring", desc: "White Gold 14 K" },
    { img: img15, title: "Earrings", desc: "White Gold 14 K" },
  ];

  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="w-full relative lg:top-4">
        <CarouselImg Img={carImg} />
      </div>
      <div className="text-center text-3xl  font-bold font-grandiflora p-4 mt-10">
        <h1>
          Elegant necklaces enhance style with pendants, gemstones, chains, and
          timeless charm.
        </h1>
      </div>
      <section className="w-full min-h-screen pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* Main Content */}
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

export default All;
