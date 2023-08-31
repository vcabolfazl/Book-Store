import useInput from '@/Hooks/useInput'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [menuScroll, setMenuScroll] = useState(true)
    const [menuDatas, setMenuDatas] = useState([])
    const getAllMenu = async () => {
        const res = await fetch("https://bookstoreserver.iran.liara.run/menu")
        const datas = await res.json()
        setMenuDatas(datas)
    }

    const scrollHandler = () => window.pageYOffset !== 0 ? setMenuScroll(false) : setMenuScroll(true)

    const [SearchValue, SearchBilding] = useInput("")

    const router = useRouter()
    const SearchHandler = (e) => {
        e.preventDefault()
        if (SearchValue.length) {
            router.push(`/Search/${SearchValue}`);

        } else {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'لطفا مقداری برای جستجو وارد کنید',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    useEffect(() => {
        getAllMenu()
    }, [])
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <>
            <div className='mb-28 md:mb-56 transition-all'>
                {/* --> Start mobile Menu */}
                <div className={`${showMenu ? "block z-50 inset-0 overlay fixed h-full p-3 w-2/3 sm:w-1/2 overflow-y-auto right-0 top-0 bg-white" : "hidden"}`}>
                    {/*  Start Mobile Menu Header  */}
                    <div className="flex justify-between">
                        {/* --> Logo Inside The Menu <-- */}
                        <img src="/assets/Images/Logo.png" className='h-12' alt="" />
                        <svg className="w-4 h-4 flex items-center" onClick={() => setShowMenu(status => !status)}>
                            <use href='#x-mark'></use>
                        </svg>
                    </div>
                    {/* End Mobile Menu Header */}

                    {/* Mobile Menu Search Box */}
                    <form onSubmit={SearchHandler} className='w-full my-5 bg-gray-400 flex items-center justify-between px-3 py-2 rounded-xl text-sm'>
                        <input type="search" {...SearchBilding} className='bg-inherit outline-none w-full text-zinc-700 placeholder:text-zinc-700 font-dana-Bold' placeholder='دنبال چی میگردی ؟' name="" id="" />
                        <svg className="w-8 h-8 text-gray-200" onClick={SearchHandler}>
                            <use href='#Search'></use>
                        </svg>
                    </form>

                    {/* Start Mobile Menu Body */}
                    <div className="my-2">
                        <ul className='space-y-5'>
                            {
                                // menuDatas 
                                menuDatas.map(menu => (
                                    <li className='transitionSlow  group hover:border-b border-dashed hover:pb-2 border-zinc-700'>
                                        <div className="flex gap-x-1">
                                            <p href={"/"}>دسته‌بندی موضوعی</p>
                                            <svg className="w-3 h-3 mt-2 group-hover:rotate-[-90deg]">
                                                <use href='#arrow-left'></use>
                                            </svg>
                                        </div>
                                        <ul className='group-hover:block gap-x-3 p-1 text-sm hidden'>
                                            <li>روانشناسی</li>
                                            <li>فلسفی</li>
                                            <li>داستان کوتاه</li>
                                            <li>تاریخی</li>
                                            <li>سیاسی</li>
                                            <li>خودپروری</li>
                                        </ul>
                                    </li>

                                ))
                            }
                            {/* <li className='transitionSlow group hover:border-b border-dashed hover:pb-2 border-zinc-700'>
                                <div className="flex gap-x-1">
                                    <p href={"/"} >انواع داستان</p>
                                    <svg className="w-3 h-3 mt-2 group-hover:rotate-[-90deg]">
                                        <use href='#arrow-left'></use>
                                    </svg>
                                </div>
                                <ul className='group-hover:block gap-x-3 text-sm p-1 hidden'>
                                    <li>روانشناسی</li>
                                    <li>فلسفی</li>
                                    <li>داستان کوتاه</li>
                                    <li>تاریخی</li>
                                    <li>سیاسی</li>
                                    <li>خودپروری</li>
                                </ul>
                            </li>
                            <li>کتاب‌های برگزیده</li>
                            <li>معرفی کتاب</li> */}
                        </ul>
                    </div>
                    {/* End Mobile Menu Body */}
                    <hr />
                    {/* Start Mobile Menu Footer */}
                    <div className="my-2">
                        <ul className='w-full text-sm'>
                            <Link href={"/"}>
                                <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
                                    <p>ایمیل : </p>
                                    <p className='py-1 border-b '>KetabKhanevede@gmail.com</p>
                                </li>
                            </Link>

                            <Link href={"/"}>
                                <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
                                    <p>پشتیبانی تلگرام : </p>
                                    <p className='py-1 border-b '>KetabKhanevede@</p>
                                </li>
                            </Link>

                            <Link href={"/"}>
                                <li className='w-full flex items-center justify-between gap-1 my-1 flex-wrap'>
                                    <p>شماره تماس : </p>
                                    <p className='py-1 border-b ltr'>0904 - 477 - 2592</p>
                                </li>
                            </Link>
                            <li className='w-full flex justify-center my-2'>
                                <Link href={"/"} className='px-3 py-2 rounded-r-xl bg-stone-800/40 text-stone-800'>
                                    <div className="relative flex  items-center gap-2">
                                        <span className=''>ورود</span>
                                        <svg className="w-6 h-6 inline-block">
                                            <use href='#Login'></use>
                                        </svg>
                                    </div>
                                </Link>
                                <Link href={"/"} className='px-3 py-2 rounded-l-xl  bg-stone-800   text-white'>
                                    <div className="relative flex  items-center gap-1">
                                        <span className=''>عضویت</span>
                                        <svg className="w-6 h-6 inline-block">
                                            <use href='#user-plus'></use>
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* End Mobile Menu Footer */}
                </div>
                {/* End mobile Menu <-- */}

                {/* --> Start Header */}
                <header className='fixed w-full top-0 z-40'>

                    <div className={`m-0 md:m-auto ${menuScroll ? "container" : ""}`}>

                        {/* Start Top Header */}
                        <div className={`grid grid-cols-3 md:grid-cols-4 items-center
           justify-between bg-white shadow-2xl sm:px-8 sm:py-6 px-5 py-3 rounded-2xl ${menuScroll ? "mt-5 mx-2 rounded-2xl" : "mt-0 rounded-none md:rounded-b-2xl"}`}>

                            {/* --> Hamburger Menu Icon <-- */}
                            <div className="block md:hidden">
                                <svg className="w-8 h-8" onClick={() => setShowMenu(status => !status)}>
                                    <use href='#Menu'></use>
                                </svg>
                            </div>

                            {/* Start Header Logo */}
                            <Link href={"/"}>
                                <div className="flex items-center justify-center md:justify-start gap-x-2">
                                    <img src="/assets/Images/Logo.png" className='h-12' alt="" />
                                    <h2 className='text-3xl font-dana-Bold mt-4 hidden md:block'>کتاب خانواده</h2>
                                </div>
                            </Link>
                            {/* End Header Logo */}

                            {/* Start Header Search Box */}
                            <div className="hidden md:block col-span-2">
                                <form onSubmit={SearchHandler} className='w-full bg-gray-400 flex items-center justify-between px-4 py-3 rounded-xl'>
                                    <input type="search" {...SearchBilding} className='bg-inherit outline-none w-full text-zinc-700 placeholder:text-zinc-700 font-dana-Bold' placeholder='دنبال چی میگردی ؟' name="" id="" />
                                    <svg className="w-8 h-8 text-gray-200" onClick={SearchHandler}>
                                        <use href='#Search'></use>
                                    </svg>
                                </form>
                            </div>
                            {/* End Header Search Box */}

                            {/* Start Login Btn */}
                            <div className="hidden md:flex w-full items-center justify-end">
                                <Link href={"/Login"} className='px-3 py-2 rounded-r-xl bg-stone-800/40 text-stone-800'>
                                    <div className="relative flex  items-center gap-2">
                                        <span className='hidden lg:block'>ورود</span>
                                        <svg className="w-6 h-6 inline-block">
                                            <use href='#Login'></use>
                                        </svg>
                                    </div>
                                </Link>
                                <Link href={"/Regester"} className='px-3 py-2 rounded-l-xl  bg-stone-800   text-white'>
                                    <div className="relative flex  items-center gap-1">
                                        <span className='hidden lg:block'>عضویت</span>
                                        <svg className="w-6 h-6 inline-block">
                                            <use href='#user-plus'></use>
                                        </svg>
                                    </div>
                                </Link>

                            </div>
                            {/* Mobile Login Btn */}
                            <div className="block md:hidden text-left">
                                <svg className="w-8 h-8 left-0">
                                    <use href='#Login'></use>
                                </svg>
                            </div>
                            {/* End Login btn */}
                        </div>
                        {/* End Top Header */}


                        {/* Bottn to Show the Submenu in Scroll */}
                        <div className={`${menuScroll ? "hidden" : "mx-10 md:inline-block bg-white shadow-2xl hidden px-2 py-1 rounded-b-2xl cursor-pointer"}`} onClick={() => setMenuScroll(true)}>
                            <svg className="w-4 h-4 rotate-[-90deg]">
                                <use href='#arrow-left'></use>
                            </svg>
                        </div>

                        {/* Start SubMenu */}
                        <div className={menuScroll ? "block" : "hidden"}>
                            <div className="hidden z-50  lg:flex justify-between items-center mx-12 bg-zinc-300 shadow-2xl px-6 py-6 rounded-b-2xl text-zinc-800">
                                <ul className='flex gap-x-5 overflow-x-auto'>
                                    <li className='font-dana-Bold text-gray-900 font-bold'>
                                        <Link href={"/"}>
                                            کتاب خانواده
                                        </Link>
                                    </li>
                                    {
                                        menuDatas ?
                                            menuDatas.map(menu => (
                                                <li className='flex transitionSlow items-centerp gap-x-1 group hover:border-b border-dashed hover:pb-2 border-zinc-700'>
                                                    <Link href={menu.src}>{menu.name}</Link>
                                                    {
                                                        menu.subMenu ? (
                                                            <>
                                                                <span className='hidden group-hover:block'> : </span>
                                                                <ul className='group-hover:flex gap-x-3 p-1 text-sm hidden'>
                                                                    {
                                                                        menu.subMenu.map(submenu => (
                                                                            <li>
                                                                                <Link href={submenu.src}>
                                                                                    {submenu.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                                <svg className="w-3 h-3 mt-2">
                                                                    <use href='#arrow-left'></use>
                                                                </svg>
                                                            </>
                                                        ) : null
                                                    }
                                                </li>
                                            ))
                                            : null
                                    }
                                    {/* <li className='flex transitionSlow items-centerp gap-x-1 group hover:border-b border-dashed hover:pb-2 border-zinc-700'>
                                        <Link href={"/Books/انواع داستان"} >انواع داستان</Link>
                                        <span className='hidden group-hover:block'> : </span>
                                        <ul className='group-hover:flex gap-x-3 text-sm p-1 hidden'>
                                            <li>
                                                <Link href={"/Books/روانشناسی"}>
                                                    روانشناسی
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/Books/فلسفی"}>
                                                    فلسفی
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/Books/داستان کوتاه"}>
                                                    داستان کوتاه
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/Books/تاریخی"}>
                                                    تاریخی
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/Books/سیاسی"}>
                                                    سیاسی
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/Books/خودپروری"}>
                                                    خودپروری
                                                </Link>
                                            </li>
                                        </ul>
                                        <svg className="w-3 h-3 mt-2">
                                            <use href='#arrow-left'></use>
                                        </svg>
                                    </li>
                                    <li>
                                        <Link href={"/Books/کتاب‌های برگزیده"}>
                                            کتاب‌های برگزیده
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/introduction"}>
                                            معرفی کتاب
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        {/* End SubMenu */}
                    </div >
                </header >
                {/* End Header <-- */}

                {/* --> Menu Overlay <-- */}
                <div className={`${showMenu ? "fixed inset-0 h-full bg-black/40 z-10" : "hidden"}`} onClick={() => setShowMenu(status => !status)}></div>

            </div>
        </>
    )
}
