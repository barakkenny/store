'use client'
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GrCart } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import CartModal from './CartModal'


const NavbarIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const router = useRouter()

    const isLoggedIn = false;

    const handleProfile = ()=> {
        if(!isLoggedIn){
            router.push('/login')
        }
    }

  return (
    <section className="flex items-center gap-4 xl:gap-6 relative">
      <FaRegCircleUser className='text-[22px]' onClick={handleProfile} />
      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-12 left-0 text-sm'>
        <Link href='/'>Profile</Link>
        <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <IoMdNotificationsOutline className='text-[22px]' />
      <div className="relative cursor-pointer">
      <GrCart 
      onClick={()=> setIsCartOpen((prev) => !prev)}
      className='text-[22px]' />
      <div className='absolute -top-4 -right-4 w-6 h-6 bg-main rounded-full text-white text-sm flex items-center justify-center'>2</div>
      </div>
      {isCartOpen && (
            <CartModal />
      )}
    </section>
  )
}

export default NavbarIcons
