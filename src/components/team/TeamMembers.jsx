import { useEffect, useState } from 'react';
import { getTeamMembers } from '../../APIRequest/APIRequest';
import SectionWithTitle from '../common/SectionWithTitle';
import TeamMember from './TeamMember';

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getTeamMembers();
      setMembers(res);
    })();
  }, []);
  return (
    <section className="px-7 sm:px-16 lg:px-20 bg-white pt-10 sm:pt-16 pc-16 sm:pb-20">
      <div className="max-w-7xl mx-auto">
        <SectionWithTitle
          title={'Our Team Member'}
          subTitle={'Check our awesome team members'}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mt-10 sm:mt-14 gap-6 sm:gap-8">
            {members.map((member, i) => (
              <TeamMember
                key={i}
                member={member}
              />
            ))}
          </div>
        </SectionWithTitle>
      </div>
    </section>
  );
};

export default TeamMembers;
