'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'

const menu = [
  { icon: AiFillHome, title: 'Dashboard', href: '/dashboard' },
  { icon: BsFillPersonFill, title: 'User', href: '/users' },
  { icon: BsFillPersonFill, title: 'Login', href: '/login' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className='hidden h-screen w-72 bg-white dark:bg-black md:block'>
      <div className='text-navy-700 border-b-1 py-8 text-center text-3xl font-bold dark:text-white'>
        Admin <span className='font-medium'>VS</span>
      </div>

      <div className='flex cursor-pointer flex-col'>
        {menu.map((item) => {
          const MenuIcon = item.icon
          const active =
            item.href === '/'
              ? item.href === pathname
              : pathname.startsWith(item.href)

          return (
            <Link key={item.title} href={item.href}>
              <div
                className={`flex flex-row items-center gap-4 ${
                  active ? 'border-r-4' : ''
                } border-blue-500 p-4`}
              >
                <MenuIcon size={30} className={active ? `text-blue-500` : ''} />
                <span className='font-semibold'>{item.title}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
