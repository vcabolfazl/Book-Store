import Link from 'next/link'
import React from 'react'

export default function SectionHeader({ title, btnTitle, btnHref }) {
 return (

  <div className='container px-2 flex justify-between items-center'>

   <div className='flex items-center gap-5'>
    <svg className="hidden md:block w-10 h-10 mt-5">
     <use href='#titleIcon'></use>
    </svg>
    <p className='text-lg md:text-2xl font-black'>{title}</p>
   </div>
   {btnTitle ? (
    <Link href={`${btnHref ? btnHref : "/"}`}>
     <button className='flex gap-2 items-center bg-gray-400 py-2 px-3 rounded-3xl text-white'>
      {btnTitle}
      {
       <svg className="w-4 h-4">
        <use href={`#arrow-to-left`}></use>
       </svg>
      }
     </button>
    </Link>
   )
    : null}

  </div>
 )
}
