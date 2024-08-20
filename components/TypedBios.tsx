import React, { useEffect, useRef } from 'react'
import Typed, { TypedOptions } from 'typed.js'

// import Twemoji from '@/components/Twemoji'

const textArray = [
  'A fullstack developer with a passion for technology 🚀',
  'Enjoy playing table tennis ️🏓️',
  'Eager for learning and be creative in life',
]

const TypedBios = () => {
  const typedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typedRef.current) {
      const options: TypedOptions = {
        strings: textArray,
        typeSpeed: 30,
        backSpeed: 10,
        loop: true,
        backDelay: 1000,
      }

      const typed = new Typed(typedRef.current, options)

      return () => {
        // Clean up Typed instance on component unmount
        typed.destroy()
      }
    }
  }, [])

  return <div className="inline" ref={typedRef}></div>
}

export default TypedBios
