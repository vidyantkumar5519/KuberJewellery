import React from 'react';
import { Anton } from "next/font/google";

const antonFont = Anton({
    subsets: ["latin"],
    weight: ["400"],
});

const PageTitle = ({ title }) => {
    return (
        <h1 className={`${antonFont.className} flex justify-center sm:text-5xl text-2xl mx-auto font-bold title-font text-defaultColor cursor-pointer lg:w-full lg:mb-0 mb-4`}>{title}</h1>
    )
}

export default PageTitle