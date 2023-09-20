import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import Alert from '@/components/SweetAlert'

export default function ForgetPassword() {
 const [InptValue, InptBinding, InptReset] = useInput("")
 let pattern = { username: /^(?!.*[$#%@])[A-Za-z0-9]{5,}$/, email: /^(?=.*@(yahoo|email|gmail)\.com).*$/ }

 const ResetPassHandler = (e) => {
  e.preventDefault()
  if (InptValue.length) {
   if (pattern.username.test(InptValue)) {
    Alert({
     icon: 'success',
     title: 'لینک تعویض رمز عبور به ایمیل شما ارسال شد',
    })
    InptReset()
   } else if (pattern.email.test(InptValue)) {
    Alert({
     icon: 'success',
     title: 'لینک تعویض رمز عبور به ایمیل شما ارسال شد',
    })
    InptReset()
   } else {
    Alert({
     icon: 'error',
     title: 'مقدار وارد شده صحیح نیست',
    })
    InptReset()
   }
  } else {
   Alert({
    icon: 'warning',
    title: 'فیلد مورد نظر را پر کنید',
   })
   InptReset()
  }
 }
 return (
  <>
   <div className="my-8 container p-5 grid md:grid-cols-4 items-center justify-center">
    <b></b>
    <form onSubmit={ResetPassHandler} className='grid col-span-2 gap-5 p-5 rounded-xl border-2 border-gray-400 shadow-2xl bg-white'>
     <div className="grid gap-1">
      <label htmlFor="">ادرس ایمیل یا نام کاربری خود را وارد کنید : </label>
      <input {...InptBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white' placeholder='....' type="text" />
     </div>
     <div className="grid md:grid-cols-2 gap-3 md:text-center items-center">
      <p>
       <Link href={"/Regester"} className='w-fit hover:text-purple-700'>حساب کاربری ندارید؟ ثـبت نام</Link>
      </p>
      <p>
       <Link href={"/Login"} className=' hover:text-purple-700'>حساب کاربری دارید؟ ورود</Link>
      </p>
     </div>
     <input type="submit" value={"ورود"} className='cursor-pointer border border-gray-500 rounded-lg py-2 hover:bg-gray-500 transition font-dana-Bold text-lg hover:text-white' />
    </form>
   </div>
  </>
 )
}
