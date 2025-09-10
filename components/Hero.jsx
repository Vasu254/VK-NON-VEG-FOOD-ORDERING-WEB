'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    return (
        <div className='mx-6'>
  <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
    
    {/* Hero Section */}
    <div className='relative flex-1 flex flex-col bg-orange-100 rounded-3xl xl:min-h-100 group overflow-hidden'
         style={{backgroundImage: `url(${assets.hero_model_img.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='relative z-10 p-5 sm:p-16 h-full flex flex-col justify-center'>
        <div className='inline-flex items-center gap-3 bg-orange-300 text-orange-700 pr-4 p-1 rounded-full text-xs sm:text-sm mb-4 shadow-lg'>
          <span className='bg-orange-700 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs'>NEW</span> Free Delivery on First Order!
        </div>
        <h2 className='text-3xl sm:text-5xl leading-[1.2] my-3 font-bold text-white max-w-xs sm:max-w-md drop-shadow-2xl' style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
          Delicious Food, Anytime, Anywhere.
        </h2>
        <div className='text-white text-sm font-medium mt-4 sm:mt-8 drop-shadow-xl' style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
          <p>Starting at just</p>
          <p className='text-3xl font-bold'>₹99</p>
        </div>
        <button className='bg-orange-600 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-orange-700 hover:scale-105 active:scale-95 transition shadow-xl border-2 border-white'>
          ORDER NOW
        </button>
      </div>
    </div>

    {/* Side Info Section */}
    <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
      <div className='flex-1 flex items-center justify-between w-full bg-green-200 rounded-3xl p-6 px-8 group'>
        <div>
          <p className='text-3xl font-bold bg-gradient-to-r from-slate-800 to-green-700 bg-clip-text text-transparent max-w-40'>Popular Dishes</p>
          <p className='flex items-center gap-1 mt-4'>View Menu <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
        </div>
        <Image className='w-32 rounded-lg' src={assets.hero_product_img1} alt="Popular Dish" width={128} height={128} />
      </div>

      <div className='flex-1 flex items-center justify-between w-full bg-pink-200 rounded-3xl p-6 px-8 group'>
        <div>
          <p className='text-3xl font-bold bg-gradient-to-r from-slate-800 to-pink-600 bg-clip-text text-transparent max-w-40'>Special Offers</p>
          <p className='flex items-center gap-1 mt-4'>Grab Now <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
        </div>
        <Image className='w-32 rounded-lg' src={assets.hero_product_img2} alt="Special Offer" width={128} height={128} />
      </div>
    </div>
  </div>

  {/* Categories Section */}
  <CategoriesMarquee />
</div>

    )
}

export default Hero