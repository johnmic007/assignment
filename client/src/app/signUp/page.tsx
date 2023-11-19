import Image from 'next/image';
import css from './Home.module.css';
import logo from '../../../public/logo.png';
import Footer from '../../../components/footer'
import { MdOutlineVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";




export default function SignUp() {
  return (
    <div className=''>

        <div className='border-b-2 border-gray-100 flex justify-between items-center px-10 '>
        <Image src={logo} alt='logo' className='h-12 m-5 ' width={140} height={60} />
        <p className='text-black text-xl font-bold cursor-pointer '>Sign out</p>
        </div>
         

         <div className='h-[80vh] flex '>
             <div className=' bg-slate-100 w-[40vh] p-10 m-auto flex item flex-col gap-5 rounded-xl shadow-2xl  '>

        <MdOutlineVerified />

         <p>STEP 1 OF 3</p>
         <p className='font-bold text-4xl py-5'> Choose your plan.</p>
         <p className='flex text-xl'><TiTick />No commitments, cancel anytime. </p>
         <p className='flex text-xl'><TiTick />Everything on Netflix for one low price.</p>
         <p className='flex text-xl'><TiTick /> No ads and no extra fees. Ever. </p>
         <button className='bg-red text-2xl font-bold rounded-lg shadow-xl p-2 cursor-pointer ' >Next</button>
        


        </div>
         </div>
       

        <Footer />
      
    </div>
  );
}
