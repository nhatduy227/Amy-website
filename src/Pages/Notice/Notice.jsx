import React from 'react';
import { useTranslation } from 'react-i18next';

import banner from '../../Assets/about-banner.png';
import bulletPoint from '../../Assets/bullet-point-img.svg';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

const Notice = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="">
        <img src={banner} alt="banner" className="inline-block w-full lg:h-[610px] object-cover" />
      </div>
      <div className="w-full lg:px-36 pl-10 pr-16 py-10 flex flex-col gap-10 bg-background-main text-white relative overflow-hidden">
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
            <h2 className="text-4xl text-primary-default ml-4">{t('notice_page.notice')}</h2>
            <div>
              <ul className="lg:pl-5 pt-2">
                <li>
                  {t('notice_page.notice_first_line')}
                </li>
                <li className="inline-block py-4">{t('notice_page.notice_second_line')}</li>
                <li>
                  {t('notice_page.notice_third_line')}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bg-primary-default pl-5 rounded my-5">{t('notice_page.return_and_refund_policy')}</h3>
              <ul className="lg:pl-5 list-disc">
                <li className="inline-block">
                  {t('notice_page.return_and_refund_policy_list')}
                </li>
                <li className="py-4">
                  {t('notice_page.return_and_refund_policy_first_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.return_and_refund_policy_second_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.return_and_refund_policy_third_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.return_and_refund_policy_fourth_item')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="bg-primary-default pl-5 rounded my-5">{t('notice_page.product_feedback_policy')}</h3>
              <ul className="lg:pl-5 list-disc">
                <li className="py-4">
                  {t('notice_page.product_feedback_policy_first_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.product_feedback_policy_second_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.product_feedback_policy_third_item_before')} <br />{t('notice_page.product_feedback_policy_third_item_after')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="bg-primary-default pl-5 rounded my-5">{t('notice_page.order_cancellation_policy')}</h3>
              <ul className="lg:pl-5 list-disc">
                <li>
                  {t('notice_page.order_cancellation_policy_first_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.order_cancellation_policy_second_item')}
                </li>
                <li className="py-4">
                  {t('notice_page.order_cancellation_policy_third_item_before')} <br />{t('notice_page.order_cancellation_policy_third_item_after')}
                </li>
                <li className="py-4">
                  {t('notice_page.order_cancellation_policy_fourth_item')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
