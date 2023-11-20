import React from 'react'
import Image from 'next/image';
import pro from '../public/no-profile.jpg'

interface AccountMenuProps {
    visible ?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible})=>{
    
    if(!visible){
        return null;
    }

    return(
        <div>
            <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image className="w-8 rounded-md" src={pro} alt="" />
          <p className="text-white text-sm group-hover/item:underline">John Micheal</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div  className="px-3 text-center text-white text-sm hover:underline">
        Sign out of Netflix
      </div>
    </div> 
        </div>
    )
}

export default AccountMenu;