import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import Breadcrumb from '@/components/Breadcrumb'
import { useRouter } from 'next/router'


export default function index() {
 const params = useRouter()
 const [allProducts, setAllProducts] = useState([])
 // const breadcroumb = params === "all" ? null : { id: 2, title: params, href: `Books/${params}` }
 const getAllProduct = async () => {
  const res = await fetch(`https://bookstoreserver.iran.liara.run/category=${params}`)
  const datas = await res.json()
  setAllProducts(datas)
  console.log(params);
 }
 useEffect(() => {
  getAllProduct()
  console.log(allProducts);
 }, [])
 return (

  <>
   <Header />

   <div className="container px-2 my-4">

    {/* --> Start Header of Books Section */}
    <div className="flex items-center justify-between">

     {/* Start Right Side */}
     <div className="hidden md:block">
      {/* Breadcrumb */}
      <Breadcrumb
       Links={
        [
         {
          id: 1, title: "کتاب ها", href: "Books/all"
         },
         // breadcroumb,
        ]
       }
      />
     </div>
     {/* End Right Side */}

     {/* Start Left Side */}
     <div className="flex items-center gap-4">

      {/* DropDown */}
      <select id="large" className="px-4 py-2 h-fit border rounded-lg text-zinc-700 bg-white border-none
      focus:border-none outline-none">
       <option value="new" defaultValue>جدیدترین</option>
       <option value="top"> پرفروش‌ترین </option>
       <option value="top"> ارزان‌ترین </option>
       <option value="top"> گرانترین </option>
      </select>

      {/* Search Box */}
      <form action="" className='w-full my-5 bg-white flex items-center justify-between px-3 py-2 rounded-xl text-sm'>
       <input type="search" className='bg-inherit outline-none w-full text-zinc-700 placeholder:text-zinc-700 font-dana-Bold' placeholder='اسم کتاب را جستوجو کنید...' name="" id="" />
       <svg className="w-8 h-8 text-zinc-700">
        <use href='#Search'></use>
       </svg>
      </form>

     </div>
     {/* End Left Side */}


    </div>
    {/* Start Header of Books Section <-- */}

    {/* --> Start Books Section  */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
     {
      // allProducts &&
      // allProducts.map(product => (
      //  <ProductCard {...product} />
      // ))
     }
    </div>
    {/* End Books Section <-- */}

   </div>
  </>
 )
}
