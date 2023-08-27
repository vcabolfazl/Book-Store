import Link from 'next/link'
import React from 'react'

export default function Breadcrumb({ Links }) {
 return (
  <div className="w-fit bg-white shadow-2xl px-3 py-2 rounded-xl my-4">
   <ul className='flex items-center gap-2'>
    <li>
     <Link href={"/"} className='flex items-center gap-2'>
      صفحه اصلی
      <svg className="w-3 h-3">
       <use href='#arrow-left'></use>
      </svg>
     </Link>
    </li>
    {
     Links.map(link => (
      <>
       {
        link ? (
         <li>
          <Link href={`/${link.href ? link.href : null}`} className='flex items-center gap-2'>
           {link.title}
           {
            link.id !== Links.length && link ? (
             <svg className="w-3 h-3">
              <use href='#arrow-left'></use>
             </svg>
            ) : (
             <svg className="w-3 h-3 rotate-[-90deg]">
              <use href='#arrow-left'></use>
             </svg>
            )
           }
          </Link>
         </li>
        )
         : (
          null
         )
       }

      </>
     ))
    }
   </ul>
  </div>
 )
}
