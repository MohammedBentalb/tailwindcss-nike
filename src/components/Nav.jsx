import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header className="padding-x absolute z-20 w-full py-8">
      <nav className="max-container flex items-center justify-between ">
        <a href="/">
          <img src={headerLogo} alt="nike-logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-10 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-coral-red">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <section className="relative">
          <img
            className="hidden max-lg:block"
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            onClick={() => {
              setToggleNav((prev) => !prev);
            }}
          />
          {toggleNav && (
            <ul
              className={`absolute right-2 top-10  z-10 hidden max-h-fit w-28 flex-col gap-1 rounded-md bg-pale-blue py-[5px] max-lg:flex ${
                toggleNav ? 'animate-slide-in' : ''
              }`}
            >
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-center"
                  onClick={() => {
                    setToggleNav((prev) => !prev);
                  }}
                >
                  <a
                    href={link.href}
                    className="cursor-pointer hover:text-coral-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </nav>
    </header>
  );
}

export default Nav;
