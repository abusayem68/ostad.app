import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/images/social-icons/facebook.svg';
import twitterIcon from '../../assets/images/social-icons/twitter.svg';
import linkedInIcon from '../../assets/images/social-icons/linkedIn.svg';
import instagramIcon from '../../assets/images/social-icons/instagram.svg';

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-7 justify-start sm:justify-between">
        <div className="">
          <div className="flex flex-1 items-center sm:items-stretch justify-start mb-5">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="font-bold text-3xl md:text-[39px]">
                Design<span className="text-[#F55F1D]">AGENCY</span>
              </h1>
            </div>
          </div>
          <p className="text-lg sm:text-xl mb-5 max-w-sm">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="#">
                <img
                  src={facebookIcon}
                  alt="facebook"
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src={twitterIcon}
                  alt="twitter"
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src={linkedInIcon}
                  alt="linkedIn"
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="p-3 bg-[#20B15A] rounded-full">
                  <img
                    src={instagramIcon}
                    alt="instagram"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="text-lg sm:text-xl font-semibold mb-4">
            Quick Links
          </div>
          <ul className="flex flex-col space-y-3 sm:space-y-6 text-base sm:text-lg">
            <li>
              <Link
                to="#"
                className=" font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className=" font-medium">
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className=" font-medium">
                About Us{' '}
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="font-medium">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-lg sm:text-xl font-semibold mb-2 sm:mb-6">
            Address
          </div>
          <address className="text-base sm:text-xl font-medium font-sen">
            Design Agency Head Office. <br /> Airport Road <br /> United Arab
            Emirate
          </address>
        </div>
      </div>
      <div className="mt-10 sm:mt-16 text-sm sm:text-xl font-medium">
        Copyright Design Agency 2022
      </div>
    </div>
  );
};

export default Footer;
