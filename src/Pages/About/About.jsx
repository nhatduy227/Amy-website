import React from 'react';
import { useTranslation } from 'react-i18next';

import banner from '../../Assets/banner-about-us.png';
import technology from '../../Assets/factory.png';
import bulletPoint from '../../Assets/bullet-point-img.svg';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="">
        <img src={banner} alt="banner" className="inline-block lg:h-[610px] w-full object-cover" />
      </div>
      <div className="w-full lg:pl-36 lg:pr-48 pl-10 pr-16 py-10 flex flex-col gap-10 bg-background-main text-white relative overflow-hidden">
        {/* Decoration */}
        <>
          <img
            src={la1}
            alt=""
            className="hidden lg:inline-block w-[250px] display-no top-[50px] -left-[50px] absolute"
          />
          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="hidden lg:inline-block w-[400px] top-[300px] -left-[100px] absolute "
          />

          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="hidden lg:inline-block w-[400px] top-[600px] -right-[120px] absolute"
          />
          <img
            src={la2}
            alt=""
            className="hidden lg:inline-block w-[250px] top-[1000px] -right-[50px] absolute rotate-90"
          />

          <img src={la1} alt="" className="hidden lg:inline-block w-[220px] bottom-6 left-[5px] absolute" />
        </>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">{t('about_page.about_us')}</h2>
            <ul className="mt-2 ml-1">
              <li>
                {t('about_page.about_us_desc_first_line')}
              </li>

              <li className="py-4">
              {t('about_page.about_us_desc_second_line')} <br />
              </li>
              <li>
              {t('about_page.about_us_desc_third_line')}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">{t('about_page.our_passion')}</h2>
            <ul className="mt-1 ml-1">
              <li>
              {t('about_page.our_passion_first_line')}
              </li>

              <li className="py-4">
              {t('about_page.our_passion_second_line')}
              </li>

              <li>
              {t('about_page.our_passion_third_line')}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">{t('about_page.our_technology')}</h2>
            <p className="mt-1 ml-1">
            {t('about_page.our_technology_first_line')}
            </p>
            <img src={technology} alt="" className="mt-4" />
          </div>
        </div>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">{t('about_page.our_vision')}</h2>
            <ul className="mt-1 ml-1">
              <li>
              {t('about_page.our_vision_first_line')}
              </li>
              <li className="pt-4">
              {t('about_page.our_vision_second_line')}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">{t('about_page.our_guarantee')}</h2>
            <ul className="mt-1 ml-1">
              <li>
              {t('about_page.our_guarantee_first_line')}
              </li>
              <li className="py-4">
              {t('about_page.our_guarantee_list')}
                <ul className="list-disc pl-5">
                  <li>{t('about_page.our_guarantee_first_item')}</li>
                  <li>
                  {t('about_page.our_guarantee_second_item')}
                  </li>
                  <li>
                  {t('about_page.our_guarantee_third_item')}
                  </li>
                </ul>
              </li>
              {t('about_page.our_guarantee_second_line')}
              <br />
              {t('about_page.thank_you')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
