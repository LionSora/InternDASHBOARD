'use client'
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { BsFillBarChartFill, BsCalendar } from 'react-icons/bs'
import LineChart from './components/LineChart'
import { lineChartOptionsTotalSpent, lineChartDataTotalSpent } from './charts'
import Table from './components/Table'
import MainLayout from '~/layouts/MainLayout'
const data = [
  { icon: BsFillBarChartFill, name: 'Earnings', value: '$2030' },
  { icon: BsFillBarChartFill, name: 'Earnings', value: '$2030' },
  { icon: BsFillBarChartFill, name: 'Earnings', value: '$2030' },
  { icon: BsFillBarChartFill, name: 'Earnings', value: '$2030' },
  { icon: BsFillBarChartFill, name: 'Earnings', value: '$2030' },
  { icon: BsFillBarChartFill, name: 'Earnings', value: '$2030' },
]

export default function Profile() {
  return (
    <MainLayout>
    <div className='flex flex-1 flex-col gap-4'>
      <h1 className='text-3xl'>Dashboard</h1>
      <div className='grid w-full grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6'>
        {data.map((i) => (
          <Item {...i} />
        ))}
      </div>

      <div className='flex flex-row gap-4'>
        <Card>
          <CardHeader className='flex justify-between gap-3'>
            <Button color='primary'>
              <BsCalendar />
              This month
            </Button>
            <Button isIconOnly className='bg-gray-100'>
              <BsFillBarChartFill />
            </Button>
          </CardHeader>
          <CardBody className='flex flex-row gap-4'>
            <div>
              <p className='text-3xl font-semibold'>$37.5k</p>
            </div>
            <LineChart
              series={lineChartDataTotalSpent}
              options={lineChartOptionsTotalSpent}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader className='flex justify-between gap-3'>
            <Button color='primary'>
              <BsCalendar />
              This month
            </Button>
            <Button isIconOnly className='bg-gray-100'>
              <BsFillBarChartFill />
            </Button>
          </CardHeader>
          <CardBody className='flex flex-row gap-4'>
            <div>
              <p className='text-3xl font-semibold'>$37.5k</p>
            </div>
            <LineChart
              series={lineChartDataTotalSpent}
              options={lineChartOptionsTotalSpent}
            />
          </CardBody>
        </Card>
      </div>
      <Table />
    </div>
    </MainLayout>
  )
}

const Item = ({ icon, name, value }) => {
  const Icon = icon
  return (
    <Card>
      <CardBody className='flex flex-row gap-4'>
        <div className='rounded-full bg-blue-50 p-4'>
          <Icon size={24} />
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-sm text-gray-500'>{name}</p>
          <p className='text-xl font-semibold'> {value}</p>
        </div>
      </CardBody>
    </Card>
  )
}
