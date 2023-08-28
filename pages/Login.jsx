import React from 'react'
import useInput from '@/Hooks/useInput'
import Header from '@/components/Header'
import Link from 'next/link'
import Swal from 'sweetalert2'

export default function Login() {
 const [userNameValue, usernameBinding, userNameReset] = useInput("")
 const [passwordValue, passwordBinding, passwordReset] = useInput("")
 const subLogin = (e) => {
  e.preventDefault()
  let pattern = { userName: /^(?!.*[$#%@])[A-Za-z0-9]{5,}$/, password: /^(?!\s)[\S]{8,}$/ }
  if (userNameValue.length >= 5 && passwordValue.length >= 8) {
   if (pattern.userName.test(userNameValue) && pattern.password.test(passwordValue)) {
    Alert({
     icon: 'success',
     title: 'خوش آمدید',

    })
    userNameReset()
    passwordReset()

   } else {
    Alert({
     icon: 'error',
     title: 'اطلاعات وارد شده اشتباه میباشد',

    })
    userNameReset()
    passwordReset()
   }
  } else {
   Alert({
    icon: 'warning',
    title: 'لطفا فرم را تکمیل کنید',
   })
  }
 }
 return (
  <>
   <Header />
   <div className="my-8 container grid md:grid-cols-4 items-center justify-center">
    <b></b>
    <form onSubmit={subLogin} className='grid col-span-2 gap-5 p-5 rounded-xl border-2 border-gray-400 shadow-2xl bg-white'>
     <div className="grid gap-1">
      <label htmlFor="username">نام کاربری : </label>
      <input id='username' {...usernameBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white' placeholder='....' type="text" minLength={5} required />
     </div>
     <div className="grid gap-1">
      <label htmlFor="password">رمز عبور : </label>
      <input id='password' {...passwordBinding} className='bg-gray-400 px-3 py-2 rounded-md outline-none font-mono text-zinc-800 ltr placeholder:text-right placeholder:text-white' placeholder='....' type="password" minLength={8} required />
     </div>
     <div className="grid md:grid-cols-2 gap-3 md:text-center items-center">
      <p>
       <Link href={"/Regester"} className='w-fit hover:text-purple-700'>حساب کاربری ندارید؟ ثـبت نام</Link>
      </p>
      <p>
       <Link href={"/ForgetPassword"} className='w-fit hover:text-purple-700'>رمز عبور خود را فراموش کرده‌اید ؟ </Link>
      </p>
     </div>
     <input type="submit" value={"ورود"} className='cursor-pointer border border-gray-500 rounded-lg py-2 hover:bg-gray-500 transition font-dana-Bold text-lg hover:text-white' />
    </form>
   </div>
  </>
 )
}