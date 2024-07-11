import { Typography } from '@mui/material'
import React from 'react'
import randomColor from "randomcolor";

interface CategoryCardProps {
    name: string;
    imageUrl?: string;
    onClick?: (data?: any) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {
    var randomGeneratedColor = randomColor({
        luminosity: "light"
    });
  return (
    <div
      className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 rounded-lg overflow-hidden bg-[${randomGeneratedColor}] aspect-[5/3] w-full h-full !text-gray-300 cursor-pointer transition ease-out duration-300 hover:-translate-y-1`}
      onClick={props?.onClick}
      style={{
        backgroundColor: randomGeneratedColor,
      }}
    >
      <Typography className="!font-[800] relative top-[6%] left-[4%] self-end !font-sans !text-[18px] h-0 z-10 !text-white">
        {props?.name}
      </Typography>
      <img src={props?.imageUrl} className="w-[50%] relative left-[57%] top-[26%] aspect-square rotate-[30deg]" />
    </div>
  );
};

export default CategoryCard