import React from 'react';
import { NextPage } from 'next';
import { footerList3 } from '../utils/constants';
import Link from 'next/link';

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className='text-black-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => (
  <div className='mt-6 hidden xl:block'>
    <List items={footerList3} mt={false} />
    <p className='text-black-400 text-xl mt-5 font-bold'>Made With Love<span ><br/>by</span> </p>

    <Link href="https://www.linkedin.com/in/pratik-pradhan-2103831b9/">
    <h2 className="hover:text-[#1d674d]  font-bold title-font text-2xl mb-1">Pratik</h2>
    </Link>
    
  </div>
);

export default Footer;