import Image from 'next/image'
import React from 'react'
import img from '../../../../public/red-arrow.svg'
import Button from '@/components/ui/Button/Button'

const Banner = () => {
  return (
    <div className='relative md:m-5 px-3 md:px-10 bg-violet md:py-0 py-20 md:h-[500px] flex justify-center items-center flex-col gap-20'>
        <div className='z-[100] flex justify-center items-center flex-col' >
            <div className='font-prompt font-bold z-[10] text-white text-2xl md:text-4xl uppercase md:leading-[60px] leading-[45px] text-center'> Secure your seat and become profitable for life</div>
            {/* <div className='text-center mt-5 text-white text-opacity-60 md:w-1/2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eos facere voluptatem ut doloremque harum totam eius commodi quasi corporis?
            </div> */}
        </div>
        <Button href="/join">Join the hunt</Button>
        <div className='-z-[] absolute left-10 bottom-[140px] top-[100px] md:top-auto md:w-auto w-[100px]'><Image src={img} alt="" /></div>
    </div>
  )
}

export default Banner