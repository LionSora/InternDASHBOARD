'use client'
import React from 'react'
import Widget from './components/Widget'
// import { IoCashOutline } from 'react-icons/io5'
// import { MdBarChart, MdAccountBalanceWallet, MdDashboard } from 'react-icons/md'
import {User, Medal ,Handshake, Like} from '~/acces'
import MainLayout from '~/layouts/MainLayout'

import dynamic from 'next/dynamic'

const WeeklyGender = dynamic(() => import('./components/WeeklyGender'), {
  ssr: false,
})
const WeeklyNewUsers = dynamic(() => import('./components/WeeklyNewUsers'), {
  ssr: false,
})
const WeeklyNewLeagues = dynamic(() => import('./components/WeeklyNewLeagues'), {
  ssr: false,
})
const WeeklyNewClub = dynamic(() => import('./components/WeeklyNewClub'), {
  ssr: false,
})
const TotalSpent = dynamic(() => import('./components/TotalSpent'), {
  ssr: false,
})
const PieChartCard = dynamic(() => import('./components/PieChartCard'), {
  ssr: false,
})
const PieChartGender = dynamic(() => import('./components/PieChartGender'), {
  ssr: false,
})

export default function Dashboard() {
  return (
    <MainLayout>
    <div className=''>
      <div className='3xl:grid-cols-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3'>
        <Widget
          icon={<User className='h-7 w-7' color='' />}
          title={'Người dùng'}
          subtitle={'250.000'}
          type={'user'}
        />
        <Widget
          icon={<Medal className='h-6 w-6' />}
          title={'Giải đấu (mùa)'}
          subtitle={'1.940'}
          type={'leagues'}
        />
        <Widget
          icon={<Handshake className='h-7 w-7' />}
          title={'Câu lạc bộ'}
          subtitle={'5.940'}
          type={'team'}
        />
        <Widget
          icon={<Medal className='h-6 w-6' />}
          title={'Trận đấu'}
          subtitle={'244.763'}
          type={'matches'}
        />
        <Widget
          icon={<Like className='h-6 w-6 ' />}
          title={'Bài viết'}
          subtitle={'5.940'}
          type={'post'}
        />
        <Widget
          icon={<Handshake className='h-6 w-6' />}
          title={'Hình ảnh/Video'}
          subtitle={'5940'}
          type={'images'}
        />
      </div>

      <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2'>
        <TotalSpent />
        <WeeklyGender />
        <WeeklyNewUsers/>
        <WeeklyNewLeagues/>
        <WeeklyNewClub/>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2' > <PieChartCard />
        <PieChartGender/>
        </div>
       
        {/* <div className='grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1'> */}
        {/* <div className='flex rounded-[20px] w-full'> */}
        {/* </div> */}
      </div>
      {/* <div className='mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2'>
             <CheckTable />
      </div> */}
    </div>
    </MainLayout>
  )
}
