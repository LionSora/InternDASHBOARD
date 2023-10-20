'use client'

import { Center, Flex, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
export default function RootLayout({ children }) {
  return (
    <section>
      <div className='mx-auto  flex py-8 md:h-screen md:w-screen lg:py-0'>
        <div className='flex h-screen flex-1  items-center justify-center py-[10%]'>
          {children}
        </div>
        <Flex
          display={{ base: 'none', md: 'none', lg: 'block' }}
          bgImage={'/img/Background 5.4.png'}
          bgSize={'100%'}
          width={'100%'}
          borderBottomLeftRadius='20%'
          className=' flex flex-1 '
        >
          {/* <Image src={'/img/LOGO Vt-09 1.png'} 
          className='ml-[42%]
          mt-[22%]
          xl:w-[25.4%] xl:h-[25.3%] lg:w-[26.4%] lg:h-[26.3%]
          '/> */}

          <div className='
          ml-[42%]
          mt-[22%]
          w-[30%] h-[30%] '>
          <Image src={'/img/LOGO Vt-09 1.png'} 
          /></div>
          <Flex
            w={471}
            h={134.048}
            className='2xl:ml-[30%] xl:ml-[26%] lg:ml-[19%]
             mt-[8%]
              w-[471px] flex-col rounded-[26.37px] border-[2.198px]'
            textAlign={'Center'}
          >
            <div className='mt-[7%] text-[17.58px] text-white'>
              Khám phá trang chủ VSports
            </div>
            <Link
              href='https://vsports.vn/'
              textColor={'white'}
              fontWeight={'700'}
              fontSize={'29.3px'}
            >
              vsports.vn
            </Link>
          </Flex>
        </Flex>
      </div>
    </section>
  )
}
