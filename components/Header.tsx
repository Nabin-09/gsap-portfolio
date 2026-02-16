import Link from 'next/link'
import {Menu , X } from 'lucide-react'
import React from 'react'

const Header = () => {
    return <header>
        <div className="container">
            <Link href='/'></Link>
            {/* Mobile Menu */}
            <nav className="">
                <button className="">
                    <Menu/>
                    {/* <X/> */}
                </button>
                {/* list */}
                <ul className="">
                    
                </ul>
            </nav>
        </div>
    </header>
}

export default Header
