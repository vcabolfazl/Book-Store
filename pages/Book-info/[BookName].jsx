import Breadcrumb from '@/components/Breadcrumb'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import Slider from '@/components/Slider'
import React, { useState } from 'react'

export default function BookName() {
 const [num, setNum] = useState(1)
 return (
  <>
   <Header />
   <div className="container my-10 px-2">
    {/* --> Start Breadcrumb */}
    <div className="text-xs md:text-base">
     <Breadcrumb
      Links={[
       {
        id: 1, title: "کتاب ها", href: "Books/all"
       },
       {
        id: 2, title: "کتاب های فلسفه و روانشناسی"
       },

      ]}

     />
    </div>
    {/* End Breadcrumb <-- */}

    <div className="grid grid-cols-1 md:grid-cols-6 items-cente gap-y-4 bg-white rounded--txl shadow-2xl p-5">

     {/* Image Product */}
     <div className="col-span-1 flex items-center justify-center">
      <img src="/assets/Images/products/1984.jpg" alt="" />
     </div>

     {/* Title Product */}
     <div className="text-lg md:col-span-2 grid justify-center items-start">
      <SectionHeader
       title={"کتاب 1984"}
      />
      <ul className='list-disc text-zinc-700 px-10'>
       <li>رده‌بندی کتاب : فلانی</li>
       <li>نویسـنده : فلانی</li>
       <li>سال انتشـار : فلانی</li>
       <li>انتشـارات : فلانی</li>
       <li>زبان نوشتار : فلانی</li>
      </ul>
     </div>

     {/* about Product */}
     <div className="md:col-span-3 font-dana-Regular grid items-start">
      <SectionHeader
       title={"معرفی"}
      />
      <p>کتاب 48 قانون قدرت راهنمایی است عملی برای تمام کسانی که قدرت را می‌خواهند، مشاهده می‌کنند و در پی‌آنند که در برابر قدرت مسلح شوند. قوانین مطرح شده در این کتاب همگی برگرفته از سیاستگذاران برجسته‌ی تاریخ سه‌هزار ساله‌ی بشری مانند ماکیاولی، سان تزو، ملکه الیزابت اول، هنری کیسینجر و غیره هستند. به هر کدام از قوانین این کتاب فصلی اختصاص داده شده است و به تشریح در رابطه با آن قانون سخن رفته است. عمق بسیار مباحث مطرح شده در کتاب دلیل اصلی حجم بالای این کتاب است. هر کدام از فصل‌های این کتاب با بیان نمونه‌هایی مستند از بکارگیری قانون مطرح شده توسط اشخاص و نتایج و تفسیر قوانین کامل می‌شود و به خواننده دیدی عمیق از قانون ارائه شده ارزانی می‌دارد.</p>
     </div>

    </div>
    {/* --> Start Below the main box */}
    <div className="w-full grid md:grid-cols-2 gap-y-5 justify-between bg-gray-400 p-5 rounded-b-xl">
     <div className="grid items-center md:grid-cols-2 gap-5 text-white">
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
     <div className="flex items-center justify-end gap-x-4">
      <div className="grid grid-cols-3 border rounded-lg shadow-2xl">
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
      <button className='px-5 py-3 bg-rose-600 text-white rounded-md font-dana-Bold text-sm md:text-xl'>
       افزون به سبد خرید
      </button>
     </div>
    </div>
    {/* End Below the main box <-- */}

    {/* --> Start Similar products slider */}
    <div className="my-10">
     <SectionHeader
      title={"کتاب های مشابه"}
      btnTitle={"کتاب های تاریخی"}
     />
     <Slider
      sm={2} />
    </div>
    {/* End Similar products slider <-- */}

    {/* --> Start Comments Section*/}
    <div className="">

     <SectionHeader
      title={"دیدگاه‌هــا"}
      btnTitle={"مشاهده همه دیدگاه‌ها"}
     />
     <div className="my-10 mx-10 flex flex-wrap gap-3 ">

      {/* Comment Box */}
      <div className="w-fit border leading-10 border-zinc-700 border-dashed rounded-lg px-4 py-3">
       <div className="flex gap-x-5 text-xs md:text-sm mb-2">
        <span className='text-green-600'>خریدار کالا</span>
        <div className='flex gap-2 items-center text-purple-600'>
         <span className=''>خرید این محصول را پیشنهاد نمیکنم</span>
         <svg className='w-6 h-6 rotate-180'>
          <use href='#Like'></use>
         </svg>
        </div>
       </div>
       <h4 className='text-lg font-dana-Bold'>ابوالفضل شریفی</h4>
       <p className='font-dana-Regular'> کتاب بسیار عالی ❤😍</p>
      </div>

      <div className="w-fit border leading-10 border-zinc-700 border-dashed rounded-lg px-4 py-3">
       <div className="flex gap-x-5 text-xs md:text-sm mb-2">
       </div>
       <h4 className='text-lg font-dana-Bold'>ابوالفضل شریفی</h4>
       <p className='font-dana-Regular'> کتاب سالم به دستم رسید.موضوع جالبی داره</p>
      </div>

      <div className="w-fit border leading-10 border-zinc-700 border-dashed rounded-lg px-4 py-3">
       <div className="flex gap-x-5 text-sm mb-2">
        <div className="flex gap-x-5 text-xs md:text-sm mb-2">
         <span className='text-white bg-green-600 px-2 flex items-center rounded-lg'>خریدار </span>
         <div className='flex gap-2 items-center text-purple-600'>
          <span className=''>خرید این محصول را پیشنهاد میکنم</span>
          <svg className='w-6 h-6'>
           <use href='#Like'></use>
          </svg>
         </div>
        </div>
       </div>
       <h4 className='text-lg font-dana-Bold'>ابوالفضل شریفی</h4>
       <p className='font-dana-Regular'> این که بگم کتاب خوبی بود یا بد درست نیست چون به ذایقه افراد بستگی داره! ولی کتاب با بسته بندی خوب و مرتب به دستم رسید متشکرم </p>
      </div>

     </div>
     <div className=" space-y-5">
      <SectionHeader
       title={"دیدگاه خود را ثـبت کنید"}
      />
      {/* Form Comment box */}
      <form action="" className='grid'>
       <textarea className='w-full h-52 border border-dashed p-5 font-dana-Bold border-gray-400 rounded-3xl max-h-52 outline-none focus:border-solid focus:border-2 shadow-2xl' placeholder='ثـبت نظر'></textarea>
       <input type="submit" value={"ثـبت دیدگاه"} className='w-fit bg-green-700 px-3 py-2 rounded-md text-white font-dana-Bold mx-auto my-4' />
      </form>
     </div>
    </div>
    {/* End Comment Section <-- */}
   </div>

  </>
 )
}
