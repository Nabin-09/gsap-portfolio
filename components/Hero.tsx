'use client'
import {gsap , useGSAP , SplitText} from '@/lib/gsap-utils'
import { RiLinkedinBoxFill , RiGithubFill , RiTelegramFill, RiArrowDownSLine } from '@remixicon/react'
import { useRef } from 'react'


export default function Hero() {
  const container = useRef(null);
  useGSAP(()=>{
    const textSplit = SplitText.create('.text' , {
        type : 'words , lines',
        linesClass : 'text-line'
    })

    const tl = gsap.timeline({
        scrollTrigger : {
            trigger : '.hero-wrapper',
            start : 'top center'
        }
    })
    tl.from(textSplit.words , {
        yPercent : 100,
        autoAlpha : 0 , 
        duration : 1,
        stagger : 0.1,
        ease : 'power2.inOut'
    })
  },{})
  return (
    <section className='relative'>
        <div className="container flex items-center justify-center flex-col min-h-svh">
        {/* Wrapper */}
        <div className="text-center my-auto">
            <p className='uppercase text'>Hi, I am Nabin Sharma</p>
            <h1 className='text text-4xl sm:text-5xl lg:text-9xl mt-1.5'>Full-Stack Developer</h1>
            <h2 className='text text-4xl sm:text-5xl lg:text-9xl mt-1.5'>Competitive Programmer</h2>
        </div>
        {/*Social Links*/}
        <div className="absolute bottom-32 left-8 grid gap-2">{[
            RiLinkedinBoxFill,
            RiGithubFill,
            RiTelegramFill
        ].map((Icon , idx)=>(
            <a href="#" className='hover:scale-105 transition-transform' key={idx} target='_blank'>
                <Icon size={30}/>
            </a>
        ))}</div>
        {/* Scroll Down */}
        <div className=" flex items-center gap-2 mb-5">
            <span className="animate-bounce">
                <RiArrowDownSLine/>
            </span>
            <p className='text-lg uppercase'>Scroll Down</p>
        </div>
        </div>
    </section>
  )
}
