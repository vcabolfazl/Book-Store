import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'

export default function Regester() {
 const [userNameValue, usernameBinding, userNameReset] = useInput("")
 const [phoneValue, phoneBinding, phoneReset] = useInput("")
 const [emailValue, emailBinding, emailReset] = useInput("")
 const [passwordValue, passwordBinding, passwordReset] = useInput("")
 const [rePasswordValue, rePasswordBinding, rePasswordReset] = useInput("")
 const RegesterValid = (e) => {
  e.preventDefault()
  let pattern = { username: /^(?!.*[$#%@])[A-Za-z0-9]{5,}$/, phone: /^09\d{0,9}$/, email: /^(?=.*@(yahoo|email|gmail)\.com).*$/, password: /^(?!\s)[\S]{8,}$/ }
  if (userNameValue.length
   && pattern.username.test(userNameValue)
   && pattern.phone.test(phoneValue)
   && pattern.email.test(emailValue)
   && pattern.password.test(passwordValue)
   && passwordValue === rePasswordValue) {
   Alert({
    icon: 'success',
    title: 'ثـبت نام با موفقیت انجام شد',
   })
   userNameReset()
   phoneReset()
   emailReset()
   passwordReset()
   rePasswordReset()
  } else {
   Alert({
    icon: 'error',
    title: 'اطلاعات وارد شده اشتباه میباشد',
   })
   userNameReset()
   phoneReset()
   emailReset()
   passwordReset()
   rePasswordReset()
  }
 }
 return (
  <>
   <Header />
   <div className="my-8 container p-5 grid md:grid-cols-4 items-center justify-center">
    <b></b>
    <form onSubmit={RegesterValid} className='grid md:grid-cols-2 col-span-2 gap-5 p-5 rounded-xl border-2 border-gray-400 shadow-2xl bg-white'>
     <div className="grid gap-1">
      <label htmlFor="">نام و نام خانوادگی : </label>
      <input className='bg-gray-400 px-3 py-2 rounded-md outline-none text-zinc-800 placeholder:text-white placeholder:text-sm' placeholder='به فارسی وارد کنید' type="text" required />
     </div>
     <div className="grid gap-1">
      <label htmlFor="">نام کاربری : </label>
      <input {...usernameBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white placeholder:font-dana-Medium placeholder:text-sm' placeholder='از کاراکتر هایی مانند * / % استفاده نکنید' type="text" required />
     </div>
     <div className="grid gap-1">
      <label htmlFor="">شماره تماس : </label>
      <input {...phoneBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none  text-zinc-800 ltr placeholder:text-right placeholder:text-white placeholder:font-dana-Medium placeholder:text-sm' placeholder='مثال : 09044775292' type="number" required />
     </div>
     <div className="grid gap-1">
      <label htmlFor="">ادرس ایمیل : </label>
      <input {...emailBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr  placeholder:text-white' placeholder='KetabKhanevade@gmail.com' type="email" required />
     </div>
     <div className="grid gap-1">
      <label htmlFor="">رمز عبور : </label>
      <input {...passwordBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white placeholder:font-dana-Medium placeholder:text-sm' placeholder='حداقل 8 کاراکتر وارد کنید' type="text" required />
     </div>
     <div className="grid gap-1">
      <label htmlFor="">تکرار رمز عبور : </label>
      <input {...rePasswordBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white' placeholder='....' type="password" required />
     </div>
     <input type="submit" value={"ورود"} className='cursor-pointer border border-gray-500 rounded-lg py-2 hover:bg-gray-500 transition font-dana-Bold text-lg hover:text-white' />
     <div className="grid gap-3 md:text-center items-center">
      <p>
       <Link href={"/Login"} className=' hover:text-purple-700'>حساب کاربری دارید؟ ورود</Link>
      </p>
     </div>
    </form>
   </div>
  </>
 )
}
