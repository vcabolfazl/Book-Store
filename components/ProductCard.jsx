import Link from 'next/link'
import React from 'react'

export default function ProductCard() {
 return (
  <div className='relative border inline-block space-y-3 bg-white shadow-2xl rounded-xl p-3'>
   {/* --> Start Header Card */}
   <div className="">
    <span className='absolute right-0 rounded-b-[2px] top-0 text-white font-dana-Bold pt-2 rounded-tr-xl rounded-bl-xl bg-indigo-700 px-2 py-px text-xs sm:text-base '>%15  تخفیف</span>

    <Link href={"/Book-info/name"}>
     <img src="/assets/Images/products/1984.jpg" className='mt-1' alt="" />
    </Link>
   </div>
   {/* End Header Card <-- */}

   {/*  --> Start Body Card */}
   <div className="">
    <Link href={"/Book-info/name"}>
     <h5 className='line-clamp-1 font-dana-Bold text-lg'>کتاب 1997</h5>
     <span className='line-clamp-2 font-dana-Regular'> توضیحات طولانی خیلی طولانی طولانی</span>
    </Link>
   </div>
   {/* End Body Card <-- */}

   {/* --> Start Footer Card */}
   <div className="flex items-center justify-between border-t pt-2">
    <div>
     <div className="flex items-center">
      <sup><del>215,000
       <svg className='w-3 h-3'>
        <use href='#toman'></use>
       </svg>
      </del>
      </sup>
     </div>
     <div className="font-dana-Bold">
      <span>195,000</span>
      <svg className='w-5 h-5'>
       <use href='#toman'></use>
      </svg>
     </div>
    </div>
    <Link href="/" className='bg-fuchsia-200 p-1 px-1.5 md:px-2 md:py-2 rounded-full'>
     <svg className='w-4 md:w-6 h-4 md:h-6'>
      <use href='#ShoppingBasket'></use>
     </svg>
    </Link>
   </div>
   {/* End Footer Card <-- */}

  </div>
 )
}
