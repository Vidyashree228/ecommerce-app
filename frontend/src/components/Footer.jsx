import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-800'>
      
      {/* Left Column with Logo and Description */}
      <div>
        <img src={assets.logo} className='mb-5 w-32' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Center Column with Company Links */}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      {/* Right Column with Contact Info */}
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>contact@foreveryou.com</li>
        </ul>
      </div>

      {/* Bottom Copyright Line */}
      <div className='col-span-full'>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 © forever.com - All Rights Reserved
        </p>
      </div>

    </div>
  );
};

export default Footer;