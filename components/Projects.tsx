import React from 'react'
import { projectItems } from '@/data/data'
import Image from 'next/image'
import Button from './Button'

export default function Projects() {
  return <section className='mb-[100vh]'>
    <div>
        {/* Title */}
        <div className="min-h-svh flex flex-col items-center justify-center space-y-1 container">
            <h2 className="text-5xl md:text-7xl">My Recent Projects</h2>
            <p>Scroll to Explore</p>
        </div>

        {/* Wrapper */}
        <div className="">
            {projectItems.map((item)=>(
                <div key={item.id} className='h-screen w-full text-white p-10 sm:px-10 lg:px-24 grid gap-9 lg:grid-cols-2
                lg:items-center mx-auto'>
                    {/* Content  */}
                    <div className="">
                        <span className="">
                            {item.id}
                        </span>
                        <p>{item.text}</p>
                        <h3 className=''>{item.title}</h3>
                        <Button label='Live Demo '/>
                    </div>
                    {/* Image */}
                    <div className="">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={500}
                            height={300}
                            className=""
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
}
