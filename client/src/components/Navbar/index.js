import { Fragment } from 'react'
import './Navbar.scss'
import { Disclosure, Menu } from '@headlessui/react'
import { ChatIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link} from 'react-router-dom'
import LoginButton from "../../components/LoginLogout/LoginButton";
import LogoutButton from "../../components/LoginLogout/LogoutButton";


const navigation = [
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Places', href: '/places', current: false },
  { name: 'Store', href: '/store', current: false },
  { name: 'Community', href: '/community', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-slate-800 bg-opacity-95 bg-clip-padding blur-backdrop-filter fixed z-10 w-full ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/"><h6 className="hidden md:block text-white text-2xl">TRAVEL TODAY</h6></Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className='text-gray-300 font-normal hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm uppercase'
                        aria-current='page'
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <LoginButton  />
                    <LogoutButton />
                   
                    
                  </div>
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <ChatIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1649959052~exp=1649959652~hmac=1032e6218e756f65ccd5a4fffa65997ff8d68f38afb1d329217192dd2db90635&w=740"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <div className="transition ease-in-out" >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (<a href="/"className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >Your Profile </a>)}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/"className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >Settings </a>)}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (<a href="/"className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >Sign out</a>)}
                      </Menu.Item>
                    </Menu.Items>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Disclosure.Button
                  href="/"
                  as="a"
                  className={classNames(
                     'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={'page'}
                >
                  Home
                </Disclosure.Button>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}