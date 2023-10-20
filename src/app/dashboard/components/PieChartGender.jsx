'use client'
import { MdArrowDropUp } from 'react-icons/md'
import Chart from 'react-apexcharts'
import { Card, CardBody, Select, SelectItem } from '@nextui-org/react'

const pieChartData = [11, 22, 55]

const pieChartOptions = {
  labels: ['Your files', 'System', 'Empty'],
  colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: undefined,
      backgroundColor: '#000000',
    },
  },
}
const PieChartGender = () => {
  return (
    <Card>
        <CardBody>
        <div className='flex flex-row justify-between'>
          <div>
            <h4 className='text-navy-700 text-lg font-bold dark:text-white'>
              Người dùng theo giới tính
            </h4>
          </div>

          <div className='mb-6 flex items-center justify-center'>
            <Select
              placeholder='Select an animal'
              labelPlacement='outside'
              className='w-28'
              size='sm'
              disableSelectorIconRotation
            >
              <SelectItem value='monthly'>Monthly</SelectItem>
              <SelectItem value='yearly'>Yearly</SelectItem>
              <SelectItem value='weekly'>Weekly</SelectItem>
            </Select>
          </div>
        </div>
        <div className='mb-auto flex h-[220px] w-full items-center justify-center'>
          <Chart type='pie' options={pieChartOptions} series={pieChartData} />
        </div>
        <div className='shadow-shadow-500 dark:!bg-navy-700 flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl dark:shadow-none'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
              <div className='bg-brand-500 h-2 w-2 rounded-full' />
              <p className='ml-1 text-sm font-normal text-gray-600'>Nam</p>
            </div>
            <p className='text-navy-700 mt-px text-xl font-bold  dark:text-white'>
              63%
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
              <div className='h-2 w-2 rounded-full bg-[#6AD2FF]' />
              <p className='ml-1 text-sm font-normal text-gray-600'>Nữ</p>
            </div>
            <p className='text-navy-700 mt-px text-xl font-bold dark:text-white'>
              25%
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
              <div className='h-2 w-2 rounded-full bg-[#6AD2FF]' />
              <p className='ml-1 text-sm font-normal text-gray-600'>Khác</p>
            </div>
            <p className='text-navy-700 mt-px text-xl font-bold dark:text-white'>
              25%
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PieChartGender
