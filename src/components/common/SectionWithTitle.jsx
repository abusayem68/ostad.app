import React from 'react';

const SectionWithTitle = ({ children, title, subTitle }) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl text-[#20B15A] font-medium uppercase mb-4">
        {title}
      </h2>
      <h3 className="text-2xl sm:text-3xl font-semibold max-w-[495px]">
        {subTitle}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default SectionWithTitle;
