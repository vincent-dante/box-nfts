import HeaderHomePage from '@/components/HomePage/Header';
import CreatorsOfTheWeek from '@/components/HomePage/CreatorsOfTheWeek';
import TrendingNft from '@/components/HomePage/TrendingNft';
import Partners from '@/components/HomePage/Partners';

export default function HomePage() {
  return (
    <div>
      <HeaderHomePage />
      <CreatorsOfTheWeek />
      <TrendingNft />
      <Partners />
    </div>
  );
}
