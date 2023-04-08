import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineLogout } from 'react-icons/ai'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import useAuthStore from '../store/authStore'
import { BiSearch } from 'react-icons/bi'
import { IoMdAdd } from 'react-icons/io'

import Logo from '../utils/Y-U-No.jpg'
import { createOrGetUser } from '../utils'

const Navbar = () => {
  const {userProfile,addUser,removeUser}:any = useAuthStore();
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href="/">
        <div className="flex flex-row items-center ">  
          <div className='w-[50px] md:w-[50px] flex-row'>
            <Image 
            className='cursor-pointer '
            src={Logo}
            alt="Cartooon"
            layout='responsive'
            />
          </div>
          <h2 className="font-bold hidden xl:block ml-2">RISE</h2>
        </div>
      </Link>
    {/* <div> Search</div> */}
    <div> 
      {userProfile ? (
        <div className='flex gap-5 md:gap-10'> 
          <Link href="/upload">
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
              <IoMdAdd className='text-xl'/>{' '}
              <span className='hidden md:block'>Upload</span>
          </button> 
          </Link>
          {userProfile.image && 
            <Link href="/">
            <>
            <Image
                  width={40}
                  height={40}
                  className=' rounded-full cursor-pointer'
                  src={userProfile.image}
                  alt='user-profile'
                />
            </>
            </Link>
          }
          <button
          type='button' className='px-2'
          onClick={() => {
            googleLogout();
            removeUser();
          }}>
            <AiOutlineLogout color='red' fontSize={21} />
          </button>
        </div>
      ) : (
        <GoogleLogin 
        onSuccess={( resp ) => createOrGetUser(resp,addUser) }
        onError={() => console.log('error')}
        />
      )}
    </div>
    </div>
    </div>
  )
}

export default Navbar