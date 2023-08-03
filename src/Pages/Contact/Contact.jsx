import React from 'react';
// import { useTranslation } from 'react-i18next';

import contactBanner from '../../Assets/event-banner.png';

const Contact = () => {
  // const { t } = useTranslation();
  return (
    <div className="bg-background-main">
      {/* Banner */}
      <div className="">
        <img src={contactBanner} alt="contact-banner" className="w-full" />
      </div>

      {/* Container */}
      <div className="py-8 px-36">
      </div>
    </div>
  );
};

export default Contact;
