import Star from '../../public/star.svg';

export default function HeaderHomePage() {
  return (
    <div className="pt-40 pb-20 relative background-header">
      <Star className="w-5 h-5 fill-[#AE4EA5] absolute top-[25%] mx-auto inset-x-0" />
      <Star className="w-5 h-5 absolute bottom-56 left-[20%] lg:left-[40%] fill-[#4EA3AE]" />
      <span className="w-2 h-2 inline-block rounded-full absolute top-[20%] left-[10%] lg:left-[30%] bg-[#AE4EA5]"></span>
      <span className="w-2 h-2 inline-block rounded-full absolute top-[20%] right-[10%] lg:right-[30%] bg-[#AE4EA5]"></span>
      <span className="w-2 h-2 inline-block rounded-full absolute bottom-[40%] right-[20%] lg:right-[40%] bg-[#4EA3AE]"></span>

      <h2 className="text-5xl text-center leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-[#DB00FF] to-lemongreen-400">
        Discover Rare <br /> Collection of Art & NFTs
      </h2>
      <div className="flex justify-center pt-5">
        <button className="bg-purpleflower-400 button-gradient-pink rounded-full py-2 px-5 shadow-2xl  text-sm hover:bg-neonpurple-400">
          Discover Now
        </button>
      </div>
      <div className="grid grid-cols-3 w-full sm:w-1/2 xl:w-1/3 mx-auto text-center  pt-10">
        <div>
          <p className="text-3xl">235k+</p>
          <p className="text-ashgrey-400 pt-2">Artworks</p>
        </div>
        <div>
          <p className="text-3xl">74+</p>
          <p className="text-ashgrey-400 pt-2">Auctions</p>
        </div>
        <div>
          <p className="text-3xl">87k+</p>
          <p className="text-ashgrey-400 pt-2">Creators</p>
        </div>
      </div>
    </div>
  );
}
