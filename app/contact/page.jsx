"use client";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+977-9767240882",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "suyogshrestha94@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Ganeshchowk 7, Buddhanilkantha",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='h-[80vh] pb-6'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row gap-[30px] h-full'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none flex flex-col h-full'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl flex-grow overflow-auto'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>

              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='firstname'
                  placeholder='First Name'
                />
                <Input
                  type='lastname'
                  placeholder='Last Name'
                />
                <Input
                  type='email'
                  placeholder='Email address'
                />
                <Input
                  type='phone'
                  placeholder='Phone number'
                />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='uiux'>UI/UX Design</SelectItem>
                    <SelectItem value='webdev'>Web Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className='h-[200px]'
                placeholder='Enter your message here...'
              />

              {/* button */}
              <Button className="py-2 max-w-40" size="md">Send Message</Button>
            </form>
          </div>

          {/* info */}
          <div
            className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
