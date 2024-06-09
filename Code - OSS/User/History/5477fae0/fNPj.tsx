"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";


const musicSchoolContent = [
  {
    title: "Web Development Basics",
    description:
      "Get started with the fundamentals of web development in this beginner-friendly course, perfect for those eager to dive into coding.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web Development Basics
      </div>
    ),
  },
  {
    title: "Anime Appreciation",
    description:
      "Explore the captivating world of anime with Varun as your guide, diving into its art, culture, and storytelling.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
            src="/Ilya_Kuvshino.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Ilya"
          />
      </div>
      
    ),
  },
  {
    title: "Introduction to Coding",
    description:
      "Embark on a journey of learning new things with Varun as he introduces you to the exciting world of coding and programming.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Introduction to Coding
      </div>
    ),
  },
  {
    title: "Anime Web Development Fusion",
    description:
      "Join Varun in a unique blend of anime and web development, combining creativity and technical skills to build dynamic and engaging websites.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--pink-500))] flex items-center justify-center text-white">
        Anime Web Development Fusion
      </div>
    ),
  },
];


function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs