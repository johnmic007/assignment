import Image from 'next/image'
import css from '../Home.module.css'
import logo from '../../../public/logo.png'
import tv from '../../../public/tv.png'
import mobileimg from '../../../public/mobile-0819.jpg'
import deviceImg from '../../../public/device-pile-in.png'
import child from '../../../public/child.png'
import Faq from '../faq'
import fs from 'fs'
import data from '../../../public/data/faq.json'


export default function Auth() {

    console.log(data)
  return (

    <div className=''>
       <main className= {css.bg}>
         <div className='bg-black bg-opacity-50'>
           <nav className='px-12 py-5 flex justify-between '>
              <Image src={logo} alt='logo' className='h-12' width={120} height={60} />
              <div className='flex gap-5 '> 
                 <p className=' border h-7 px-4 flex items-center '>English </p>
                 <button className=' bg-red h-7 px-4 flex items-center rounded-sm cursor-pointer '>sign out</button>
              </div>
           </nav>

           <div className='felx justify-center '>
            
            <div className='bg-black bg-opacity-50  flex flex-col gap-8 py-12 '>
                   <p className='text-center text -xl '>Welcome back!</p>
                   <p className='text-center font-bold  text-5xl '>Unlimited movies, TV shows and more</p>
                   <p className='text-center text-2xl'>Watch anywhere. Cancel anytime.</p>
                   <button className='bg-red h-11 w-60 justify-center px-4 inline-block font-bold text-xl mx-auto rounded-sm cursor-pointer'>
                     Finish Sign Up >
                   </button>
            </div>
           </div>
          </div>
      
   
       </main> 

       <div className='bg-black p-10 flex flex-col lg:flex-row '>
          <div className=''>
            <p className=' text-center p-5 text-5xl font-bold'>Enjoy on your TV</p>
            <p className='text-center p-5 text-xl '>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className=''>
            <Image src={tv} alt='' className=''/>
          </div>
       </div> 

       <div className='bg-black p-10 flex flex-col lg:flex-row-reverse mx-auto'>
       <div className=''>
            <p className=' text-center p-5 text-4xl font-bold'>Download your shows to watch offline</p>
            <p className='text-center p-5 text-xl '> Save your favourites easily and always have something to watch. </p>
        </div>
        <div className='flex justify-center'>
            <Image src={mobileimg} alt='' className=''/>
        </div>

       </div>


       <div className='bg-black p-10 flex flex-col lg:flex-row-reverse mx-auto'>
       <div className=''>
            <p className=' text-center p-5 text-4xl font-bold'>Watch everywhere</p>
            <p className='text-center p-5 text-xl '>  Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.  </p>
        </div>
        <div className='flex justify-center'>
            <Image src={deviceImg} alt='' className=''/>
        </div>

       </div>

       <div className='bg-black p-10 flex flex-col lg:flex-row- mx-auto'>
       <div className=''>
            <p className=' text-center p-5 text-4xl font-bold'>Create profiles for kids</p>
            <p className='text-center p-5 text-xl '> Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
        <div className='flex justify-center'>
            <Image src={child} alt='' className=''/>
        </div>

       </div>

       <div className='bg-black p-10 flex flex-col lg:flex-row- mx-auto'>
           <p className='text-3xl  font-bold text-center '>Frequently Asked Questions</p>

           <div className='mx-20 text-center'>
            {data.map((data)=>(
                 <Faq key={data.name} name={data.name}  answer={data.answer} />
            ))}
            
           </div>

           <button className=' bg-red h-12 w-44 px-4 text-xl text-center mx-auto items-center rounded-sm cursor-pointer '> Finish Sign Up</button>

       </div>

 



    </div>
  
  )
}
