"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPlane, BiSupport } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import NewsLetter from "../components/newsLetter/NewsLetter";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SocialIcons = [
    {
      icon: FaFacebookF,
      title: "Facebook",
      link: "https://www.facebook.com/yourfacebookpage",
      color: "#1877F2",
    },
    {
      icon: FaLinkedinIn,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/yourlinkedinpage",
      color: "#0077B5",
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      link: "https://www.twitter.com/yourtwitterpage",
      color: "#1DA1F2",
    },
    {
      icon: AiFillInstagram,
      title: "Instagram",
      link: "https://www.instagram.com/kuberdiamond/",
      gradient: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    },
  ];

  const NavItems = [
    { title: "Home", path: "/" },
    { title: "Necklaces", path: "/necklace" },
    { title: "Bracelet", path: "/bracelet" },
    { title: "Rings", path: "/rings" },
    { title: "Mangalsutra", path: "/mangalsutra" },
    { title: "Ankle Bracelets", path: "/ankle" },
  ];

  const features = [
    { title: "Find our stores near you" },
    { title: "24/7 Customer Support" },
    { title: "Live Chat & Assistance" },
  ];

  const dd = [
    { title: "100% Certified Gold & Diamonds" },
    { title: "100% Authentic Genuine Jewelry" },
    { title: "Worldwide Shipping" },
  ];

  const sty =
    "text-slate-50 hover:text-BrownMid hover:scale-105 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer";

  return (
    <footer className="relative text-gray-600 w-full">
      {mounted && (
        <div className="mx-auto px-[8%] pt-32 pb-16 bg-footerColor">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
            {/* About Section */}
            <div className="space-y-6">
              <h2 className="font-semibold text-BrownMid tracking-widest text-md">MY ACCOUNT</h2>
              <div className="flex flex-wrap gap-3">
                {SocialIcons.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`p-3 border border-white rounded-full hover:scale-105 transition-transform duration-200 ${item.gradient || ''}`}
                      style={{ backgroundColor: item.color || "transparent" }}
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  );
                })}
              </div>
              <div>
                <ul className="space-y-3">
                  {dd.map((item, i) => (
                    <li key={i}>
                      <a target="_blank" rel="noopener noreferrer" className={sty}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <NewsLetter />
            </div>

            {/* Menu Section */}
            <div className="flex flex-col justify-center items-start md:items-center">
              <ul className="space-y-3">
                <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6 md:-mt-[20px]">
                  QUICK LINKS
                </h2>
                {NavItems.map((item, i) => (
                  <li key={i}>
                    <Link href={item.path} className={sty}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Store Locator Section */}
            <div>
              <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">
                STORE LOCATOR
              </h2>
              <ul className="space-y-3">
                {features.map((item, i) => (
                  <li key={i}>
                    <a target="_blank" rel="noopener noreferrer" className={sty}>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">
                  ABOUT US
                </h2>
                <div className="space-y-3 flex flex-col">
                  <p className={sty}>
                    <strong>Email: </strong>kuberdiamond7@gmail.com
                  </p>
                  <p className={sty}>
                    <strong>Phone: </strong>+91 99994 14148
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">
                  SERVICES
                </h2>
                <ul className="flex flex-col space-y-3">
                  <li className={sty}>
                    <Link href="/terms">Terms & Conditions</Link>
                  </li>
                  <li className={sty}>
                    <Link href="/aboutUs">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
