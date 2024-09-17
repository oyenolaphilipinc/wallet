'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <motion.div variants={itemVariants} className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-semibold pb-4 leading-tight text-indigo-800">
            Wallet Syncing is the process or operation of merging.
          </h1>
          <p className="text-md font-medium text-gray-700 mb-8">
            Dapp Walletnode is a decentralized protocol. Dconnect creates an innovative open-source software ecosystem that is both secure and resilient, allowing developers to create new online tools.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2">
          <Image src="/hero-img.png" width={600} height={600} alt="Hero img" className="w-full h-auto" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
      >
        {[
          "Manual Revoke",
          "Wallet Address Cache",
          "Contract withdrawal",
          "Contract Validation",
          "Wallet Scan",
          "Wallet Glitch"
        ].map((text, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link
              href="/wallet"
              prefetch={false}
              className={`block w-full md:w-9/12 shadow-lg py-2 px-4 rounded-md text-center transition-colors duration-300 ${
                index === 0
                  ? "bg-blue-800 text-white hover:bg-blue-700"
                  : "bg-blue-800 text-white hover:bg-blue-700"
              }`}
            >
              {text}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}