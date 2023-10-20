'use client'
import React from "react";
import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { alert } from '~/utils/helpers'
import { useRouter } from 'next/navigation'


import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import * as Yup from 'yup'

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");

  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const onSubmit = async (values) => {
    
    try {
      if (loading) return
      setLoading(true)
      const res = await signIn('sign-in', {
        redirect: false,
        email: values.email,
        password: values.password,
      })
      if (res.error) throw new Error(res.error)
      router.replace('/')
    } catch (error) {
      setLoading(false)
      alert.error(error.message)
      console.log(error.message, 'err')
    }
  }

  const schema = Yup.object().shape({
    email: Yup.string().email().required('Enter your email'),
    password: Yup.string()
      .min(6, 'Your Password must be at least 6')
      .required('Enter your password'),
  })

  return (
    // <div className='space-y-4 p-6 sm:p-8 md:space-y-6 '>
    //   <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
    //   Đăng nhập
    //   </h1>
    //   <Formik
    //     onSubmit={onSubmit}
    //     initialValues={{ email: '', password: '' }}
    //     enableReinitialize={true}
    //     validationSchema={schema}
    //   >
    //     {({
    //       values,
    //       errors,
    //       touched,
    //       handleBlur,
    //       handleChange,
    //       handleSubmit,
    //       setFieldValue,
    //     }) => (
    //       <Form className='space-y-4 md:space-y-6' action='#'>
    //         <Input
    //           type='email'
    //           name='email'
    //           label='Email'
    //           placeholder='name@company.com'
    //           required=''
    //           value={values.email}
    //           errorMessage={errors.email}
    //           onChange={handleChange}
    //         />
    //         <Input
    //           type='password'
    //           name='password'
    //           label='Password'
    //           placeholder='••••••••'
    //           required=''
    //           value={values.password}
    //           errorMessage={errors.password}
    //           onChange={handleChange}
    //         />

    //         <div className='flex items-center justify-between'>
    //           <div className='flex items-start'>
    //             <div className='flex h-5 items-center'>
    //               <input
    //                 id='remember'
    //                 aria-describedby='remember'
    //                 type='checkbox'
    //                 className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600'
    //                 required=''
    //               />
    //             </div>
    //             <div className='ml-3 text-sm'>
    //               <label
    //                 for='remember'
    //                 className='text-gray-500 dark:text-gray-300'
    //               >
    //                 Remember me
    //               </label>
    //             </div>
    //           </div>
    //           <Link
    //             href={'/reset-password'}
    //             className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
    //           >
    //             Forgot password?
    //           </Link>
    //         </div>
    //         <Button
    //           isLoading={loading}
    //           onClick={handleSubmit}
    //           type='submit'
    //           fullWidth
    //           color='primary'
    //         >
    //           Sign in
    //         </Button>
    //         <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
    //           Don’t have an account yet?{' '}
    //           <Link
    //             href='/signup'
    //             className='font-medium text-primary-600 hover:underline dark:text-primary-500'
    //           >
    //             Sign up
    //           </Link>
    //         </p>
    //       </Form>
    //     )}
    //   </Formik>
    // </div>
    <Flex 
    h={{
      sm: "initial",
      md: "unset",
      lg: "full",
      xl: "full",
    }}
    maxW={{ base: "100%", md: "max-content" }}

    mx={{ base: "auto", lg: "0px" }}
    me='auto'
    alignItems='start'
    justifyContent='center'
    mb={{ base: "30px", md: "60px" }}
    px={{ base: "25px", md: "0px" }}
    mt={{ base: "40px", md: "14vh" }}
    flexDirection='column'>
    <Box me='auto'>
      <Heading color={textColor} fontSize='36px' mb='10px'>
        Đăng nhập
      </Heading>
    </Box>
    <Flex
      zIndex='2'
      direction='column'
      w={{ base: "100%", md: "420px" }}
      maxW='100%'
      background='transparent'
      borderRadius='15px'
      mx={{ base: "auto", lg: "unset" }}
      me='auto'
      mb={{ base: "20px", md: "auto" }}>
      
      <FormControl>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          Email<Text color={brandStars}>*</Text>
        </FormLabel>
        <Input
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder=''
          mb='24px'
          // w={"410px"}
          // h={"50px"}
          fontWeight='500'
          size='lg'
        />
        <FormLabel
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          display='flex'>
          Password<Text color={brandStars}>*</Text>
        </FormLabel>
        <InputGroup size='md'>
          <Input
            isRequired={true}
            fontSize='sm'
            placeholder=''
            mb='24px'
            size='lg'
            type={show ? "text" : "password"}
            variant='auth'
          />
          <InputRightElement display='flex' alignItems='center' mt='4px'>
            <Icon
              color={textColorSecondary}
              _hover={{ cursor: "pointer" }}
              as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <Flex justifyContent='space-between' align='center' mb='24px'>
          <FormControl display='flex' alignItems='center'>
            <Checkbox
              id='remember-login'
              colorScheme='brandScheme'
              me='10px'
            />
            <FormLabel
              htmlFor='remember-login'
              mb='0'
              fontWeight='normal'
              color={textColor}
              fontSize='sm'>
              Nhớ đăng nhập cho lần sau
            </FormLabel>
          </FormControl>
        </Flex>
        <Button
          fontSize='sm'
          variant='brand'
          fontWeight='500'
          w='100%'
          h='50'
          mb='24px'>
          Đăng nhập
        </Button>
      </FormControl>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='start'
        maxW='100%'
        mt='0px'>
        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
          Nếu chưa có tài khoản đăng nhập hoặc quên mật khẩu, vui lòng liên hệ team IT. Xin cảm ơn. 
        </Text>
      </Flex>
    </Flex>
  </Flex>
  )
}
