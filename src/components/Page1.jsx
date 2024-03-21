import React from 'react'
import Form from './Form'
import Header from './Header'

const Page1 = () => {
  return (
    <>
        <Header />
        <div className="w-11/12 md:w-[700px] rounded-lg mx-auto bg-slate-50 sm:flex mt-5">
            <div className='w-[100%] sm:w-[30%] rounded-t-lg sm:rounded-tr-none sm:rounded-s-lg bg-[rgb(248,161,161)] text-center sm:flex sm:flex-col sm:justify-center '>
                <h2 className='text-2xl font-semibold'>Welcome</h2>
                <p>Enter your code here</p>
            </div>
            <Form />
        </div>
    </>
  )
}

export default Page1