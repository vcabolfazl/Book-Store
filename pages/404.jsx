import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

export default function Error() {
 return (
  <>
   <div className='w-1/2 mx-auto text-center my-8'>
    <img alt='' src="/assets/images/404.png" className='error404 mx-auto' />
    <div className="">
     <h1 className='my-5 font-danaB text-3xl text-gray-400'>متاسفانه صفحه مورد نظر یافت نشد</h1>
     <button className='font-danaM text-white mx-auto text-xl px-4 py-3 bg-gray-500 rounded-3xl'>
      <Link href={"/"} className='flex justify-center items-center hover:gap-x-1 transition-all'>
       بازگشت به صفحه اصلی
       <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clipRule="evenodd" />
       </svg>
      </Link>
     </button>
    </div>
   </div>
  </>
 )
}
