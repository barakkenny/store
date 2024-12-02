'use client'

import Link from "next/link";
import { useState } from "react"
import { IoMenu } from "react-icons/io5";

const Menu = () =>{
    const [isOpen, setIsOpen] = useState(false)

    return(
        <section>
        <IoMenu className='text-2xl cursor-pointer'
        onClick={()=> setIsOpen((prev) => !prev)}
        />
        {isOpen && (
            <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                <Link href='/'>Homepage</Link>
                <Link href='/'>Shop</Link>
                <Link href='/'>Deals</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Logout</Link>
                <Link href='/'>Cart(1)</Link>
            </div>
        )}
        
        </section>
    )
}

export default Menu