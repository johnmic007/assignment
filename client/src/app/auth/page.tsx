import Image from 'next/image'
import css from '../Home.module.css'
import logo from '../../../public/logo.png'


export default function Auth() {
  return (
    <main className= {css.bg}>
         <div className='bg-black w-full h-full opacity-50'>
           <nav className='px-12 py-5'>
              <Image src={logo} alt='logo' className='h-12' width={120} height={60} />
           </nav>

           <div className='felx justify-center '>
            <div className=''>
                
            </div>
           </div>
          </div>
      
   
    </main>
  )
}
