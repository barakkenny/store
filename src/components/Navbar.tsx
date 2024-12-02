
import Link from "next/link"
import Menu from "./Menu"
import Searchbar from "./Searchbar"
import NavbarIcons from "./NavbarIcons"

const Navbar = ()=> {
 

    return(
        <section className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
         <div className="h-full flex items-center justify-between md:hidden">
        {/* MOBILE RESPONSIVENESS */}
        <Link href='/'>
        <div className='text-2xl tracking-wide'>Ecommerce</div>
        </Link>
        <Menu  />
        </div>
        {/* Bigger Screen */}
        <div className='hidden md:flex items-center justify-between h-full'>
        <div className="w-1/3 xl:w-1/2">
        <Link href='/'>
        <h2 className="text-2xl tracking-wide">Ecommerce</h2>
        </Link>
        </div>
        <div className='hidden xl:flex gap-4'>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Shop</Link>
        <Link href='/'>Deals</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Contact</Link>
        </div>

        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
        <Searchbar />
        <NavbarIcons />
        </div>
        </div>
        </section>
    )
}

export default Navbar