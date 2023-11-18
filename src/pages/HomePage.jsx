import FeaturedProduct from '../components/home/FeaturedProduct';
import HeroArea from '../components/home/HeroArea';
import StatList from '../components/home/StatList';
import WorkList from '../components/home/WorkList';

function HomePage() {
  return (
    <>
      <HeroArea />
      <WorkList />
      <StatList />
      <FeaturedProduct />
    </>
  );
}

export default HomePage;
