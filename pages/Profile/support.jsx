import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'
import React from 'react'

export default function support() {
 return (
  <>
   <div className="container px-2">
    <div className="grid md:grid-cols-4 gap-5 my-8">

     {/* --> Start Right Side */}
     <div className="md:col-span-1 bg-white shadow-2xl rounded-lg p-5 grid md:justify-center md:items-center">
      <ul className='space-y-5'>
       <li>
        <Link href={"/Profile"} className='flex gap-2 items-center pr-2  transition hover:border-r-2 hover:border-fuchsia-400'>
         <svg className='w-6 h-6'>
          <use href='#user'></use>
         </svg>
         <span>پروفایل</span>
        </Link>
       </li>
       <li>
        <Link href={"/Profile/Order"} className='flex gap-2 items-center pr-2 transition hover:border-r-2 hover:border-fuchsia-400'>
         <svg className='w-6 h-6'>
          <use href='#ShoppingBasket'></use>
         </svg>
         <span>سفارشات</span>
        </Link>
       </li>
       <li>
        <Link href={"/Profile/support"} className='flex gap-2 items-center pr-2 transition border-r-2 border-fuchsia-400 hover:border-r-2 hover:border-fuchsia-400'>
         <svg className='w-6 h-6'>
          <use href='#ticket'></use>
         </svg>
         <span>تیکت‌های پشتیبانی</span>
        </Link>
       </li>
       <li>
        <Link href={"/Profile/Favorites"} className='flex gap-2 items-center pr-2 transition hover:border-r-2 hover:border-fuchsia-400'>
         <svg className='w-6 h-6'>
          <use href='#heart'></use>
         </svg>
         <span>لیست علاقه مندی ها</span>
        </Link>
       </li>
       <li>
        <Link href={"/"} className='flex gap-2 items-center pr-2 transition hover:border-r-2 hover:border-fuchsia-400'>
         <svg className='w-6 h-6'>
          <use href='#Login'></use>
         </svg>
         <span>خروج از حساب کاربری</span>
        </Link>
       </li>
      </ul>
     </div>
     {/* End Right Side <-- */}

     {/* --> start Left Side */}
     <div className="relative md:col-span-3 bg-white shadow-2xl rounded-lg p-3">
      <SectionHeader
       title={"تیکت‌های شما"}
      />

      <div className="my-5 relative">
       <div className="grid gap-3 pb-5 max-h-96 overflow-y-auto">
        <div className="float-right w-fit border-2 rounded-xl p-3">
         <h3>lorem</h3>
         <p>dsfsdfskdf hsusd fsuk fgsiu ftsifgsif s iu</p>
        </div>

        <div className="">
         <div className="float-left rtl left-0 w-fit border-2 rounded-xl p-3">
          <h3>lorem</h3>
          <p>dsfsdfskdf hsusd fsuk fgsiu ftsifgsif s iu</p>
         </div>
        </div>

       </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
       <form className='w-full flex items-center gap-3 ps-5 bg-gray-400 rounded-b-lg'>
        <svg className="w-6 h-6">
         <use href='#Telegrom'></use>
        </svg>
        <input type="text" className='w-full bg-gray-500 text-white rounded-bl-lg outline-none p-2' placeholder='پیامی ارسال کنید' />
       </form>
      </div>
     </div>
     {/* End Left Side <-- */}

    </div>
   </div>
  </>
 )
}
