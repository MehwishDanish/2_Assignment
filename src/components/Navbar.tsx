import React from 'react'

const navbar = () => {
  return (
    <div className='container pt-8'>
      <div  className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Mehwish Danish</div>
            <ul  className='gap-10 lg:gap-16 hidde md: flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li  className='menuLink'><a href='#project'>Project</a></li>
                <li className='menuLink'><a href='#skills'>Skills</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            
        </div>



    </div>   


      
   
      
    
  )
}

export default navbar


