'use client'
import { gsap, useGSAP, SplitText } from '@/lib/gsap-utils'
import Button from './Button'
import { useRef } from 'react'
import { aboutStatusItmes } from '@/data/data'

export default function About() {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const textSplit = SplitText.create('.text', {
            type: 'words , lines',
            linesClass: 'text-line'
        })
        const textSplitTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-wrapper',
                start: 'top 50%'
            }
        })
        textSplitTl.from(textSplit.words, {
            yPercent: 100,
            duration: 1,
            stagger: 0.02,
            ease: 'power2.inout'
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: 1
            }
        })
        tl.to(wrapperRef.current, {
            maxWidth: '100%',
            duration: 1,
            ease: 'power3.out'
        })
    }, {
        scope: containerRef
    })

    return <section ref={containerRef} className='bg-stone-900  min-h-svh pt-14'>
        <div className='text-center space-y-5 sm:space-y-7'>
            {/* Wrapper */}
            <div ref={wrapperRef} className=" about-wrapper bg-stone-100 mx-auto max-w-[90%] sm:max-w-[70%] py-20 h-dvh rounded-t-[100px] px-8 space-y-5">
                <h2 className='text text-4xl sm:text-5xl lg:text-9xl'>About Me</h2>

                <p className='text text-base sm:text-lg lg:text-3xl max-w-4xl mx-auto'>
                    I am Nabin Sharma, a full stack developer and a competitive programmer,
                    I build scalable, maintainable web applications. I also love to study Algorithms (it is not dead).
                </p>

                <p className='text text-sm lg:text-2xl max-w-3xl mx-auto'>
                    I specialise in developing using the JavaScript Ecosystem, using NodeJs (as my runtime),
                    ExpressJs and ReactJs as my primary frameworks. I have worked on SQL as well as
                    NoSQL databases. I aim to create high-quality and efficient software that could make
                    our lives easier.
                </p>

                {/* Btn */}
                <Button label='View Projects' />
                {/* Status */}

                <div className="grid gap-4 sm:grid-cols-2 mt-10 max-w-4xl mx-auto">
                    {aboutStatusItmes.map(item => (
                        <div key={item.id} className='border border-stone-300 p-4'>
                            <span className=' text text-xl sm:text-2xl md:text-3xl font-bebasNeue'>
                                {item.value}
                            </span>
                            <p className='text text-stone-600'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}
