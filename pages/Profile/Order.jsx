import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'
import React from 'react'

export default function Order() {
 return (
  <>
   <Header />
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
        <Link href={"/Profile/Order"} className='flex gap-2 items-center pr-2 transition border-r-2 border-fuchsia-400 hover:border-r-2 hover:border-fuchsia-400'>
         <svg className='w-6 h-6'>
          <use href='#ShoppingBasket'></use>
         </svg>
         <span>سفارشات</span>
        </Link>
       </li>
       <li>
        <Link href={"/Profile/support"} className='flex gap-2 items-center pr-2 transition hover:border-r-2 hover:border-fuchsia-400'>
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
     <div className="md:col-span-3 bg-white shadow-2xl rounded-lg p-3">
      <SectionHeader
       title={"سفارشات شما"}
      />
      {/* <table className='p-5 rounded-xl border-2 border-gray-400 shadow-2xl bg-white'>
      </table> */}

      <div className="relative overflow-x-auto my-5">
       <table className="w-full text-center rounded-xl border-2 border-gray-400 shadow-2xl bg-white">
        <thead className="bg-gray-400">
         <tr>
          <th scope="col" className="px-6 py-3">
           نام کتاب
          </th>
          <th scope="col" className="px-6 py-3">
           تاریخ خرید
          </th>
          <th scope="col" className="px-6 py-3">
           قیمت
          </th>
          <th scope="col" className="px-6 py-3">
           وضعیت
          </th>
         </tr>
        </thead>
        <tbody className='font-dana-Regular'>
         <tr className="border-t">
          <th scope="row" className="px-6 py-4 font-dana-Bold">
           " کتاب  1997 "
          </th>
          <td className="px-6 py-4">
           1402/06/29
          </td>
          <td className="px-6 py-4">
           250,000
           <svg className='w-4 h-4'>
            <use href='#toman'></use>
           </svg>
          </td>
          <td className="px-6 py-4 text-green-600">
           ارسال شده
          </td>
         </tr>
         <tr className="border-t">
          <th scope="row" className="px-6 py-4 font-dana-Bold">
           " کتاب  off "
          </th>
          <td className="px-6 py-4">
           1402/06/29
          </td>
          <td className="px-6 py-4">
           250,000
           <svg className='w-4 h-4'>
            <use href='#toman'></use>
           </svg>
          </td>
          <td className="px-6 py-4 text-orange-600">
           درحال ارسال ...
          </td>
         </tr>
        </tbody>

       </table>
      </div>
     </div>
     {/* End Left Side <-- */}

    </div>
   </div>
  </>
 )
}
