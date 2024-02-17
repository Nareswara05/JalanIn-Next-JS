import React from 'react';
import { CiHeart, CiStar  } from 'react-icons/ci';
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const CardTravel = () => {
  const data = [
    {
      id: 1,
      location: 'DKI Jakarta',
      images: 'https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2023/06/18/staycationjpg-20230618013836.jpg',
      name: 'Danubius Hotel Regents Park',
      price: 899.000,
      star: 4,
    },
    {
      id: 2,
      location: 'Bandung',
      images: 'https://www.ahstatic.com/photos/5451_ho_00_p_1024x768.jpg',
      name: 'NightSky Hotel',
      price: 999.000,
      star: 4,
    },
    {
      id: 3,
      location: 'Bali',
      images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjobchSUfPnp0ObuGgAmuWfBkZcelos7JsQ&usqp=CAU',
      name: 'City Park hotel',
      price: 899.000,
      star: 4,
    },
  ];

  return (
    <div className='mx-10'>
      <h1 className='text-4xl text-primary text-center font-bold pb-12'>Our Recommendation</h1>
      <div className='flex flex-row gap-12 justify-center'>
        {data.map((hotel, index) => (
          <div key={index} className='w-[411px] h-[480px] rounded-xl shadow-md relative'>
            <div className='bg-white rounded-full shadow-md absolute p-2 right-3 top-3 text-black text-4xl'>
              <CiHeart />
            </div>
            <img className='w-full h-[320px] object-cover rounded-t-xl' src={hotel.images} alt={hotel.name} />
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-row text-red-600 items-center gap-2 text-lg'>
                  <FaLocationDot />
                  <h3 className='text-primary'>{hotel.location}</h3>
                </div>
                <h1 className='text-2xl text-textPrimary font-semibold'>{hotel.name}</h1>
              </div>
              <div className='flex flex-row gap-3 items-center '>
                <h3 className='text-lg text-textPrimary '>{hotel.price} / Night</h3>
                <hr className='w-4 border-gray-400 rotate-90'/>
                <div className='flex flex-row-reverse items-center gap-2 text-textPrimary'>
                <h3>{hotel.star}</h3>
                <div className='text-red-500 flex'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTravel;
