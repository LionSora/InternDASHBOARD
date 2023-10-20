'use client'

import { Card, CardBody } from '@nextui-org/react'
const Widget = ({ icon, title, subtitle, type }) => {
  return (
    <Card>
      <CardBody
        className={`!z-5 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 relative flex flex-grow flex-row items-center rounded-[20px] bg-white bg-clip-border p-0 dark:text-white dark:shadow-none`}
      >
        <div className='ml-[18px] flex h-[90px] w-auto flex-row items-center'>
          <div className='dark:bg-navy-700 rounded-full bg-blue-50 p-3'>
            <span className='flex items-center text-blue-500 dark:text-white'>
              {icon}
            </span>
          </div>
        </div>

        <div className='h-50 ml-4 flex w-auto flex-col justify-center'>
          <p className='font-dm text-sm font-medium text-gray-600'>{title}</p>
          <h4 className='text-navy-700 text-xl font-bold dark:text-white'>
            {subtitle}
          </h4>
         <p class='text-sm'><b class="text-[#05CD99]">25% </b>với tháng trước</p>
        </div>
       {['leagues','matches'].includes(type) && <div className='text-sm ms-8 border-l-3'>
         <div className='ms-4'>
         <p class="text-[#775FFC]">Đang diễn ra<p>123</p></p>
       <p class="text-[#84D9FD]" >Sắp diễn ra <p>123</p></p>
       </div></div>}
      </CardBody>
    </Card>
  )
}

export default Widget
