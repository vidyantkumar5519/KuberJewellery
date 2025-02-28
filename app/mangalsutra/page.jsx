"use client";

import carImg from "@/public/assets/Pendent/mb.jpg";
import Accordion from "../components/according/page";
import Card from "../components/cards/page";
import CarouselImg from "../components/carouselimg/page";

import img1 from "@/public/assets/Pendent/Mangalsutra1.jpg";
import img2 from "@/public/assets/Pendent/Mangalsutra2.jpg";
import img10 from "@/public/assets/Pendent/img10.png";
import img11 from "@/public/assets/Pendent/img11.png";
import img12 from "@/public/assets/Pendent/img12.png";
import img13 from "@/public/assets/Pendent/img13.png";
import img14 from "@/public/assets/Pendent/img14.png";
import img15 from "@/public/assets/Pendent/img15.png";
import img3 from "@/public/assets/Pendent/img3.png";
import img4 from "@/public/assets/Pendent/img4.png";
import img5 from "@/public/assets/Pendent/img5.png";
import img6 from "@/public/assets/Pendent/img6.png";
import img7 from "@/public/assets/Pendent/img7.png";
import img8 from "@/public/assets/Pendent/img8.png";
import img9 from "@/public/assets/Pendent/img9.png";

const Mangle = () => {
  const images = [
    { img: img1, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img2, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img3, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img4, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img5, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img6, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img7, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img8, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img9, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img10, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img11, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img12, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img13, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img14, title: "Mangalsutra", desc: "White Gold 14 K" },
    { img: img15, title: "Mangalsutra", desc: "White Gold 14 K" },
  ];

  return (
    <div className="w-full h-full mx-auto bg-white">
      <div className="w-full">
        <CarouselImg Img={carImg} />
      </div>
      <div className="text-center text-3xl  font-bold font-grandiflora p-4 mt-10">
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        A sacred symbol of love, commitment, and eternal togetherness.
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

export default Mangle;
