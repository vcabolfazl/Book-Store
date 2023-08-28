import ProductCard from '@/components/ProductCard'
import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'

export default function SearchValue() {
 return (
  <>
   <Header />
   
   <div className="container px-2 my-10">
    <SectionHeader
     title={"نتایج جستجو شما"}
    />
    <div className="my-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
     <ProductCard />
    </div>
   </div>
  </>
 )
}
