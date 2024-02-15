import React from 'react';
import { navLinks } from '../constants';
import { Button } from 'react-bootstrap';

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

            <Button>Button</Button>
        </nav>
    </header>
  )
}

export default Navbar
