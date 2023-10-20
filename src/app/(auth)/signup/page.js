'use client'
import { Button, Input } from '@nextui-org/react'
import { Formik, Form } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import OTPInput from 'react-otp-input'
import { signIn } from 'next-auth/react'
import * as Yup from 'yup'
import * as authAPI from '~/apis/auth'
import { alert } from '~/utils/helpers'

export default function SignupPage() {
  const router = useRouter()
  const [otp, setOtp] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (otp.length === 6) verifyOTP()
  }, [otp])

  const onSubmit = async (values) => {
    try {
      if (loading) return
      setLoading(true)
      await authAPI.sendOTP(values.email)
      setData(values)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert.error(error?.response?.data?.message)
    }
  }
  const verifyOTP = async () => {
    try {
      if (loading) return
      setLoading(true)
      await authAPI.verifyOTP({ uid: data.email, code: otp })
      signup()
    } catch (error) {
      setLoading(false)
      alert.error(error?.response?.data?.message)
    }
  }

  const signup = async () => {
    try {
      const res = await signIn('sign-up', {
        redirect: false,
        name: data.name,
        email: data.email,
        password: data.password,
      })
      if (res.error) throw new Error(res.error)
      router.replace('/')
    } catch (error) {
      alert.error(error.message)
      console.log(error.message, 'err')
    }
  }
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'From 10 to 30 characters')
      .max(30, 'From 10 to 30 characters')
      .required('Enter your name'),
    email: Yup.string().email().required('Enter your email'),
    password: Yup.string()
      .min(6, 'Your Password must be at least 6')
      .required('Enter your password'),
  })
  if (data) {
    return (
      <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
          Enter OTP Code
        </h1>
        <OTPInput
          inputStyle={{
            width: '2.5rem',
            height: '2.5rem',
            margin: '0 0.5rem',
            fontSize: '2rem',
            borderRadius: '4px',
            border: '1px solid rgba(0, 0, 0, 0.3)',
          }}
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <Button
          isLoading={loading}
          onClick={signup}
          className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
        >
          Verify OTP
        </Button>
      </div>
    )
  }
  return (
    <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
      <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
        Sign up
      </h1>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ email: '', name: '', password: '' }}
        enableReinitialize={true}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form className='space-y-4 md:space-y-6'>
            <Input
              type='text'
              name='name'
              label='Name'
              placeholder='Your name'
              required=''
              value={values.name}
              errorMessage={errors.name}
              onChange={handleChange}
            />
            <Input
              type='email'
              name='email'
              label='Email'
              placeholder='name@company.com'
              required=''
              value={values.email}
              errorMessage={errors.email}
              onChange={handleChange}
            />
            <Input
              type='password'
              name='password'
              label='Password'
              placeholder='••••••••'
              required=''
              value={values.password}
              errorMessage={errors.password}
              onChange={handleChange}
            />

            <Button
              isLoading={loading}
              onClick={handleSubmit}
              className='w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
            >
              Sign up
            </Button>
            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}
