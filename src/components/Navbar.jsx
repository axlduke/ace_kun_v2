// import Acekun from '../../public/Acekun.png'
import M from '../../public/M.png'
import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'
import MenuOverlay from './MenuOverlay'
import NavLink from "./NavLinks";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const link = [
        {
            title: "About",
            path: "#about"
        },
        {
            title: "Tech/Cert",
            path: "#project"
        },
        {
            title: "Contact",
            path: "#contact"
        },
    ]
    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#131313]">
            <div className="flex container justify-between items-center py-3 px-16">
                <img src={M} alt="logo" className='w-10 object-contain'/>
                {/* Mobile */}
                <div className='block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button 
                                className='flex items-center text-violet-400'
                                onClick={() => setNavbarOpen(true)}
                            >
                                <CgMenu className='w-6 h-6'/>
                            </button>
                        ) : (
                            <button
                                className='flex items-center text-violet-400'
                                onClick={() => setNavbarOpen(false)}
                            >
                                <GrClose className='w-6 h-6'/>
                            </button>
                        )
                    }
                </div>
                {
                    navbarOpen ? <MenuOverlay links={link} /> : null
                }
                {/* Web */}
                <div className='hidden md:block md:w-auto'>
                    <ul className='flex flex-row md:space-x-10'>
                        {
                            link.map((links, index) => (
                                <li key={index}>
                                    <NavLink href={links.path} title={links.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar