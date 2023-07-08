
import Image from 'next/image'
import React from 'react'
import log from '../../assets/log.webp'
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
function page() {
  return (
    <div className='flex my-10 justify-around'>
      

<div>
  <Image src={log} alt='a'></Image>
</div>



<div>
  <ul className='flex space-x-6'>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
  </ul>
</div>


<div className='flex items-center'>
<BiSearchAlt />
<input type='text' placeholder='what are you looking for'/>
</div>


<div className='relative'>
  <span className=' absolute flex -top-2 -right-2 items-center justify-center bg-red-600 rounded-full h-4 w-4 text-white text-sm'>5</span>
  <AiOutlineShoppingCart className='h-8 w-8' />
</div>
    </div>







  )
}

export default page
