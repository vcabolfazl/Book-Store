import Link from 'next/link'
import React from 'react'

export default function Shoppingcart() {
 return (
  <Link href={"/cart"} className="fixed bottom-5 left-5 z-50 px-3 py-3 bg-fuchsia-200 shadow-2xl rounded-full">
   <span className='absolute text-sm top-0 right-0 bg-fuchsia-400 px-1.5 rounded-full font-dana-Bold text- mx-auto'>0</span>
   <svg className="w-8 h-8"><use href="#ShoppingBag"></use></svg>
  </Link>
 )
}
