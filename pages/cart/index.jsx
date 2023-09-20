import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import React, { useState } from 'react'

export default function index() {
  const [num, setNum] = useState(1)
  return (
    <>
      <div className="container">

        <div className="w-full p-5 bg-white shadow-2xl my-10 rounded-2xl">
          {/* Title */}
          <SectionHeader
            title={"سبد خرید شما"}
          />
          <div className="my-8 grid md:grid-cols-2 gap-3 items-center">

            {/*  --> Start Right Side */}
            <div className="grid gap-3 max-h-[230px] md:max-h-[340px] overflow-y-auto">
              {/* Cord Product */}
              <div className="grid grid-cols-4 items-center px-3">
                <img src="/assets/Images/products/1984.jpg" alt="" />

                <div className="col-span-2 space-y-3">
                  <h5 className='line-clamp-1 font-dana-Bold text-lg'>کتاب 1997</h5>
                  <span className='line-clamp-2 font-dana-Regular'> توضیحات طولانی خیلی طولانی طولانی</span>
                  <div className='flex gap-4 items-center'>
                    <div className="font-dana-Bold">
                      <span>195,000</span>
                      <svg className='w-5 h-5'>
                        <use href='#toman'></use>
                      </svg>
                    </div>
                    <div className="flex items-center">
                      <del>215,000
                        <svg className='w-3 h-3'>
                          <use href='#toman'></use>
                        </svg>
                      </del>
                    </div>

                  </div>
                  <div className="cursor-pointer">
                    <svg className="w-5 h-5">
                      <use href='#trash'></use>
                    </svg>
                  </div>
                </div>

                <div className="flex h-full items-end justify-end gap-x-4 bottom-0">
                  <div className="grid grid-cols-3 items-center justify-center border rounded-lg shadow-2xl">
                    <span className='px-4 py-2 bg-green-00' onClick={() => setNum(num => num + 1)}>
                      <svg className="w-4 h-4">
                        <use href='#Plus'></use>
                      </svg>
                    </span>
                    <span className='px-4 py-2 bg-gray-300 font-dana-Bold text-xl text-center'>{num}</span>
                    <span className='px-4 py-2 bg-zinc800'>
                      <svg className="w-4 h-4" onClick={() => num === 1 ? null : setNum(num => num - 1)}>
                        <use href='#Min'></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

            </div>
            {/* End Right Side <--  */}

            {/* --> Start Left Side */}
            <div className="rounded-xl border p-5 grid gap-5">
              <div className="w-full grid grid-cols-2 text-center gap-3">
                <p>خلاصه سبد خرید</p>
                <p>1 کتاب</p>
                <p className='text-rose-600'>تخفیف کتاب‌ها</p>
                <p className='text-rose-600'>75,000
                  <svg className="w-4 h-4 text-rose-600">
                    <use href='#toman'></use>
                  </svg>
                </p>
                <p className='text-xl'>جمع سبد خرید</p>
                <p className='text-xl'>75,000
                  <svg className="w-4 h-4">
                    <use href='#toman'></use>
                  </svg>
                </p>
              </div>
              <div className="grid md:grid-cols-2 text-sm items-center gap-5">
                <div className="flex gap-1">
                  <svg className="w-6 h-6">
                    <use href='#shield-check'></use>
                  </svg>
                  <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
                </div>
                <div className="flex gap-1">
                  <svg className="w-6 h-6">
                    <use href='#Jet'></use>
                  </svg>
                  <p>ارسال به سراسر کشور طی 2 تا 3 روز کاری</p>
                </div>
              </div>
              <button class="px-5 py-2.5 bg-rose-600 text-white rounded-md font-dana-Bold text-sm md:text-xl left-0 right-0 mx-auto">ثـبت سفارش</button>
            </div>
            {/* End Left Side <--  */}

          </div>
        </div>
      </div>
    </>
  )
}
