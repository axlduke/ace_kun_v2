import React from 'react'
import { Link } from 'react-router-dom'

const Links = ({href, title}) => {
    return (
        <Link to={href} className='text-white lg:text-xl hover:cursor-pointer'>
            {title}
        </Link>
    )
}

export default Links