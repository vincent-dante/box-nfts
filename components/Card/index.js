import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

function VerifiedBadge({ verified }) {
  if (verified) {
    return (
      <Image
        src="/verified-user.svg"
        alt="verified user"
        className="absolute bottom-0 -right-1"
        width={20}
        height={20}
      />
    );
  }
  return;
}

export default function Card({ nft }) {
  return (
    <a href="" className="group">
      <div className="min-h=[32px] w-full bg-gunmetal-400 rounded-2xl overflow-hidden">
        <div className="w-full h-80 md:h-40 lg:h-52 xl:h-60 relative">
          <Image src={nft.image} alt="" fill quality={100} />
        </div>
        <div className="p-5">
          <div className="relative">
            <p className="text-ellipsis overflow-hidden truncate w-[90%] group-hover:underline">
              {nft.name}
            </p>
            <VerifiedBadge verified={nft.verified} />
          </div>
          <p className="pt-3">
            <FontAwesomeIcon
              icon={faEthereum}
              className="text-purpleflower-400 pr-2"
            />
            {nft.price}
          </p>
        </div>
      </div>
    </a>
  );
}
