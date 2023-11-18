import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

const TeamMember = ({ member }) => {
  const { img, name, socialLink } = member || {};
  return (
    <div className="bg-white max-w-sm flex flex-col justify-between items-center text-center pb-6 sm:pb-12 rounded-2xl border border-[#E3E3E3] overflow-hidden">
      <div className="mb-4 sm:mb-7 w-full h-[220px] lg:h-[387px] relative">
        <img
          className="bg-[#D7F5DC] w-full h-full object-cover"
          src={img}
          alt={name}
        />
        <ul className="py-4 max-w-[145px] mx-auto rounded-full bg-white flex  justify-center items-center gap-4 absolute bottom-8 left-0 right-0">
          <li className="">
            <Link to={socialLink?.facebook}>
              <FontAwesomeIcon
                icon={faFacebookF}
                size="lg"
                style={{ color: '#737588' }}
              />
            </Link>
          </li>
          <li className="border-x border-[#E3E3E3] px-3">
            <Link to={socialLink?.twitter}>
              <FontAwesomeIcon
                size="lg"
                icon={faTwitter}
                style={{ color: '#737588' }}
              />
            </Link>
          </li>
          <li className="">
            <Link to={socialLink?.instagram}>
              <FontAwesomeIcon
                size="lg"
                icon={faInstagram}
                style={{ color: '#737588' }}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="text-2xl sm:text-3xl font-semibold sm:mb-1">{name}</h5>
      </div>
    </div>
  );
};

export default TeamMember;
