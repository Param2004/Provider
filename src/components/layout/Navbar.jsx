/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Link, NavLink } from 'react-router-dom';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Phone, MessageCircle, ArrowUp } from "lucide-react"

const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: ChartBarIcon,
  },
  { name: 'College', description: "Your customers' data will be safe and secure.", href: '/colleges', icon: ShieldCheckIcon },
  {
    name: 'College Predictor',
    description: "Connect with third-party tools that you're already using.",
    href: '/college-predictor',
    icon: ViewGridIcon,
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/about-us',
    icon: CursorClickIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {


  const FloatingActions = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  
    return (
      <div className="fixed z-10 bottom-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => window.open("https://wa.me/+917303831326", "_blank")}
          className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors z-10"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
        <button
          onClick={() => window.open("tel:+917303831326")}
          className="p-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors z-10"
        >
          <Phone className="h-5 w-5" />
        </button>
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors z-10"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    )
  }




  return (
    <>
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-16 md:justify-start md:space-x-10">
        <div className="flex items-center gap-2 text-xl font-bold">
            <img 
              src="/assets/images/logo.png" 
              alt="CollegeConnect Logo" 
              className="w-10 h-10" 
            />
            <span className='text-gray-800'>CollegeConnect</span>
          </div>
          <div className="absolute right-6 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>


          <div className="hidden lg:flex-1 lg:flex lg:justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(
                  'transition duration-300 hover:-translate-y-0.5 px-5',
                  isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/colleges"
              className={({ isActive }) =>
                classNames(
                  'transition duration-300 hover:-translate-y-0.5 px-5',
                  isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'
                )
              }
            >
              College
            </NavLink>
            <NavLink
              to="/college-predictor"
              className={({ isActive }) =>
                classNames(
                  'transition duration-300 hover:-translate-y-0.5 px-5',
                  isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'
                )
              }
            >
              College Predictor
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                classNames(
                  'transition duration-300 hover:-translate-y-0.5 px-5',
                  isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'
                )
              }
            >
              About Us
            </NavLink>
          </div>



          {/* <div className="hidden lg:flex-1 lg:flex lg:justify-center">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 active:text-indigo-600 transition duration-300 hover:-translate-y-0.5 px-5">Home</Link>
            <Link to="/about-us" className="text-gray-600 hover:text-indigo-600 active:text-indigo-600 transition duration-300 hover:-translate-y-0.5 px-5">About Us</Link>
            <Link to="/college" className="text-gray-600 hover:text-indigo-600 active:text-indigo-600 transition duration-300 hover:-translate-y-0.5 px-5">College</Link>
            <Link to="#" className="text-gray-600 hover:text-indigo-600 active:text-indigo-600 transition duration-300 hover:-translate-y-0.5 px-5">College Predictor</Link>
          </div> */}
          <div className="lg:flex items-center md:ml-12 hidden">
            <Link to="/login" className="text-base font-medium text-gray-500 hover:text-indigo-600 transition duration-300 hover:-translate-y-0.5">
              Log in
            </Link>
            <Link
              to="/register"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition duration-300 hover:-translate-y-0.5 bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
              <div className="flex items-center  gap-2 text-xl font-bold">
                <img 
                src="assets/images/logo.png" 
                alt="CollegeConnect Logo" 
                className="w-10 h-10" 
                />
                <span>CollegeConnect</span>
              </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </Link>
                    ))}
                  </div>
                  {/* <div className="mt-8 text-base">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      {' '}
                      View all products <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div> */}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              {/* <div className="grid grid-cols-2 gap-4">
                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>

                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Company
                </a>

                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Resources
                </a>

                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>

                <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                  Contact Sales
                </a>
              </div> */}
              <div className="mt-6">
                <Link
                  to="/register"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    <FloatingActions />
    </>
  )
}
