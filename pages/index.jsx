import Button from '@/components/Button'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import SingleSlider from '@/components/SingleSlider'
import Slider from '@/components/Slider'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container px-2">

        {/* --> Start Landing Section */}
        <div className="grid md:grid-cols-2 gap-5 items-center my-10 rtl md:ltr bg-white px-7 py-5 shadow-2xl rounded-2xl">

          {/* Start left Side Section */}
          <div className="left">
            <img src="/assets/Images/1692112838666.gif" alt="" className='rounded-full' />
          </div>
          {/* End left Side Section */}

          {/* Start Right Side Section */}
          <div className="right rtl">
            <h2 className='text-xl sm:text-2xl md:text-3xl xl:text-5xl font-dana-Bold leading-loose'>
              <p>با خواندن کتاب, </p>
              دنیای جدیدی را کشف کنید</h2>
            <Link href="/">
              <button className='flex gap-4 mx-auto md:mx-0 my-5 items-center bg-gray-400 py-4 px-5 rounded-2xl text-lg md:text-xl text-white font-dana-Bold'>
                کتاب های محبوب
                <svg className="w-6 h-6">
                  <use href='#Jet'></use>
                </svg>
              </button>
            </Link>
            <div className="w-fit grid grid-cols-2 gap-5 mt-5 text-xs mxau md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10 px-2 py-1 bg-fuchsia-200 shadow-2xl rounded-xl">
                  <use href='#Book'></use>
                </svg>
                <p>بیش از 800 کتاب متنوع</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10 px-2 py-1 bg-fuchsia-200 shadow-2xl rounded-xl">
                  <use href='#money'></use>
                </svg>
                <p>ضمانت بازگشت وجه</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10 px-2 py-1 bg-fuchsia-200 shadow-2xl rounded-xl">
                  <use href='#shield-check'></use>
                </svg>
                <p>تضمین کیفیت و سلامت کالا</p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10 px-2 py-1 bg-fuchsia-200 shadow-2xl rounded-xl">
                  <use href='#Clock'></use>
                </svg>
                <p>پشتیبانی ۲۴ ساعته</p>
              </div>
            </div>
          </div>
          {/* End Right Side Section */}

        </div>
        {/* End Landing Section <-- */}

        {/* --> start New Books Slider */}
        <div className="my-4">
          <SectionHeader
            title={"جدیدترین کتاب ها"}
            btnTitle={"کتاب های بیشتر"}
          />
          <Slider
            sm={2}
          />
        </div>
        {/* End New Books Slider <-- */}

        {/* --> Start Banner Section ((1)) */}
        <div className="my-8 w-full grid md:grid-cols-2 gap-5">
          <div className="Banner1 p-2 sm:p-5 grid grid-cols-5 items-end justify-around rounded-2xl gap-6">
            <div className="col-span-4 leading-10">
              <h3 className='font-dana-Bold text-2xl'>لورم ایپسوم متن ساختگی</h3>
              <p className='font-dana-Regular line-clamp-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            </div>
            <div className="flex justify-end items-end">
              <Button
                title={"مشاهده"}
                icon={"box"}
              />
            </div>
          </div>
          <div className="Banner2 p-2 sm:p-5 grid grid-cols-5 items-end justify-around rounded-2xl gap-6">
            <div className="col-span-4 leading-10">
              <h3 className='font-dana-Bold text-2xl'>لورم ایپسوم متن ساختگی</h3>
              <p className='font-dana-Regular line-clamp-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            </div>
            <div className="flex justify-end items-end">
              <Button
                title={"مشاهده"}
                icon={"box"}
              />
            </div>
          </div>
          <div className="Banner3 p-2 sm:p-5 grid grid-cols-5 items-end justify-around rounded-2xl gap-6">
            <div className="col-span-4 leading-10">
              <h3 className='font-dana-Bold text-2xl'>لورم ایپسوم متن ساختگی</h3>
              <p className='font-dana-Regular line-clamp-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            </div>
            <div className="flex justify-end items-end">
              <Button
                title={"مشاهده"}
                icon={"box"}
              />
            </div>
          </div>
          <div className="Banner4 p-2 sm:p-5 grid grid-cols-5 items-end justify-around rounded-2xl gap-6">
            <div className="col-span-4 leading-10">
              <h3 className='font-dana-Bold text-2xl'>لورم ایپسوم متن ساختگی</h3>
              <p className='font-dana-Regular line-clamp-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            </div>
            <div className="flex justify-end items-end">
              <Button
                title={"مشاهده"}
                icon={"box"}
              />
            </div>
          </div>
        </div>
        {/* End Banner Section ((1)) <-- */}

        {/* --> Start Amazing Offer */}
        <div className="my-4 grid grid-cols-5 items-center p-3 md:p-5 bg-gray-700 rounded-2xl">
          <div className="col-span-2 md:col-span-1">
            <img src="/assets/Images/amazing1.png" alt="" />
          </div>
          <div className="col-span-3 md:col-span-4">
            <Slider
              sm={1} />
          </div>
        </div>
        {/* End Amazing Offer <-- */}

        {/* --> Start Banner Section ((2)) */}
        <div className="my-4 grid md:grid-cols-2 gap-3 md:gap-5">
          <img className='Banner rounded-xl' src="/assets/Images/Banner/11.jpg" alt="" />
          <img className='Banner rounded-xl' src="/assets/Images/Banner/33.jpg" alt="" />
          <img className='Banner rounded-xl' src="/assets/Images/Banner/44.jpg" alt="" />
          <img className='Banner rounded-xl' src="/assets/Images/Banner/22.jpg" alt="" />
        </div>
        {/* End Banner Section ((2)) <-- */}

        {/* --> Start Best Sell Book */}
        <div className="my-8">
          <SectionHeader
            title={"پرفروش‌ترین کتاب‌ها"}
            btnTitle={"کتاب های بیشتر"}
          />
          <Slider
            sm={2} />
        </div>
        {/* End Best Sell Book <-- */}

        {/* --> Start Single Slider */}
        <div className="my-4">
          <SingleSlider />
        </div>
        {/* End Single Slider */}
      </div>
    </>
  )
}
