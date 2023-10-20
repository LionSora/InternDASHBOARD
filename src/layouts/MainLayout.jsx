'use client'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
// import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  return (
    <main className='flex h-screen w-screen flex-row bg-blue-50/50'>
     <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className='mt-4 w-full'>{children}</div>
      </div>
    </main>
  )
}

export default Layout
