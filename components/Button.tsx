import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Button({label} : {label : string}) {
    return (
        <div className='inline-flex items-center group'>
            <button className='bg-black text-white overflow-hidden group-hover:text-zinc-900 rounded-full px-4 py-2.5 relative
            before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 group-hover:before:w-full
            before:transition-all z-10'>
                <span className="relative z-20">{label}</span>
            </button>
            <button className='size-10 bg-black text-white overflow-hidden flex items-center justify-center group-hover:text-zinc-900 rounded-full  relative
            before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 group-hover:before:w-full
            before:transition-all z-10'>
                <span className="relative z-20">
                    <ArrowUpRight/>
                </span>
            </button>
        </div>
    )
}
