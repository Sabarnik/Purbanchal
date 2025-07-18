import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-[#0033a0] text-white pt-12 font-sans"
    >
      {/* Main footer content with max-width constraint */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          variants={fadeIn("up", 0.3)}
          className="grid md:grid-cols-4 gap-8 text-sm"
        >
          {/* Company Info */}
          <motion.div variants={fadeIn("right", 0.4)}>
            <div className="flex items-center mb-4">
              <img 
                src="/purbanchal/logo1.png" 
                alt="Purbanchal Cement Logo" 
                className="h-10 brightness-125"
              />
              <span className="ml-2 font-bold text-lg">PURBANCHAL CEMENT LTD.</span>
            </div>
            <motion.p 
              variants={fadeIn("up", 0.5)}
              className="text-white/90 mb-6 leading-relaxed"
            >
              We deliver the best quality Cement contributing to the growth and development of infrastructure in India.
            </motion.p>
            <motion.div 
              variants={fadeIn("up", 0.6)}
              className="flex space-x-3"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="bg-orange-500 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaLinkedinIn className="text-white text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="bg-orange-500 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaInstagram className="text-white text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#" 
                className="bg-orange-500 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaFacebookF className="text-white text-sm" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeIn("up", 0.5)}>
            <motion.h3 
              variants={textVariant(0.2)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Products
            </motion.h3>
            <motion.ul 
              variants={fadeIn("up", 0.6)}
              className="space-y-2"
            >
              <motion.li variants={fadeIn("up", 0.7)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Surya PPC
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 0.8)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Surya OPC
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 0.9)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Surya Concrete
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.0)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Fresh Bulk Cement
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Our Businesses / Quick Links */}
          <motion.div variants={fadeIn("up", 0.6)}>
            <motion.h3 
              variants={textVariant(0.3)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Our Businesses
            </motion.h3>
            <motion.ul 
              variants={fadeIn("up", 0.7)}
              className="space-y-2 mb-6"
            >
              <motion.li variants={fadeIn("up", 0.8)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Maithan Steels
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 0.9)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Maithan Alloy
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.0)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Maithan Ceramic
                </motion.a>
              </motion.li>
            </motion.ul>
            <motion.h3 
              variants={textVariant(0.4)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Quick Link
            </motion.h3>
            <motion.ul 
              variants={fadeIn("up", 0.8)}
              className="space-y-2"
            >
              <motion.li variants={fadeIn("up", 0.9)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Contact Us
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.0)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Customer Care
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.1)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Career
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.2)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ FAQ's
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.3)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Disclaimer
                </motion.a>
              </motion.li>
              <motion.li variants={fadeIn("up", 1.4)}>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#" 
                  className="hover:underline hover:text-orange-300 transition-colors flex items-center"
                >
                  ‹ Privacy Policies
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn("left", 0.4)}>
            <motion.h3 
              variants={textVariant(0.5)}
              className="font-semibold text-lg mb-4 border-b border-white/20 pb-2"
            >
              Office
            </motion.h3>
            <motion.p 
              variants={fadeIn("up", 0.6)}
              className="mb-3 text-white/90"
            >
              Megha Plaza, 2nd Floor, Basista Chariali,<br /> Beltola, Guwahati 781029 Assam
            </motion.p>
            <motion.h3 
              variants={textVariant(0.6)}
              className="font-semibold text-lg mb-2 mt-6 border-b border-white/20 pb-2"
            >
              Email
            </motion.h3>
            <motion.p 
              variants={fadeIn("up", 0.7)}
              className="mb-3 text-white/90"
            >
              customercare@purbanchalcement.com
            </motion.p>
            <motion.h3 
              variants={textVariant(0.7)}
              className="font-semibold text-lg mb-2 mt-6 border-b border-white/20 pb-2"
            >
              Contacts Us
            </motion.h3>
            <motion.p 
              variants={fadeIn("up", 0.8)}
              className="text-white/90"
            >
              +91 12345 67890
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar - now outside the max-width container */}
      <motion.div 
        variants={fadeIn("up", 0.9)}
        className="bg-orange-500 text-white text-center py-3 mt-8 w-full"
      >
        <div className="max-w-7xl mx-auto px-4">
          ©Copyright {new Date().getFullYear()} All rights reserved. Purbanchal Cement LTD.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;