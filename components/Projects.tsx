'use client'
import {gsap , useGSAP , ScrollTrigger} from '@/lib/gsap-utils'
import { projectItems } from '@/data/data'
import { useRef } from 'react'
import Image from 'next/image'
import Button from './Button'

export default function Projects() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(()=>{
        const panels = gsap.utils.toArray<HTMLDivElement>('.project-panel');
        panels.forEach((panel , i)=>{
            ScrollTrigger.create({
                trigger: panel,
                start : 'top top',
                pin : true,
                pinSpacing : false
            })
        })
    },{
        scope : containerRef
    })
  return <section ref={containerRef}className='mb-[100vh]'>
    <div>
        {/* Title */}
        <div className="project-panel min-h-svh flex flex-col items-center justify-center space-y-1 container">
            <h2 className="text-5xl md:text-7xl">My Recent Projects</h2>
            <p>Scroll to Explore</p>
        </div>

        {/* Wrapper */}
        <div className="">
            {projectItems.map((item)=>(
                <div key={item.id} className=' project-panel h-screen w-full text-white p-10 sm:px-10 lg:px-24 grid gap-9 lg:grid-cols-2
                lg:items-center mx-auto'
                style={{
                    background : item.backgroundClr,

                }}>
                    {/* Content  */}
                    <div className="space-y-4">
                        <span className="size-10 border rounded-full inline-flex items-center justify-center text-lg">
                            {item.id}
                        </span>
                        <p>{item.text}</p>
                        <h3 className='text-4xl sm:text-5xl lg:text-9xl'>{item.title}</h3>
                        <Button label='Live Demo '/>
                    </div>
                    {/* Image */}
                    <div className="flex items-center justify-center mx-auto ">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
}
