import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faWallet,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

export default function NavTop() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="flex pt-10 items-center justify-between container mx-auto px-4 lg:px-10 xl:px-32 relative">
      <div className="flex">
        <Link href="/">
          <h1 className="text-4xl flex items-center">
            <Image
              src="/boxnfts.png"
              alt="Box nfts logo"
              width={40}
              height={40}
              className="inline-block pr-2"
            />
            Box nfts
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-10 pl-10 text-ashgrey-400">
          <a href="" className="hover:text-white">
            Marketplace
          </a>
          <a href="" className="hover:text-white">
            Creators
          </a>
          <a href="" className="hover:text-white">
            Stats
          </a>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-5 hover:text-white cursor-pointer"
          />
        </div>
      </div>

      <button className="hidden lg:block border border-purpleflower-400 bg-gunmetal-400 text-ashgrey-400 hover:text-white rounded-full py-2 px-5 ">
        <FontAwesomeIcon icon={faWallet} className="mr-5" />
        Connect Wallet
      </button>

      <div className="lg:hidden text-2xl">
        <button>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-5 cursor-pointer"
          />
        </button>
        <button
          onClick={() => {
            setMobileNav((mobileNav) => !mobileNav);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div
        className={`absolute lg:hidden w-full top-[110%] left-0 px-5 bg-gunmetal-400 z-10 ${
          mobileNav ? 'absolute' : 'hidden'
        }`}
      >
        <ul className="divide-y divide-[#1d1c27] text-ashgrey-400">
          <li className="py-5">
            <a href="">Marketplace</a>
          </li>
          <li className="py-5">
            <a href="">Creators</a>
          </li>
          <li className="py-5">
            <a href="">Stats</a>
          </li>
          <li className="py-5">
            <button className="border border-purpleflower-400 bg-gunmetal-400 rounded-full py-2 px-5 w-full">
              <FontAwesomeIcon icon={faWallet} className="mr-5" />
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
