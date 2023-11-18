import { useEffect, useState } from 'react';
import { getFeaturedProducts } from '../../APIRequest/APIRequest';
import SectionWithTitle from '../common/SectionWithTitle';

const FeaturedProduct = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getFeaturedProducts();
      setFeaturedProducts(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 pt-12 sm:pt-16 pb-16 sm:pb-20 bg-[#F0FDF4]">
      <div className="max-w-7xl mx-auto">
        <SectionWithTitle
          title={'Featured Project'}
          subTitle={'We provide the Perfect Solution to your business growth'}>
          <div className="grid grid-cols-2 grid-flow-row gap-8 mt-16">
            <div className="col-span-2 sm:col-span-1">
              <img
                className="rounded-2xl mb-4"
                src={featuredProducts[0]?.img}
                alt={featuredProducts[0]?.title}
              />
              <h4 className="text-sm text-[#2E3E5C] mb-2.5">
                {featuredProducts[0]?.category} - {featuredProducts[0]?.date}
              </h4>
              <h3 className="text-[#2E3E5C] font-bold text-2xl">
                {featuredProducts[0]?.title}
              </h3>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="grid grid-cols-2 grid-flow-row gap-4 sm:gap-8">
                {featuredProducts
                  .filter((_, i) => i > 0)
                  .map((product, i) => (
                    <div key={i}>
                      <img
                        className="rounded-lg sm:rounded-2xl mb-1 sm:mb-3"
                        src={product?.img}
                        alt={product?.title}
                      />
                      <h4 className="text-sm text-[#2E3E5C] mb-1 sm:mb-2">
                        {product?.category} - {product?.date}
                      </h4>
                      <h3 className="text-sm sm:text-base lg:text-lg text-[#2E3E5C] font-bold ">
                        {product?.title}
                      </h3>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </SectionWithTitle>
      </div>
    </section>
  );
};

export default FeaturedProduct;
