import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'
import React from 'react'

export default function index() {
 const [nameValue, nameBinding] = useInput("ابوالفضل شریفی")
 const [userNameValue, usernameBinding] = useInput("vc_abolfazl")
 const [phoneValue, phoneBinding] = useInput("09044775292")
 const [emailValue, emailBinding] = useInput("Abolfazl.org@yahoo.com")
 return (
  <>
   <Header />

   <div className="container px-2">
    <div className="grid md:grid-cols-4 gap-5 my-8">

     {/* --> Start Right Side */}
     <div className="md:col-span-1 bg-white shadow-2xl rounded-lg p-5 grid md:justify-center md:items-center">
      {/* Start Profile Menu */}
      <ul className='space-y-5'>
       <li>
        <Link href={"/Profile"} className='flex gap-2 items-center pr-2  transition border-r-2 border-fuchsia-400 hover:border-r-2 hover:border-fuchsia-400'>
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
      {/* End Profile Menu */}
     </div>
     {/* End Right Side <-- */}

     {/* --> start Left Side */}
     <div className="md:col-span-3 bg-white shadow-2xl rounded-lg p-3">
      <SectionHeader
       title={"اطلاعات شما"}
      />
      <form className='grid md:grid-cols-2 col-span-2 gap-5 p-5 rounded-xl border-2 border-gray-400 shadow-2xl bg-white'>
       <div className="grid gap-1">
        <label htmlFor="">نام و نام خانوادگی : </label>
        <input {...nameBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none text-zinc-800 placeholder:text-white placeholder:text-sm' placeholder='به فارسی وارد کنید' type="text" required />
       </div>
       <div className="grid gap-1">
        <label htmlFor="">نام کاربری : </label>
        <input {...usernameBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white placeholder:font-dana-Medium placeholder:text-sm' placeholder='از کاراکتر هایی مانند * / % استفاده نکنید' type="text" required />
       </div>
       <div className="grid gap-1">
        <label htmlFor="">شماره تماس : </label>
        <input {...phoneBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none  text-zinc-800 ltr placeholder:text-right placeholder:text-white placeholder:font-dana-Medium placeholder:text-sm' placeholder='مثال : 09044775292' type="number" required />
       </div>
       <div className="grid gap-1">
        <label htmlFor="">ادرس ایمیل : </label>
        <input {...emailBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr  placeholder:text-white' placeholder='KetabKhanevade@gmail.com' type="email" required />
       </div>
       <input type="submit" value={"ثبت"} className='cursor-pointer border border-gray-500 rounded-lg py-2 hover:bg-gray-500 transition font-dana-Bold text-lg hover:text-white' />
       <div className="grid gap-3 md:text-center items-center">
        <p>
         <Link href={"/ForgetPassword"} className=' hover:text-purple-700 border-b-2'>برای تعویض رمز عبور اینجا کلیک کنید</Link>
        </p>
       </div>
      </form>
     </div>
     {/* End Left Side <-- */}
    </div>
   </div>
  </>
 )
}
