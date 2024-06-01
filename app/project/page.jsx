"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import SliderBtns from "../../components/SliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "KFC",
    desc: "This is a static page that presents a food-related web page using HTML, CSS, and JavaScript. It includes a dark mode and is quite responsive. I recently demonstrated my expertise of this project as a beginner.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb3.png",
    live: "https://kfcmain.netlify.app/",
    github: "https://www.instagram.com/__stha.suyog7/",
  },
  {
    num: "02",
    category: "frontend",
    title: "Todo List",
    desc: "This task is a to-do list where we may add our to-do, ongoing, and completed activities and choose the corresponding tech task. We can enumerate other tasks that we've finished.",
    stack: [{ name: "React" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "https://suyog-todo-list.vercel.app/",
    github: "https://www.instagram.com/__stha.suyog7/",
  },
  {
    num: "03",
    category: "frontend",
    title: "Tic-Tac-Toe",
    desc: "In this small-scale project, I've used basic React. Hooks allowed me to add some logic to my code. I have included some exciting UI/UX design for players.",
    stack: [{ name: "React JS" }, { name: "SCSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://tictactoe-suyog.netlify.app/",
    github: "https://www.instagram.com/__stha.suyog7/",
  },
  {
    num: "04",
    category: "mern stack",
    title: "Shopwave",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde nostrum! Vel in eveniet, error repellendus tenetur blanditiis deserunt officia, a explicabo quod, pariatur perspiciatis corporis. Fugiat libero autem suscipit!",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Express JS" },
      { name: "Mongodb" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://www.instagram.com/__stha.suyog7/",
  },
  {
    num: "05",
    category: "full stack",
    title: "Shopify",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde nostrum! Vel in eveniet, error repellendus tenetur blanditiis deserunt officia, a explicabo quod, pariatur perspiciatis corporis. Fugiat libero autem suscipit!",
    stack: [
      { name: "Next JS" },
      { name: "Tailwind CSS" },
      { name: "Typescript" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://www.instagram.com/__stha.suyog7/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.3,
                ease: "easeIn",
              },
            }}
            className='flex flex-col gap-[30px] h-[50%] w-full xl:w-[50%] xl:h-[460px]  xl:justify-between order-2 xl:order-none'>
            {/* num */}
            <div className='text-6xl leading-none font-extrabold text-transparent text-outline'>
              {project.num}
            </div>

            <div className='flex flex-col xl:flex-row xl:justify-start gap-6'>
              {/* title */}
              <h2 className='text-[50px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>

              {/* */}
              <p className='text-[20px] font-semibold leading-none mt-5 text-accent group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </p>
            </div>

            {/* description */}
            <p className='text-white/60'>{project.desc}</p>

            {/* stack */}
            <ul className='flex gap-4'>
              {project.stack.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>

            {/* border */}
            <div className='border border-white/20'></div>

            {/* buttons */}
            <div className='flex items-center gap-4'>
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group transition-all duration-500 hover:rotate-45'>
                      <BsArrowUpRight className='text-white text-2xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-2xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.3,
                ease: "easeIn",
              },
            }}
            className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className='xl:h-[500px] mb-12'>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className='w-full'>
                    <div className='h-[450px] relative group flex justify-center items-center'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                      {/* image */}
                      <div className='relative w-full h-full rounded-md'>
                        <Image
                          src={project.image}
                          layout='fill'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <SliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-white font-extrabold text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
