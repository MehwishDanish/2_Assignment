import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/image_jpg file)] bg left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%"}}
    >
    <Navbar />
    
    <div className='container grid lg:grid-col-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
        <div>
          <p>I'm</p>
          <p>Mehwish</p>
          <p>Danish</p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Hero
