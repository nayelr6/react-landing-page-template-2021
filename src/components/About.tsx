import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-pricingtexttext-base cursor-pointer leading-4 text-pricingtext dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-pricingtext dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-pricingtext dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-0.732 0-1.325 0.593-1.325 1.325v21.351c0 0.732 0.593 1.324 1.325 1.324h11.494v-9.284h-3.118v-3.622h3.118v-2.667c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464 0.099 2.795 0.144v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.764v2.309h3.587l-0.467 3.622h-3.12v9.284h6.116c0.732 0 1.325-0.593 1.325-1.325v-21.351c0-0.732-0.593-1.325-1.325-1.325z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
