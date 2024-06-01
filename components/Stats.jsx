"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 12,
    text: "Technologies maastere",
  },
  {
    num: 100,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className='pt-10 xl:pt-10 '>
      <div className='container mx-auto'>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.2,
              ease: "easeIn",
            },
          }}
          className='flex flex-wrap gap-4 max-w-[80vw] xl:max-w-none'>
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex gap-2 items-center justify-center xl:justify-start'>
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className='text-4xl xl:text-5xl font-extrabold'
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}>
                  {stat.text}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
