"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from "react-scroll/modules"

const HeroSection = () => {
  return (
    <section id="home">
        <div className='flex flex-col text-center items-center justify-center my-10 py-16'>
            <div>
                <Image className="rounded-full shadow-2xl" src="/photo.jpg" alt="" width={300} height={300}/>
            </div>
            <div>
                <h1 className="font-bold text-4xl mt-6">Hi, i&#39;m Kelvin</h1>
                <p className="text-lg mt-4 mb-6">
                    I&#39;m a {" "}
                    <span className="font-semibold text-blue-600">
                        Software Engineer {" "}
                    </span> 
                    currently based in Jakarta. Striving to be better.
                </p>
                <Link 
                    to="projects" 
                    smooth={true} 
                    className="text-xl font-semibold border-b-2 border-blue-600"
                    activeClass='active'
                    spy={true}
                    offset={-100}
                    duration={500}
                    >
                        Projects
                    </Link>
            </div>
        </div>
        </section>
  )
}

export default HeroSection