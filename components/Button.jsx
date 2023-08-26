import Link from 'next/link'
import React from 'react'

export default function Button({ title, icon, BtnHref }) {
 return (
  <Link href={`${BtnHref ? BtnHref : "/"}`}>
   <button className='flex gap-2 items-center bg-gray-400 py-2 px-3 rounded-3xl text-white'>
    {title}
    {
     icon ? (
      <svg className="w-4 h-4">
       <use href={`#${icon}`}></use>
      </svg>

     ) : null
    }
   </button>
  </Link>
 )
}
