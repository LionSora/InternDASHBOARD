'use client'
import React, { useMemo, useRef, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Avatar,
  Divider,
} from '@nextui-org/react'
import { FaUser, FaSearch } from 'react-icons/fa'
import { FaRankingStar, FaBookmark } from 'react-icons/fa6'
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdNightlightRound,
} from 'react-icons/md'

import { AiFillHome, AiOutlineBell } from 'react-icons/ai'
import { BsFillBoxFill } from 'react-icons/bs'
import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { useTheme } from 'next-themes'

export default function NavbarComponent() {
  const path = usePathname()
  const session = useSession()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const paths = path.split('/')

  const menu = useRef([
    { name: 'Home', icon: AiFillHome, href: '/' },
    { name: 'Bookmark', icon: FaBookmark, href: '/bookmark' },
    { name: 'Leaderboard', icon: FaRankingStar, href: '/leaderboard' },
    { name: 'My room', icon: BsFillBoxFill, href: '/my-room' },
  ]).current

  const onDropdown = (key) => {
    if (key === 'logout') signOut()
    else router.push(key)
  }

  const renderThemeMode = useMemo(() => {
    if (theme === 'dark')
      return (
        <Button
          isIconOnly
          variant='light'
          radius='full'
          onPress={() => setTheme('light')}
        >
          <MdOutlineLightMode size={20} />
        </Button>
      )

    return (
      <Button
        isIconOnly
        variant='light'
        radius='full'
        onPress={() => setTheme('dark')}
      >
        <MdNightlightRound size={20} />
      </Button>
    )
  }, [theme])
  const title = paths[paths.length - 1]

  return (
    <nav className='sticky top-4 z-40 mx-4 flex flex-row flex-wrap items-center justify-between rounded-2xl bg-white/10 p-2 px-2 backdrop-blur-xl dark:bg-[#0b14374d]'>
      <div>
        <p className='text-2xl font-bold'>
          {title[0].toUpperCase()}
          {title.substring(1, title.length)}
        </p>
      </div>

      <div className='flex h-14 flex-row gap-1 rounded-full bg-white p-2'>
        <Input
          classNames={{
            // mainWrapper: 'sda',
            base: 'h-full',
            // mainWrapper: 'h-full',
            //   // input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500',
          }}
          placeholder='Search...'
          size='sm'
          startContent={<FaSearch size={18} />}
          type='search'
          radius='full'
        />
        <Button isIconOnly variant='light' radius='full'>
          <AiOutlineBell size={20} />
        </Button>
        {/* {renderThemeMode} */}
        <Button isIconOnly variant='light' radius='full'>
          <Avatar />
        </Button>
      </div>
    </nav>
  )
}

{
  /* <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='text-white sm:hidden'
        /> */
}
{
  /* <NavbarContent className='w-9'>
        
        <NavbarBrand className='mr-4'>
          {paths.length > 2 && (
            <p className='text-2xl font-bold'>
              {paths[1][0].toUpperCase() +
                paths[1].substring(1, paths[1].length)}
            </p>
          )}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[10rem] h-10 bg-default-400/20 dark:bg-default-500/20',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper: 'h-full font-normal text-default-500',
          }}
          placeholder='Type to search...'
          size='sm'
          startContent={<FaSearch size={18} />}
          type='search'
        />
      </NavbarContent>

      <NavbarContent justify='end' className='max-w-[80px] sm:max-w-none'>
        {renderThemeMode}
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='secondary'
              name='Jason Hughes'
              size='sm'
              src={session.data?.user?.avatar}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label='Profile Actions'
            variant='flat'
            onAction={onDropdown}
          >
            <DropdownItem
              key='/profile'
              className='h-14 gap-2 rounded-none border-b-1'
            >
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>{session.data?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key='/profile'>Profile</DropdownItem>
            <DropdownItem key='/change-password'>Change password</DropdownItem>
            <DropdownItem
              key='logout'
              color='danger'
              className='rounded-none border-t-1'
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menu.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */
}
