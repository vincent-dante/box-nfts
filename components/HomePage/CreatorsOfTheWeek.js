import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import creators from '../../utility/creators.json';

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

export default function CreatorsOfTheWeek() {
  return (
    <div className="pt-40">
      <h2 className="text-center text-2xl pb-10">Creators of the week</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-10 lg:gap-x-5">
        {creators.map((creator, index) => (
          <a href="" key={index}>
            <div className="flex items-center gap-5 creators-item px-5 md:px-0 py-5 group hover:cursor-pointer">
              <span className="p-1 px-3 border border-ashgrey-400 text-ashgrey-400 rounded-full flex items-center justify-center bg-gunmetal-400">
                {index + 1}
              </span>
              <div className="relative min-w-[50px]">
                <Image src={creator.profileImg} alt="" width={50} height={50} />
                <VerifiedBadge verified={creator.verified} />
              </div>
              <div className="flex-1 truncate">
                <p className="text-ellipsis overflow-hidden group-hover:underline">
                  {creator.name}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEthereum}
                    className="text-purpleflower-400"
                  />
                  <span className="pl-2">{creator.earn}</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
