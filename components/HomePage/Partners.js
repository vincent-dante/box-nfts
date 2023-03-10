import Image from 'next/image';

export default function Partners() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full">
      <div className="w-1/2 md:w-auto p-2">
        <Image
          src="/partners/binance.png"
          alt="Binance"
          width={200}
          height={50}
        />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <Image
          src="/partners/coinbase.png"
          alt="Coinbase"
          width={200}
          height={50}
        />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <Image
          src="/partners/gemini.png"
          alt="Gemini"
          width={200}
          height={50}
        />
      </div>
      <div className="w-1/2 md:w-auto p-2">
        <Image
          src="/partners/polygon.png"
          alt="Polygon"
          width={200}
          height={50}
        />
      </div>
    </div>
  );
}
