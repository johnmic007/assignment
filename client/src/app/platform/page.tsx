import Image from 'next/image';
import css from './Home.module.css';
import logo from '../../public/logo.png';


export default function Home() {
  return (
    <div className=''>
        <div className=''>
        <Image src={logo} alt='logo' className='h-12' width={120} height={60} />
        </div>
      
    </div>
  );
}
