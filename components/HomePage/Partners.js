import Image from 'next/image';

export default function Partners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <Image
        src="/partners/binance.png"
        alt="Binance"
        width={200}
        height={50}
        className=""
      />
      <Image
        src="/partners/coinbase.png"
        alt="Coinbase"
        width={200}
        height={50}
      />
      <Image
        src="/partners/cardano.png"
        alt="Cardano"
        width={200}
        height={50}
      />
      <Image
        src="/partners/polygon.png"
        alt="Polygon"
        width={200}
        height={50}
      />
    </div>
  );
}
