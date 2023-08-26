import Link from 'next/link'
import React from 'react'

export default function Footer() {
 return (
  <footer className='bg-white shadow-2xl'>
   <div className="container grid md:grid-cols-3 p-5 gap-y-5">
    <div className="">
     <h3 className='text-xl font-dana-Bold mb-1'>درباره فروشگاه</h3>
     <p>
      در فرصت‌های اندک میان هیاهوی روزانه، زمانی که می‌شود استراحت کوتاهی کرد، یک فنجان چای نوشید و به موسیقی دلخواه خود گوش کرد. زمانیست که می‌شود در فضای مجازی گشتی زد، اخبار روز را مرور کرد و بر روی عکس‌ها و حرف‌های دوستان نظر داد. زمانیست که می‌توان وارد این فروشگاه شد، کتابی سفارش داد و در فاصله‌ای کوتاه آن را تحویل گرفت. حال دیگر این نوای موسیقی و عطر چای شماست که به فروشگاه کتاب ما حال و هوایی دیگر می‌دهد.
     </p>
    </div>
    <div className="">
     <ul className='leading-9 grid md:justify-center items-start'>
      <h3 className='text-xl font-dana-Bold mb-1 h-fit'>دسترسی سریع</h3>
      <Link href={"/"}>
       <li className='flex items-center gap-1'>
        <svg className="w-4 h-4">
         <use href='#Pin'></use>
        </svg>
        پرفروش‌ترین ها

       </li>
      </Link>
      <Link href={"/"}>
       <li className='flex items-center gap-1'>
        <svg className="w-4 h-4">
         <use href='#Pin'></use>
        </svg>
        توسعه فردی
       </li>
      </Link>
      <Link href={"/"}>
       <li className='flex items-center gap-1'>
        <svg className="w-4 h-4">
         <use href='#Pin'></use>
        </svg>
        برای هدیه
       </li>
      </Link>
      <Link href={"/"}>
       <li className='flex items-center gap-1'>
        <svg className="w-4 h-4">
         <use href='#Pin'></use>
        </svg>
        رمان و داستان
       </li>
      </Link>
     </ul>
    </div>
    <div className="">
     <h3 className='text-xl font-dana-Bold mb-1'>ارتباط باما</h3>
     <ul className='w-full'>
      <Link href={"/"}>
       <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
        <div className="flex gap-1 items-center">
         <svg className="w-4 h-4">
          <use href='#T'></use>
         </svg>
         <p>شماره تماس : </p>
        </div>
        <p className='py-1 border-b ltr'>0904 - 477 - 2592</p>
       </li>
      </Link>
      <Link href={"/"}>
       <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
        <div className="flex gap-1 items-center">
         <svg className="w-4 h-4">
          <use href='#map'></use>
         </svg>
         <p>آدرس : </p>
        </div>
        <p className='py-1 border-b ltr'>مشهد, بلوار خاقانی, بین خاقانی 21 و 23</p>
       </li>
      </Link>
      <Link href={"/"}>
       <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
        <div className="flex gap-1 items-center">
         <svg className="w-4 h-4">
          <use href='#Email'></use>
         </svg>
         <p>ایمیل : </p>
        </div>
        <p className='py-1 border-b '>KetabKhanevede@gmail.com</p>
       </li>
      </Link>

      <Link href={"/"}>
       <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
        <div className="flex gap-1 items-center">
         <svg className="w-4 h-4">
          <use href='#Telegrom'></use>
         </svg>
         <p>پشتیبانی تلگرام : </p>
        </div>
        <p className='py-1 border-b '>KetabKhanevede@</p>
       </li>
      </Link>
     </ul>
    </div>
   </div>
   <div className="container px-2 grid md:grid-cols-2 items-center justify-around text-center">
    <p>طراحی و توسعه ابوالفضل شریفی</p>
    <div className="flex items-center justify-end">
     <img src="/assets/Images/asnaf-1-min-min.png" alt="" />
     <img src="/assets/Images/namad-1-min-min.png" alt="" />
     <img src="/assets/Images/samandehi-1-min-min.png" alt="" />
    </div>
   </div>
  </footer>
 )
}