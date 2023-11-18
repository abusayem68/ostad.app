import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navigationList = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Team',
    link: '/team',
  },
  {
    name: 'Service',
    link: '/service',
  },
  {
    name: 'Projects',
    link: '/project',
  },
  {
    name: 'Testimonials',
    link: '/testimonial',
  },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className={`${
        location.pathname === '/' ? 'bg-[#D7F5DC]' : 'bg-[#F8F9FC]'
      } shadow-sm fixed top-0 left-0 right-0 z-50 opacity-95`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              {open ? (
                <XMarkIcon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ml-5 sm:ml-0">
              <h1 className="font-bold text-base lg:text-xl">
                Design<span className="text-[#F55F1D]">AGENCY</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-3 sm:block">
              <div className="flex ">
                {navigationList.map((navigation, i) => (
                  <NavLink
                    key={i}
                    to={navigation.link}
                    className={({ isActive }) =>
                      isActive
                        ? 'px-2 sm:px-3 py-2 text-sm md:text-base font-medium text-[#20B15A]'
                        : 'px-2 sm:px-3 py-2 text-sm md:text-base font-medium hover:text-[#20B15A] '
                    }>
                    {navigation.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="flex w-full md:ps-3">
              <button
                type="button"
                className=" hover:text-white border border-[#20B15A] hover:bg-[#20B15A] focus:ring-4 focus:outline-none focus:ring-[#20B15A] font-medium rounded-[10px] tex-sm md:text text-center py-2 px-4 md:me-7">
                Login
              </button>
              <button
                type="button"
                className="hidden lg:block hover:text-white border border-[#20B15A] hover:bg-[#20B15A] focus:ring-4 focus:outline-none focus:ring-[#20B15A] font-medium rounded-[10px] tex-sm md:text-base text-center py-2 px-4">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {open && (
        <div
          className="sm:hidden"
          id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {navigationList.map((navigation, i) => (
              <NavLink
                key={i}
                to={navigation.link}
                onClick={() => setOpen(!open)}
                className={({ isActive }) =>
                  isActive
                    ? 'px-3 py-2 text-base font-medium text-[#20B15A] block'
                    : 'px-3 py-2 text-base font-medium hover:text-[#20B15A] block'
                }>
                {navigation.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
