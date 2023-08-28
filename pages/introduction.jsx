import Header from '@/components/Header'

import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function introduction() {
 const [lssue, setLssue] = useState(false)
 const [lssueValue, setLssueValue] = useState("انتخاب کنید")
 const [story, setStory] = useState(false)
 const [storyValue, setStoryValue] = useState("انتخاب کنید")
 const Search = (e) => {
  e.preventDefault()
  if (lssueValue !== "انتخاب کنید" || storyValue !== "انتخاب کنید") {
  } else {
   Alert({
    icon: 'warning',
    title: 'حداقل یکی از فیلد ها را پر کنید',
   })
  }
 }
 return (
  <>
   <Header />

   <div className="my-10 container px-2">
    <div className="w-full grid grid-cols-4 items-center justify-center">
     <b></b>
     <form onSubmit={Search} className='col-span-2 space-y-5'>
      <div className="relative">
       <div className={`grid grid-cols-4 items-center bg-gray-400 px-3 py-2 justify-between shadow-2xl rounded-lg ${lssue ? "rounded-bl-none" : null}`}>
        <h3 className='text-lg font-dana-Bold text-center flex gap-3 items-center'>
         <svg className="w-6 h-6">
          <use href='#Jet'></use>
         </svg>
         موضوع کتاب :
        </h3>
        <div className="flex justify-between col-span-3 items-center cursor-pointer"
         onClick={() => setLssue(lssue => !lssue)}
        >
         <p class="">{lssueValue}</p>

         <div className="ltr">
          <svg className={`${lssue ? "w-4 h-4 rotate-[-90deg]" : "w-4 h-4"}`}>
           <use href='#arrow-left'></use>
          </svg>
         </div>
        </div>
       </div>
       <ul className={` ${lssue ? ("absolute z-50 w-3/4 space-y-3 left-0 float-left bg-gray-500 rounded-b-lg px-3 py-2 text-white") : ("hidden")}`}>
        <li onClick={() => {
         setLssueValue("خودپروری")
         setLssue(lssue => !lssue)
        }}>خودپروری</li>
        <li onClick={() => {
         setLssueValue("سیاسی")
         setLssue(lssue => !lssue)
        }}>سیاسی</li>
        <li onClick={() => {
         setLssueValue("فلسفی")
         setLssue(lssue => !lssue)
        }}>فلسفی</li>
       </ul>
      </div>
      <div className="relative">
       <div className={`grid grid-cols-4 items-center bg-gray-400 px-3 py-2 justify-between shadow-2xl rounded-lg ${story ? "rounded-bl-none" : null}`}>
        <h3 className='text-lg font-dana-Bold text-center flex gap-3 items-center'>
         <svg className="w-6 h-6">
          <use href='#Jet'></use>
         </svg>
         داستان کتاب :
        </h3>
        <div className="flex justify-between col-span-3 items-center cursor-pointer"
         onClick={() => setStory(story => !story)}
        >
         <p class="">{storyValue}</p>

         <div className="ltr">
          <svg className={`${story ? "w-4 h-4 rotate-[-90deg]" : "w-4 h-4"}`}>
           <use href='#arrow-left'></use>
          </svg>
         </div>
        </div>
       </div>
       <ul className={` ${story ? ("absolute z-50 w-3/4 space-y-3 left-0 float-left bg-gray-500 rounded-b-lg px-3 py-2 text-white") : ("hidden")}`}>
        <li onClick={() => {
         setStoryValue("داستان عاشقانه")
         setStory(story => !story)
        }}>داستان عاشقانه</li>
        <li onClick={() => {
         setStoryValue("داستان فانتزی")
         setStory(story => !story)
        }}>داستان فانتزی</li>
        <li onClick={() => {
         setStoryValue("داستان روانشناسانه")
         setStory(story => !story)
        }}>داستان روانشناسانه</li>
       </ul>
      </div>
      <div className="flex justify-center">
       <button className='flex gap-2 items-center bg-gray-400 py-2 px-3 rounded-3xl text-white'>
        جستجو
        <svg className="w-6 h-6 text-white">
         <use href='#Search'></use>
        </svg>
       </button>
      </div>
     </form>
    </div>
   </div>
  </>
 )
}
