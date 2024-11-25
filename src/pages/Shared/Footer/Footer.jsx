/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer  text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <a
          className="text-xl"
          style={{ fontFamily: "Atma, sans-serif", fontWeight: 400 }}
        >
          বাংলাGPT
        </a>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://www.facebook.com/oceancapp">
                    <a href="https://www.facebook.com/oceancapp">
                      <FaFacebookF href="https://www.facebook.com/oceancapp" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://www.facebook.com/oceancapp">
                    <a href="https://www.facebook.com/oceancapp">
                      <FaInstagram href="https://www.facebook.com/oceancapp" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://www.linkedin.com/company/oceancapp/">
                    <a href="https://www.linkedin.com/company/oceancapp/">
                      <FaLinkedinIn href="https://www.linkedin.com/company/oceancapp/" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://x.com/ocean_capp">
                    <a href="https://x.com/ocean_capp">
                      <BsTwitterX href="https://x.com/ocean_capp" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://wa.link/8bkntc">
                    <a href="https://wa.link/8bkntc">
                      <FaWhatsapp href="https://wa.link/8bkntc" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaDiscord size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaThreads size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaYoutube size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="mailto:oceancapp@gmail.com">
                    <a href="mailto:oceancapp@gmail.com">
                      <BiLogoGmail href="mailto:oceancapp@gmail.com" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
      </nav>
    </footer>
  );
};

export default Footer;