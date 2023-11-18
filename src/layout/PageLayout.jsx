import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

function PageLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <div className="pt-20 sm:pt-48 pb-10 sm:pb-20 px-7 sm:px-16 lg:px-20 bg-[#F8F9FC] font-plusJakartaSans font-semibold capitalize">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[#101A29] text-3xl smx:text-[40px] mb-5">
            {location.pathname.split('/').join('')}
          </h4>
          <div className="flex space-x-3 sm:space-x-4 items-center text-sm sm:text-base">
            <Link
              to={'/'}
              className="text-[#101A29]">
              Home
            </Link>
            <FontAwesomeIcon icon={faAngleRight} />
            <Link
              to={location.pathname}
              className="text-[#20B15A]">
              {location.pathname.split('/').join('')}
            </Link>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default PageLayout;
