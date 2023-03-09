import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
  faYoutube,
  faReddit,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#17161F]">
      <div className="pt-20 pb-10 container mx-auto px-4 lg:px-10 xl:px-32">
        <Link href="/">
          <h2 className="text-4xl flex items-center pb-10">
            <Image
              src="/boxnfts.png"
              alt="Box nfts logo"
              width={40}
              height={40}
              className="inline-block pr-2"
            />
            Box nfts
          </h2>
        </Link>
        <p className="pb-3">Join the community</p>
        <div className="flex gap-3 text-2xl">
          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faDiscord}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faReddit}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faYoutube}
              className="hover:text-white cursor-pointer"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faTiktok}
              className=" hover:text-white cursor-pointer"
            />
          </a>
        </div>
        <hr className="border-[#2C2B3A] mt-10 mb-5" />
        <div className="flex justify-between text-ashgrey-400 text-sm">
          <p>© {year} Box nfts</p>
          <div className="flex gap-10">
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
