import React from 'react'
import NavLinks from './NavLinks'

const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col border py-4 items-center text-white">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLinks to={link.path} title={link.title}  className='text-white'/>
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay