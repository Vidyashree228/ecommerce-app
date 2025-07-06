import React from 'react'
import { assets } from '../assets/assets';

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2 font-medium'>Upload Image</p>
        <div className='flex gap-3 flex-wrap'>
          {['image1', 'image2', 'image3', 'image4'].map((id, index) => (
            <label htmlFor={id} key={id} className='cursor-pointer'>
              <img
                className='w-12 h-12 object-contain rounded-md border border-gray-300'
                src={assets.upload_area}
                alt={`Upload ${index + 1}`}
              />
              <input type="file" id={id} hidden />
            </label>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Add;

