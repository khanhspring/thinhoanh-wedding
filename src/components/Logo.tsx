import { Send_Flowers } from 'next/font/google';
import Link from "next/link";
import HeartIcon from "./HeartIcon";

const sendFlowers = Send_Flowers({
  subsets: ['latin'],
  weight: '400'
});

export default function Logo({ ...rest }) {
  return (
    <h1 className={sendFlowers.className}>
      <Link className="flex items-center justify-center gap-1 text-4xl" href="/">
        Thịnh <HeartIcon width={12} height={12} className="mt-[2px]" /> Oanh
      </Link>
    </h1>
  );
}