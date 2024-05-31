"use client"

import { motion } from "framer-motion"
import React, {useState} from "react"

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import { BsArrowDownRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde nostrum! Vel in eveniet, error repellendus tenetur blanditiis deserunt officia, a explicabo quod, pariatur perspiciatis corporis. Fugiat libero autem suscipit!",
    stack: [
      {name: "HTML 5"},
      {name: "CSS 3"},
      {name: "Javascript"},
    ],
    image: '/assets/work/thumb1.png',
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "mernstack",
    title: "project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde nostrum! Vel in eveniet, error repellendus tenetur blanditiis deserunt officia, a explicabo quod, pariatur perspiciatis corporis. Fugiat libero autem suscipit!",
    stack: [
      {name: "React JS"},
      {name: "Tailwind CSS"},
      {name: "Node JS"},
      {name: "Mongodb"},
      {name: "Express JS"},
    ],
    image: '/assets/work/thumb1.png',
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, unde nostrum! Vel in eveniet, error repellendus tenetur blanditiis deserunt officia, a explicabo quod, pariatur perspiciatis corporis. Fugiat libero autem suscipit!",
    stack: [
      {name: "Next JS"},
      {name: "Tailwind CSS"},
      {name: "Typescript"},
    ],
    image: '/assets/work/thumb1.png',
    live: "",
    github: ""
  },
  
]

const Work = () => {
  return (
    <div>Work</div>
  )
}

export default Work