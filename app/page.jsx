"use client";

// components
import Socials from "../components/Socials";
import Photo from "../components/Photo";

import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-0'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <h1 className='h1 mb-6'>
              Hello I'm <br />{" "}
              <span className='text-accent'>Suyog Shrestha</span>
            </h1>
            <span className='text-xl mb-6'>MERN Stack Developer</span>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant web developing experiences & I am
              proficient in various programming languages.
            </p>

            {/* btn */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'>
                <Link
                  href='/assets/resume/CV.pdf'
                  passHref>
                  Download CV
                </Link>
                <FiDownload className='text-xl' />
              </Button>

              {/* socials */}
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles='flex gap-6'
                  iconStyles='w-[50px] h-[50px] border border-accent rounded-full flex justify-center items-center text-xl text-white text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            className='border-1 xl:order-none mb-2 xl:mb-0'>
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
