"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    href: "",
  },
  {
    num: "03",
    title: "Deployment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    href: "",
  },
  {
    num: "04",
    title: "Database Management",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto max-w-screen-lg h-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.3, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 '>
                    <BsArrowDownRight className='text-primary text-2xl' />
                  </Link>
                </div>

                {/* title */}
                <h2 className='text-[36px] font-cold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>

                {/* description */}
                <p className='text-white/60'>{service.desc}</p>

                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
