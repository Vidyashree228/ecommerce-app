import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-300'>
      <div className='flex flex-col gap-4 pt-6 px-4 text-[15px]'>

        <NavLink
          to='/add'
          className='flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'
        >
          <img src={assets.add_icon} alt='Add' className='w-5 h-5' />
          <p className='sidebar-label'>Add Items</p>
        </NavLink>

        <NavLink
          to='/list'
          className='flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'
        >
          <img src={assets.order_icon} alt='List' className='w-5 h-5' />
          <p className='sidebar-label'>List Items</p>
        </NavLink>

        <NavLink
          to='/orders'
          className='flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition'
        >
          <img src={assets.order_icon} alt='Orders' className='w-5 h-5' />
          <p className='sidebar-label'>Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
