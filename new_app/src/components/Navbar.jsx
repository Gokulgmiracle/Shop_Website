import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                {navLinks.map((item)=>(
                    <li key={item.label}>
                        <a href={item.href}>
                            {item.label}
                        </a>

                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
