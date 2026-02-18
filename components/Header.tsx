'use client'
import { useGSAP  , gsap } from '@/lib/gsap-utils'
import Link from 'next/link'
import {Menu , X } from 'lucide-react'
import { useState , useRef  } from 'react'
import { navItems } from '@/data/data'
import Button from './Button'


const Header = () => {
    const [isOpen , setIsOpen] = useState<boolean>(false);
    const MenuRef= useRef<HTMLUListElement | null>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(()=>{
        if(!MenuRef.current) return ;
        tlRef.current = gsap.timeline({paused : true})
        .fromTo(MenuRef.current , 
            {
                y : -20 ,
                autoAlpha : 0,
            } ,
             {
                y : 0,
                autoAlpha : 1 ,
                duration : 0.4 ,
                ease : 'power3.out'
             }).from('.link' , {
                y : 20 ,
                opacity : 0 ,
                stagger : 0.08,
                duration : 0.4,
                ease : 'power3.out'
             },
            '-=0.2')
    })

    const handleClick = ()=>{
        setIsOpen((prev)=>{
            const next = !prev
            if(next){
                tlRef.current?.play()
            }else{
                tlRef.current?.reverse()
            }
            return next;
        })
    }
    return <header className='fixed top-0 left-0 w-full bg-stone-100/200 backdrop-blur-sm z-50 '>
        <div className="container flex items-center justify-between py-4">
            <Link href='/' className='font-bebasNeue text-[32px]'>NS</Link>
            {/* Mobile Menu */}
            <nav className="lg:hidden">
                <button 
                onClick={handleClick}
                className="bg-black size-10 text-white flex items-center justify-center rounded-xl hover:bg-black/80 transition">
                    {isOpen ? <X/> : <Menu/>}
                    {/* <X/> */}
                </button>
                {/* list */}
                <ul ref = {MenuRef} className="fixed top-full w-full bg-stone-900 left-0 text-stone-50 h-62.5  flex items-center justify-center flex-col
                opacity-0 invisible">

                    {navItems.map(item =>(
                        <li key={item.id}>
                            <Link href={item.href} className='link block font-bebasNeue
                            text-4xl ' onClick={handleClick}>{item.label}</Link>
                        </li>
                    )) }
                </ul>
            </nav>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-5 ">
                <ul className="flex items-center gap-11">
                    {navItems.map(item =>(
                        <li key={item.id}>
                            <Link href={item.href} className='uppercase hover:text-black/70 transition'>{item.label}</Link>
                        </li>
                    )) }
                </ul>
                <Button label={'Contact'}/>
            </nav>
        </div>
    </header>
}

export default Header
