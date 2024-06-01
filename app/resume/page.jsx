"use client";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiJavascript,
  SiBootstrap,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaSass } from "react-icons/fa6";

const about = {
  title: "About me",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Suyog Shrestha",
    },
    {
      fieldName: "Phone",
      fieldValue: "+977-9767240882",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nepali",
    },
    {
      fieldName: "Address",
      fieldValue: "Ganeshchowk 7, Kathmandu",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "suyogshrestha97@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Spyders Lab Pvt. Ltd",
      position: "Frontend Developer",
      duration: "Sept 2022 - Dec 2022",
    },
    {
      company: "Open Source Ascol Circle",
      position: "Executive Member",
      duration: "Aug 2022 - Present",
    },
    {
      company: "Leo Club of Kathmandu Nepalaya",
      position: "General Member",
      duration: "Aug 2023 - Present",
    },
    {
      company: "Code for Change",
      position: "General Member",
      duration: "Aug 2022 - Aug 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      institution: "Dursikshya",
      degree: "MERN stack development",
      duration: "Nov 2023 - Feb 2024",
    },
    {
      institution: "Amrit Science Campus",
      degree: "Bsc.CSIT",
      duration: "June 2021 - Present",
    },
    {
      institution: "National School of Sciences",
      degree: "+2 Science",
      duration: "May 2019 - Apr 2021",
    },
    {
      institution: "BEMSS",
      degree: "SEE",
      duration: "Feb 2005 - Dec 2018",
    },
  ],
};

const skills = {
  title: "My skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      icon: <SiHtml5 className='text-orange-500' />,
      name: "HTML 5",
    },
    {
      icon: <SiCss3 className='text-blue-500' />,
      name: "CSS 3",
    },
    {
      icon: <SiJavascript className='text-yellow-500' />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript className='text-blue-600' />,
      name: "Typescript",
    },
    {
      icon: <FaSass className='text-pink-600' />,
      name: "SASS",
    },
    {
      icon: <SiBootstrap className='text-purple-600' />,
      name: "Bootstrap 5",
    },
    {
      icon: <SiTailwindcss className='text-teal-500' />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiReact className='text-sky-500' />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs className='text-white' />,
      name: "Next JS",
    },
    {
      icon: <SiNodedotjs className='text-green-500' />,
      name: "Node JS",
    },
    {
      icon: <SiMongodb className='text-green-400' />,
      name: "Mongodb",
    },
    {
      icon: <SiExpress className='text-yellow-400' />,
      name: "Express JS",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";
import Stats from "../../components/Stats";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.3, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className='container mx-auto'>
        <Tabs
          defaultValue='about'
          className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6 xl:mt-12'>
            <TabsTrigger value='about'>About me</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* about me */}
            <div>
              <TabsContent
                value='about'
                className='w-full text-center xl:text-left'>
                <div className='flex flex-col gap-[30px]'>
                  <motion.div
                    initial={{ y: -300, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 1,
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    }}>
                    <h1 className='text-4xl font-bold'>{about.title}</h1>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-2'>
                      {about.desc}
                    </p>
                  </motion.div>

                  <ScrollArea>
                    <motion.ul
                      initial={{ y: 300, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: 1,
                          duration: 0.3,
                          ease: "easeIn",
                        },
                      }}
                      className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0'>
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className='flex items-center justify-center xl:justify-start gap-4'>
                            <span className='text-white/60 text-[18px]'>
                              {" "}
                              {item.fieldName}
                            </span>
                            <span className='text-[16px]'>
                              {" "}
                              {item.fieldValue}
                            </span>
                          </li>
                        );
                      })}
                    </motion.ul>
                  </ScrollArea>
                </div>
                <Stats />
              </TabsContent>
            </div>

            {/* education */}
            <TabsContent
              value='education'
              className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <motion.div
                  initial={{ y: -300, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 1,
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}>
                  <h1 className='text-4xl font-bold'>{education.title}</h1>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-2'>
                    {education.desc}
                  </p>
                </motion.div>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
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
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'> {item.duration}</span>
                          <h3 className='text-xl max-h-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent
              value='skills'
              className='w-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <motion.div
                    initial={{ y: -300, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        delay: 1,
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    }}>
                    <h1 className='text-4xl font-bold'>{skills.title}</h1>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-2'>
                      {skills.desc}
                    </p>
                  </motion.div>
                </div>
              </div>

              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] mt-8'>
                {skills.items.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <motion.TooltipTrigger
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              transition: {
                                delay: 1,
                                duration: 0.2,
                                ease: "easeInOut",
                              },
                            }}
                            className='w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-5xl group-hover:text-accent transition-all duration-500'>
                              {skill.icon}
                            </div>
                          </motion.TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>

            {/* experience */}
            <TabsContent
              value='experience'
              className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <motion.div
                  initial={{ y: -300, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 1,
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}>
                  <h1 className='text-4xl font-bold'>{experience.title}</h1>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-2'>
                    {experience.desc}
                  </p>
                </motion.div>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <motion.li
                          key={index}
                          initial={{ x: -300, opacity: 0 }}
                          animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                              delay: 1,
                              duration: 0.2,
                              ease: "easeIn",
                            },
                          }}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'> {item.duration}</span>
                          <h3 className='text-xl max-h-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </motion.li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
