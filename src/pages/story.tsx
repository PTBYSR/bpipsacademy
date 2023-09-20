
import Card from '@/components/common/Card/Card'
import Navbar from '@/components/layouts/Navbar/Navbar'
import Button from '@/components/ui/Button/Button'
import React from 'react'
import { services } from '../../db/Services/services'
import Testimonial from '@/components/interface/Testimonial/Testimonial'
import BlogCard from '@/components/common/BlogCard/BlogCard'
import Banner from '@/components/common/Banner/Banner'
import Footer from '@/components/layouts/Footer/Footer'

const story = () => {
  return (
    <div className='bg-[#2C2D48]'>
      <Footer />
      <Banner />
      <BlogCard />
      <Navbar />
      <div className="bg-[#2C2D48]">
        <Testimonial />

      </div>
      {
        services.map((x,index) => (
          <Card key={x.id} title={x.title} img={x.img} label={x.label} id={x.id}/>
        ))
      }
    </div>
  )
}

export default story