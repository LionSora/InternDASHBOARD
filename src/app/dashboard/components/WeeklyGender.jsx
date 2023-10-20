'use client'

import { Card, CardBody, Select, SelectItem } from '@nextui-org/react'

// import dynamic from 'next/dynamic'
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import Chart from 'react-apexcharts'

const WeeklyGender = () => {
  const barChartDataWeeklyRevenue = [
    {
      name: 'Nữ',
      data: [500, 370, 330, 390, 320, 350, 360, 320, 380],
      color: '#6AD2Fa',
    },
    {
      name: 'Nam',
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: '#4318FF',
    },
    {
      name: 'Khác',
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: '#EFF4FB',
    },
  ]

  const barChartOptionsWeeklyRevenue = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    // colors:['#ff3322','#faf']
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        show: true,
        formatter: function(x){
          if(typeof x !== "undefined"){
            return x + " Tuổi";
          }
          return x;
        } 
    },
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
      theme: 'dark',
      onDatasetHover: {
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
      },
    },
    xaxis: {
      categories: ['0-11', '12-15', '16-18', '19-22', '23-26', '27-30', '31-40', '41-50', '51+'],
      show: false,
      labels: {
        show: true,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: 'black',
      labels: {
        show: false,
        style: {
          colors: '#A3AED0',
          fontSize: '14px',
          fontWeight: '500',
        },
      },
    },

    grid: {
      borderColor: 'rgba(163, 174, 208, 0.3)',
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    },
    legend: {
      show: false,
    },
    colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        borderRadius: 10,
        columnWidth: '20px',
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },    
    },
  }
  return (
    <Card>
      <CardBody className='flex w-full flex-col rounded-3xl bg-white px-2 py-6 text-center'>
        <div className='mb-auto flex items-center justify-between px-6'>
          <h2 className='text-navy-700 text-lg font-bold dark:text-white'>
            Người dùng theo độ tuổi và giới tính
          </h2>
          {/* <button className='!linear bg-lightPrimary text-brand-500 dark:bg-navy-700 z-[1] flex items-center justify-center rounded-lg p-2 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10'>
            <MdBarChart className='h-6 w-6' />
          </button> */}
          <Select
            //   label="Favorite Animal"
            placeholder='7 Ngày'
            labelPlacement='outside'
            className='w-40'
            size='sm'
            disableSelectorIconRotation
          >
            <SelectItem value='monthly'>Toàn thời gian</SelectItem>
            <SelectItem value='yearly'>Hôm nay</SelectItem>
            <SelectItem value='weekly'>7 ngày</SelectItem>
            <SelectItem value='weekly'>30 ngày</SelectItem>
            <SelectItem value='weekly'>90 ngày</SelectItem>
            <SelectItem value='weekly'>Năm nay</SelectItem>
            <SelectItem value='weekly'>Năm ngoái</SelectItem>
          </Select>
        </div>

        <div className='md:mt-16 lg:mt-0'>
          <div className='h-[250px] w-full xl:h-[350px]'>
            <Chart
              options={barChartOptionsWeeklyRevenue}
              series={barChartDataWeeklyRevenue}
              type='bar'
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default WeeklyGender
