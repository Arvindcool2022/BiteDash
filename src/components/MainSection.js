import Carousel from './MainSection/Carousel';
import SmallCarousel from './MainSection/SmallCarousel';
import Filters from './MainSection/Filters';
import CardContainer from './MainSection/CardContainer';

const MainSection = () => (
  <section className="main-section">
    <Carousel />
    <SmallCarousel />
    <Filters />
    <CardContainer />
  </section>
);

export default MainSection;
