import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'
import React from 'react'

export default function Order() {
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
        <Link href={"/Profile/Order"} className='flex gap-2 items-center pr-2 transition  hover:border-r-2 hover:border-fuchsia-400'>
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
        <Link href={"/Profile/Favorites"} className='flex gap-2 items-center pr-2 transition border-r-2 border-fuchsia-400 hover:border-r-2 hover:border-fuchsia-400'>
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
       title={"لیست علاقه‌مندی های شما"}
      />
      <div className="my-5 grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />

      </div>
     </div>
     {/* End LEft Side <-- */}

    </div>
   </div>
  </>
 )
}
