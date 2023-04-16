import { useEffect, useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import { styles } from '../style'
import { navLinks } from '../constants'
import { logoMithila, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixedtop z-20 top-0 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0.0)
          }}
        >
          <img
            src={logoMithila}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18PX] font-bold cursor-pointer">
            Mithila <span className="sm:block hidden">| Ahmed</span>
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
