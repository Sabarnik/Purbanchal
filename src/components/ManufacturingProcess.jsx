/* global __IMAGE_BASE_PATH__ */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    title: "Quarry",
    image: `${__IMAGE_BASE_PATH__}/Quarry.png`,
  },
  {
    title: "Crusher",
    image: `${__IMAGE_BASE_PATH__}/Crusher.png`,
  },
  {
    title: "Raw Mill",
    image: `${__IMAGE_BASE_PATH__}/Rawmil to prehitting.png`,
  },
  {
    title: "Preheating & Rotary Kiln",
    image: `${__IMAGE_BASE_PATH__}/Group 111.png`,
  },
  {
    title: "Klinker Storage & Finish Grinding",
    image: `${__IMAGE_BASE_PATH__}/kilner storage to finish griding.png`,
  },
  {
    title: "Dispatch",
    image: `${__IMAGE_BASE_PATH__}/Dispatch.png`,
  },
];

const ManufacturingProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 md:py-16 bg-[#f6f7f9]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-base md:text-2xl text-orange-500 font-semibold mb-2 md:mb-3"
            variants={itemVariants}
          >
            ← From Raw To Rock Solid →
          </motion.h2>
          <motion.p variants={itemVariants}>
            <span className="text-gray-700 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed inline-block">
              Starting with premium raw materials and progressing through
              precise blending and testing, our manufacturing guarantees cement
              built for strength and trust.
            </span>
          </motion.p>
        </motion.div>

        {/* Process Container */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[600px] md:min-w-full">
            {/* Icons */}
            <motion.div
              className="flex justify-between items-center"
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center w-20 md:w-28"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2 md:mb-3"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-0.5 h-4 md:h-5 bg-black"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    />
                    <motion.div
                      className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 bg-black mt-0.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Titles + Arrows */}
            <motion.div
              className="flex justify-between items-center mt-4 md:mt-6 px-2"
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              {processSteps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.p
                    className="font-semibold text-xs md:text-sm text-gray-800 text-center w-20 md:w-28 leading-tight"
                    variants={titleVariants}
                    whileHover={{ color: "#F97316" }}
                  >
                    {step.title.includes("&") ? (
                      <>
                        {step.title.split("&")[0].trim()} &{" "}
                        {step.title.split("&")[1].trim()}
                      </>
                    ) : (
                      step.title
                    )}
                  </motion.p>

                  {index !== processSteps.length - 1 && (
                    <motion.div
                      className="flex justify-center items-center w-4 md:w-8 mx-1"
                      variants={arrowVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <svg
                        width="100%"
                        height="10"
                        viewBox="0 0 40 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <motion.line
                          x1="0"
                          y1="5"
                          x2="35"
                          y2="5"
                          stroke="#F97316"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        />
                        <motion.polygon
                          points="35,0 40,5 35,10"
                          fill="#F97316"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                        />
                      </svg>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;