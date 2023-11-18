import heroImg1 from '../../assets/images/hero-img-1.png';
import heroImg2 from '../../assets/images/hero-img-2.png';
import heroImg3 from '../../assets/images/hero-img-3.png';
import heroImg4 from '../../assets/images/hero-img-4.png';

import googleLogo from '../../assets/images/hero-lists/logos_google.svg';
import mondayLogo from '../../assets/images/hero-lists/logos_monday.svg';
import notionLogo from '../../assets/images/hero-lists/notion.png';
import slackLogo from '../../assets/images/hero-lists/slack.png';
import trelloLogo from '../../assets/images/hero-lists/trello-logo-blue.png';

const heroList = [googleLogo, trelloLogo, mondayLogo, notionLogo, slackLogo];

const HeroArea = () => {
  return (
    <>
      <section
        id="hero-area"
        className="pt-28 pb-9">
        <div className="px-7 sm:px-16 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="w-full sm:w-1/2 sm:pe-12 lg:pe-16">
                <h2 className="text-center sm:text-start font-black text-3xl lg:text-3xl xl:text-5xl leading-snug">
                  Increase Your Customers Loyalty and Satisfaction
                </h2>
                <p className="text-center sm:text-start text-base sm:text-lg md:text-xl font-medium mb-8 sm:mb-12 mt-3">
                  We help businesses like yours earn more customers, standout
                  from competitors, make more money
                </p>
                <div className="text-center sm:text-start">
                  <button
                    type="button"
                    className="text-white hover:text-[#20B15A] border border-white bg-[#20B15A] hover:bg-white focus:ring-4 focus:outline-none focus:ring-[#20B15A] font-medium rounded-2xl text-base text-center py-5 px-9">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div className="w-full max-h-[120px] md:max-h[200px] xl:max-h-[271px] overflow-hidden rounded-lg col-span-2">
                    <img
                      className="object-cover"
                      src={heroImg1}
                      alt="hero-image"
                    />
                  </div>
                  <div className="w-full max-h-[120px] md:max-h[200px] xl:max-h-[271px] overflow-hidden rounded-lg col-span-1">
                    <img
                      className="h-auto w-full"
                      src={heroImg2}
                      alt="hero-image"
                    />
                  </div>
                  <div className="w-full max-h-[164px] overflow-hidden rounded-lg col-span-1">
                    <img
                      className="h-full w-full"
                      src={heroImg3}
                      alt="hero-image"
                    />
                  </div>
                  <div className="w-full max-h-[164px] overflow-hidden rounded-lg col-span-2">
                    <img
                      className="object-cover"
                      src={heroImg4}
                      alt="hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full px-7 sm:px-16 lg:px-20 py-6 sm:py-11 mt-10 sm:mt-16">
          <div className="max-w-7xl mx-auto">
            <ul className="flex gap-4 sm:gap-6  justify-between items-center">
              {heroList.map((logo, i) => (
                <li
                  key={i}
                  className="w-1/5">
                  <div className="max-h-8 xl:h-8">
                    <img
                      className="xl:h-full sm:object-cover"
                      src={logo}
                      alt="Partner logo"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
