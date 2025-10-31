import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Photo" />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Trendify 354 Fashion Lane <br />Los Angeles, SC 45678, USA</p>
          <p className='text-gray-500'>Tel: (+11)-558-669-447 <br />Email: contact.trendify@info.com</p>
          <p className='text-xl font-semibold text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Join us at Trendify! Explore job openings and help shape the future of fashion. <br />Explore our current job openings and discover how you can contribute to our mission of setting trends and creating style.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-gray-800 hover:text-white'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
