'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Go Ethereum', logo: '/client-5.png?height=80&width=80' },
  { name: 'Citrus', logo: '/client-6.png?height=80&width=80' },
  { name: 'Blox Staking', logo: '/client7.webp?height=80&width=80' },
  { name: 'Allnodes', logo: '/client-8.png?height=80&width=80' },
  { name: 'Go Ethereum', logo: '/client-9.webp?height=80&width=80' },
  { name: 'Go Ethereum', logo: '/client-5.png?height=80&width=80' },
  { name: 'Citrus', logo: '/client-6.png?height=80&width=80' },
  { name: 'Allnodes', logo: '/client-8.png?height=80&width=80' }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
          PARTNERS WHO BELIEVE IN OUR PROJECT
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-5xl">
          Wallet Synching allows developers to create new online tools, many of which have piqued the interest of global business markets.
        </p>
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center gap-16 space-x-8">
            {partners.slice(currentIndex, currentIndex + 4).map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {partners.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}