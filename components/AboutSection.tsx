import React from 'react'
import Image from 'next/image'

const skills = [
    {skill: "Java"},
    {skill: "Rust"},
    {skill: "Golang"},
    {skill: "Javascript"},
    {skill: "Github"},
    {skill: "React"},
    {skill: "Next.js"},
    {skill: "Docker"},
    {skill: "Spring Boot"},
    {skill: "SQL"},
    {skill: "Kafka"},
]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded' />
                </h1>
            <div className='flex flex-col space-y-10 items-stretch align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                        <p>
                            {" "}
                            Hi,my name is Kelvin and I am a {" "}
                            <span className='font-bold'>{"highly ambitious"}</span>,
                            <span className='font-bold'>{" self-motivated"}</span>, and 
                            <span className='font-bold'>{" passionate"}</span>, software engineer
                            currently based in Jakarta, Indonesia.
                        </p>
                        <br/>
                        <p>
                            I graduated from Bina Nusantara University or Binus University in 2022 
                            with a Bachelor of Science degree in Computer Science.
                        </p>
                        <br/>
                        <p>
                            Previously i have worked for Erajaya where i have been working as an IT programmer
                            where i primarily worked on the development of the databases and the streaming of datas.
                        </p>
                        <br/>
                        <p>
                            I have a passion for technology and a desire to challenge myself and be able to solve
                            those challenges with my technical skills as efficiently as possible. I am also open to
                            new opportunities.
                        </p>    
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                        {skills.map((item, idx) => {
                            return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>
                                {item.skill}
                                </p>
                        })}
                    </div>
                        {/* <Image className='hidden md:block md:relative md:bottom-0 md:left-32 md:z-0'
                        src='/about-me.png' alt='' width={325} height={325} /> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection