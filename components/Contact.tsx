'use client'
import { Copy } from 'lucide-react'
import { RiGithubFill, RiLinkedinBoxFill, RiTelegramFill } from '@remixicon/react'
import { useState } from 'react'

export default function Contact() {
    const [isCopied , setIsCopied] = useState<boolean>(false);
    const email = 'sharmanabin.0910@gmail.com'

    const handleCopy = ()=>{
        navigator.clipboard.writeText(email);
        setIsCopied(true)
        setTimeout(()=>{
            setIsCopied(false);
        },2000)
    }
  return <section className='py-20 border-t border-stone-300'>
    <div className="container flex flex-col items-center justify-between ">
        <h2 className=' text-4xl lg:text-8xl'>get in touch</h2>
        {/* Wrapper  */}
        <div className="flex flex-col items-center gap-3">
            <button className='border max-w-max flex items-center px-4 py-2
            gap-1.5 bg-white' onClick={handleCopy}>
                <span>
                    <Copy/>
                </span>
                <h3 className='text-2xl md:text-4xl '>{isCopied ?  'Copied!' : 'Copy Email'}</h3>
            </button>
            {/* Social Links */}
            <div className="flex items-center gap-2">
                {[RiLinkedinBoxFill , RiGithubFill , RiTelegramFill].map((
                    (Icon , index)=>(
                        <a href="#" target='_blank' className='hover:scale-105 transition-transform' key={index}>
                            <Icon size={30}/>
                        </a>
                    )
                ))}
            </div>
        </div>

    </div>
  </section>
}
