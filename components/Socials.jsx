"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/SuyStha7",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/suyog-shrestha-843b95248/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/__stha.suyog7/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
