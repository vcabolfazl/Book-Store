import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard'
import Breadcrumb from '@/components/Breadcrumb'
import { useRouter } from 'next/router'

export default function index() {
  const params = useRouter().query.category
  const [allProducts, setAllProducts] = useState([])
  const breadcroumb = params === "all" ? null : { id: 2, title: params, href: `Books/${params}` }
  const [dropDownValue, setDropDownValue] = useState("new")

  const searchHandler = (e) => {
    const filteredBooks = allProducts.filter((book) =>
      book.name.toLowerCase().includes(e.target.value)
    );
    if (e.target.value.length) {
      getAllProduct()
    } else {
      setAllProducts(filteredBooks);
    }
  }

  useEffect(() => {
    console.log(dropDownValue);
    if (dropDownValue === "top") {
      let filterValue = allProducts.filter(all => all).sort((a, b) => a.sellNum - b.sellNum)
      setAllProducts(filterValue)
    } else if (dropDownValue === "new") {
      let filterValue = allProducts.filter(all => all).sort((a, b) => b.id - a.id)
      setAllProducts(filterValue)
    }
    else if (dropDownValue === "Inexpensive") {
      let filterValue = allProducts.filter(all => all).sort((a, b) => a.Price - b.Price)
      setAllProducts(filterValue)
    }
    else if (dropDownValue === "Expensive") {
      let filterValue = allProducts.filter(all => all).sort((a, b) => b.Price - a.Price)
      setAllProducts(filterValue)
    }
  }, [dropDownValue])

  const getAllProduct = async () => {
    const res = await fetch(`https://bookstoreserver.iran.liara.run/products`)
    const datas = await res.json()
    const datasfilter = datas.filter(book => book.category === params).sort((a, b) => b.id - a.id)
    if (params === "all") {
      setAllProducts(datas.sort((a, b) => b.id - a.id))
    } else {
      setAllProducts(datasfilter)
    }
  }

  useEffect(() => {
    getAllProduct()
    console.log(allProducts);
  }, [params])

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
                  breadcroumb,
                ]
              }
            />
          </div>
          {/* End Right Side */}

          {/* Start Left Side */}
          <div className="flex items-center gap-4">

            {/* DropDown */}
            <select id="large" onChange={(e) => setDropDownValue(e.target.value)} className="px-4 py-2 h-fit border rounded-lg text-zinc-700 bg-white border-none
      focus:border-none outline-none">
              <option value="new" defaultValue>جدیدترین</option>
              <option value="top"> پرفروش‌ترین </option>
              <option value="Inexpensive"> ارزان‌ترین </option>
              <option value="Expensive"> گرانترین </option>
            </select>

            {/* Search Box */}
            <form action="" className='w-full my-5 bg-white flex items-center justify-between px-3 py-2 rounded-xl text-sm'>
              <input onChange={searchHandler} type="search" className='bg-inherit outline-none w-full text-zinc-700 placeholder:text-zinc-700 font-dana-Bold' placeholder='اسم کتاب را جستوجو کنید...' name="" id="" />
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
            allProducts.length ?
              allProducts.map(product => (
                <ProductCard {...product} />
              ))
              : <h3 className='col-span-full text-2xl text-center text-rose-400 my-10 '>متاسفانه کتابی فعلا با این دسته بندی وجود ندارد</h3>
          }
        </div>
        {/* End Books Section <-- */}

      </div>
    </>
  )
}
