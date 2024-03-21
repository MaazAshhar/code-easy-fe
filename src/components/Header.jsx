import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-[rgb(248,161,161)] pl-5 py-5'>
        <ul className='flex gap-6'>
            <li className='hover:font-semibold hover:cursor-pointer hover:text-gray-600'><Link to="/">Home</Link></li>
            <li className='hover:font-semibold hover:cursor-pointer hover:text-gray-600'><Link to="/submission">Submission</Link></li>
        </ul>
    </div>
  )
}

export default Header