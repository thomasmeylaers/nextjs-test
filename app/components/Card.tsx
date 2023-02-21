'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
type CardProps = {
  title: string;
  imageUrl: string;
};

export default function Card({ title, imageUrl }: CardProps) {
  return (
    <motion.div className="flex p-[60px] pb-0 flex-col bg-white box-border rounded-[18px] overflow-hidden">
      <h3 className="font-sans grow text-[48px] font-semibold color-[#1d1d1f] leading-[1.08349] tracking-[-.003em]">
        {title}
      </h3>
      <div className="mx-auto flex overflow-hidden rounded-t-[18px]  mt-[50px] h-[400px] w-[366px]">
        <Image
          src={imageUrl}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </motion.div>
  );
}
