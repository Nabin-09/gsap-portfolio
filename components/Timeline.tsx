import React from 'react'
import { timelineItems } from '@/data/data'
import { Dot } from 'lucide-react'
export default function Timeline() {
  return <section className='py-20 sm:py-24 lg:py-32'>
    <div className="container">
        {/* Title */}
        <div className="">
            <h2 className="text-3xl text-center sm:text-4xl lg:text-6xl ">Academic Journey</h2>
            <p className="text-stone-600 mt-2 text-center">A timeline of my Roles , Projects and Growth</p>
        </div>
        {/* Wrapper  */}
        <ul className="relative mx-auto max-w-3xl mt-20 lg:mt-24">
            {timelineItems.map(item =>(
                <li key={item.id} className='grid lg:grid-cols-2 group'>
                    {/* content */}
                    <div className="group-odd:order-1 lg:group-even:text-right p-5 ">
                        <div className="inline-flex items-center">
                            <span>{item.category}</span>
                            <span>
                                <Dot/>
                            </span>
                            <span>{item.date}</span>
                        </div>
                        <h3 className='text-2xl md:text-3xl font-bold mt-2'>{item.title}</h3>
                        <p className='text-neutral-600'>{item.description}</p>
                    </div>
                    {/* Empty Div */}
                    <div className="hidden lg:block h36 w-full"></div>
                </li>
            ))}
            {/* center divider */}
            <div className="h-full w-0.5  bg-black absolute top-0 left-0 lg:left-1/2 -tranlate-x-1/2">
                <span className=''>
                    {[1,2,3,4,5].map((dot)=>(
                        <span key={dot} className='size-3.5 bg-black rounded-full 
                        absolute left-1/2 -translate-x-1/2 nth-[1]:top-14 nth-[2]:top-54 sm:nth-[2]:top-48 lg:nth-[2]:top-54
                        nth-[3]:top-93 sm:nth-[3]:top-82.5 lg:nth-[3]:top-93  nth-[4]:top-132.5 
                        sm:nth-[4]:top-115 lg:nth-[4]:top-132.5  nth-[5]:top-171.75 sm:nth-[5]:top-147.5 lg:nth-[5]:top-171.75'/>
                    ))}
                </span>
            </div>
        </ul>
    </div>
  </section>
}
