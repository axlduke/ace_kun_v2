// import Acekun from '../../public/Acekun.png'
import M from '../../public/M.png'
import { useState } from 'react'
import Links from './Links'

const Navbar = () => {
    // const [navbarOpen, setNavbarOpen] = useState(false)
    const link = [
        {
            title: "Home",
            path: "#home"
        },
        {
            title: "About",
            path: "#about"
        },
        {
            title: "Skills",
            path: "#skill"
        },
        {
            title: "Project",
            path: "#project"
        },
        {
            title: "Cert",
            path: "#cert"
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
                <div className=''>
                    {/* {
                        !navbarOpen
                    } */}
                </div>
                {/* Web */}
                <div>
                    <ul className='flex flex-row md:space-x-10'>
                        {
                            link.map((links, index) => (
                                <li key={index}>
                                    <Links href={links.path} title={links.title}/>
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