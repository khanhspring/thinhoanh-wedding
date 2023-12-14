import { Send_Flowers } from 'next/font/google';
import localFont from 'next/font/local';
import HeartIcon from "./HeartIcon";
import HeartTagIcon from "./HeartTagIcon";

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';

const helloHoney = localFont({ src: '../assets/fonts/HelloHoney/HelloHoney.otf' })

const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: '400'
});

export default function Banner({ ...rest }) {
  return (
    <div className="w-full aspect-banner bg-top bg-cover backdrop-blur flex relative">
      <Image
        layout="fill"
        className="object-cover object-top pointer-events-none z-10"
        src="/images/banner.png"
        alt=""
      />
      <div className="w-full h-full flex items-center relative z-50">
        <div className="container m-auto flex items-center justify-center flex-col">
          <div className="relative">
            <h2 className={`${helloHoney.className} text-white text-5xl md:text-[90px] lg:text-[120px] md:leading-[90px] lg:leading-[130px] drop-shadow-lg`}>
              We&lsquo;re Getting Married
            </h2>
            <HeartTagIcon width={150} height={150} className="ml-5 fill-white absolute top-0 -right-[160px] hidden lg:block" />
          </div>
          <p className={`${sendFlowers.className} text-white text-4xl md:text-[80px] flex items-center gap-2 md:gap-3 mt-5 drop-shadow-lg`}>
            Thịnh <HeartIcon className="md:ml-5 fill-white w-5 h-5 md:w-8 md:h-8" /> Oanh
          </p>
        </div>
      </div>
    </div>
  )
}