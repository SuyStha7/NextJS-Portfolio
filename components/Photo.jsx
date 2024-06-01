import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className='w-full h-full relative flex justify-center items-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.3, ease: "easeIn" },
        }}
        className='relative'>

        {/* Circle SVG */}
        <motion.svg
          className='w-[300px] xl:w-[420px] h-[300px] xl:h-[420px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
          style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}>
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#01b0e4'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.3, ease: "easeInOut" },
          }}
          className='w-[300px] xl:w-[420px] h-[300px] xl:h-[420px] rounded-full overflow-hidden'
          style={{ clipPath: "circle(50% at 50% 50%)" }}>
          <Image
            src='/assets/photo1.png'
            priority
            quality={100}
            layout='fill'
            objectFit='cover'
            alt='Photo'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
