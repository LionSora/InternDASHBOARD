'use client'
import React from 'react'
import {
  MdArrowDropUp,
  MdArrowDropDown,
} from 'react-icons/md'
import { Card, CardBody, Select, SelectItem } from '@nextui-org/react'
// import dynamic from 'next/dynamic'
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import Chart from 'react-apexcharts'

const lineChartDataTotalSpent = [
  {
    name: '7 ngày',
    data: [50, 64, 48, 66, 49, 68],
    color: '#4318FF',
  },
  {
    name: 'Kỳ trước',
    data: [30, 40, 24, 46, 20, 46],
    color: '#6AD2FF',
  },
]

const lineChartOptionsTotalSpent = {
  legend: {
    horizontalAlign: 'left', 
    show: true,
  },
  theme: {
    mode: 'light',
  },
  chart: {
    type: 'line',

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },

  tooltip: {
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
    theme: 'dark',
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    type: 'text',
    range: undefined,
    categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
  },

  yaxis: {
    show: false,
  },
}

const TotalSpent = () => {
  return (
    <Card>
      <CardBody className='!p-[20px] text-center'>
        <div className='flex justify-start'>
          <Select
            //   label="Favorite Animal"
            placeholder='Người dùng'
            labelPlacement='outside'
            className='w-36'
            size='sm'
            disableSelectorIconRotation
          >
            <SelectItem value='monthly'>Người dùng</SelectItem>
            <SelectItem value='yearly'>Giải đấu</SelectItem>
            <SelectItem value='weekly'>Câu lạc bộ</SelectItem>
          </Select>
          <Select 
            //   label="Favorite Animal"
            placeholder='7 Ngày'
            labelPlacement='outside'
            className='ml-4 w-32'
            size='sm'
            disableSelectorIconRotation
          >
            <SelectItem value='monthly'>Hôm nay</SelectItem>
            <SelectItem value='yearly'>7 ngày</SelectItem>
            <SelectItem value='weekly'>30 ngày</SelectItem>
            <SelectItem value='weekly'>90 ngày</SelectItem>
            <SelectItem value='weekly'>năm nay</SelectItem>
            <SelectItem value='weekly'>năm ngoái</SelectItem>
          </Select>
        </div>

        <div className='flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden'>
          <div className='flex flex-col'>
            <p className='text-navy-700 mt-[20px] text-3xl font-bold dark:text-white'>
              250.000
            </p>
            <div className='flex flex-col items-start'>
              <p className='mt-2 text-sm text-gray-600'>Người dùng</p>
              <div className='flex flex-row items-center justify-center'>
                <MdArrowDropUp className='font-medium text-green-500' />
                <div><p className='text-sm font-bold text-green-500'> +2.45% </p></div>
                <MdArrowDropDown className='font-medium text-red-500' />
                <div><p className='text-sm font-bold text-red-500'> -2.45% </p></div>   
              </div>
            </div>
          </div>
          <div className='h-full w-full'>
            <Chart
              options={lineChartOptionsTotalSpent}
              series={lineChartDataTotalSpent}
              type='line'
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default TotalSpent
