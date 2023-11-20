import Image from 'next/image';
import css from './Home.module.css';
import logo from '../../../../../public/logo.png'
import { MdOutlineVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';



export default function Home() {
  return (
    <div className=''>

        <div className='border-b-2 border-gray-100 flex justify-between items-center px-10 '>
        <Image src={logo} alt='logo' className='h-12 m-5 ' width={140} height={60} />
        <p className='text-black text-xl font-bold cursor-pointer '>Sign out</p>
        </div>

        <div className='  '>
             <div className=' bg-slate-50 w-[90vh] p-10 m-auto flex item flex-col gap-5 rounded-xl shadow-2xl  '>

         <p>STEP 1 OF 3</p>
         <p className='font-bold text-4xl py-5'> Choose the plan that’s right for you</p>
         <p className='flex text-xl'><TiTick />Watch all you want. Ad-free. </p>
         <p className='flex text-xl'><TiTick />Recommendations just for you.</p>
         <p className='flex text-xl'><TiTick /> Change or cancel your plan anytime. </p>
  
        </div>
        </div>

        <div className=''>

        </div>      
    </div>
  );
}
