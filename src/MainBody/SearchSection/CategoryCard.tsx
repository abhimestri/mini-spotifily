import { Typography } from '@mui/material'
import React from 'react'

interface CategoryCardProps {
    name: string;
    imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div
      className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-lg overflow-hidden bg-[#ccc] aspect-[5/3] !text-gray-300 cursor-pointer hover:!text-white`}
    >
      <Typography className="!font-[500] relative top-[76%] left-[2%] self-end !font-sans !text-[16px] h-0 z-10">
        {props?.name}
      </Typography>
      <img src={props?.imageUrl} className="aspect-[5/3]" />
    </div>
  );
};

export default CategoryCard