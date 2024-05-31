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
} from "react-icons/si";

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
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nepali",
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
      company: "Syders Lab Pvt. Ltd",
      position: "Frontend Developer",
      duration: "Sept 2022 - Dec 2022",
    },
    {
      company: "Open Source Ascol Circle",
      position: "Executive Member",
      duration: "Aug 2022 - Feb-2023",
    },
    {
      company: "Leo Club of Kathmandu Nepalaya",
      position: "General Member",
      duration: "Aug 2023 - Present",
    },
    {
      company: "Syders Lab Pvt. Ltd",
      position: "Frontend Developer",
      duration: "Sept 2022 - Dec 2022",
    },
    {
      company: "Open Source Ascol Circle",
      position: "Executive Member",
      duration: "Aug 2022 - Feb-2023",
    },
    {
      company: "Leo Club of Kathmandu Nepalaya",
      position: "General Member",
      duration: "Aug 2023 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
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
      institution: "Dursikshya",
      degree: "MERN stack development",
      duration: "Nov 2023 - Feb 2024",
    },
  ],
};

const skills = {
  title: "My skills",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      icon: <SiHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <SiCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript/>,
      name: "Typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap 5",
    },
    {
      icon: <SiReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node JS",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
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

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.3, ease: "easeIn" },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <Tabs
          defaultValue='about'
          className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='about'>About me</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            {/* about me */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h1 className='text-4xl font-bold'>{about.title}</h1>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.desc}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0" >
                    {about.info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60"> {item.fieldName}</span>
                          <span className="text-xl"> {item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent
              value='education'
              className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h1 className='text-4xl font-bold'>{education.title}</h1>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.desc}
                </p>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-6'>
                          <span className='text-accent'> {item.duration}</span>
                          <h3 className='text-xl max-h-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
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
                  <h1 className='text-4xl font-bold'>{skills.title}</h1>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.desc}
                  </p>
                </div>
              </div>

              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] mt-8'>
                {skills.items.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-500'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
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
                <h1 className='text-4xl font-bold'>{experience.title}</h1>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.desc}
                </p>

                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'> {item.duration}</span>
                          <h3 className='text-xl max-h-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-2'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
