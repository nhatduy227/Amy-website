import React from 'react';
import fanPage from '../../Assets/fanpage.png';
import botGiaViGaTa from '../../Assets/avatarbotgiavigata.jpg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FBLogo from '../../Assets/facebook-logo.png';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslation } from 'react-i18next';

const BeforeFooter = () => {
  const { t } = useTranslation('', {
    keyPrefix: 'before_footer',
  });

  return (
    <div className="bg-primary-default flex flex-col pt-[50px] px-20 lg:px-36 pb-5 gap-5 text-white">
      <div className="flex flex-wrap gap-12">
        <div className="flex flex-col flex-[1.6] text-justify text-sm gap-2">
          <h2 className="text-left text-[18px] font-medium">{t('first_column.company_name')}</h2>
          <span>{t('first_column.address')}</span>
          <span>{t('first_column.factory_address')}</span>
          <div className="flex">
            <EmailOutlinedIcon />
            <span className="ml-1">{t('first_column.email')}</span>
          </div>
          <div className="flex">
            <PublicOutlinedIcon />
            <a href="https://amyvietnam.com/" target="_blank" rel="noreferrer">
              <span className="ml-1">{t('first_column.website')}</span>
            </a>
          </div>
          <div>
            <LocalPhoneOutlinedIcon />
            <span className="ml-1">{t('first_column.hotline')}</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">{t('second_column.policy')}</h2>
          <a href='informationSecurity.pdf' target="_blank" rel="noreferrer">{t('second_column.information_and_security_policy')}</a>
          <a href='salesPolicy.pdf' target="_blank" rel="noreferrer">{t('second_column.sales_policy')}</a>
          <a href='shippingForwardPolicy.pdf' target="_blank" rel="noreferrer">{t('second_column.shipping_and_forward_policy')}</a>
          <a href='paymentPolicy.pdf' target="_blank" rel="noreferrer">{t('second_column.payment_policy')}</a>
          <a href='shipCODPolicy.pdf' target="_blank" rel="noreferrer">{t('second_column.ship_COD_policy')}</a>
        </div>
        <div className="flex flex-col lg:flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">{t('third_column.information')}</h2>
          <span>{t('third_column.recruitment')}</span>
          <span>{t('third_column.agent_system')}</span>
          <span>{t('third_column.frequently_asked_questions')}</span>
          <span>{t('third_column.contact_cooperation')}</span>
        </div>
        <div className="flex flex-col lg:flex-1 text-justify text-sm gap-2">
          <div className="flex">
            <h2 className=" text-left text-[18px] font-medium">FANPAGE</h2>
            <img src={FBLogo} alt="Face book logo" className="w-[20px] rounded-full ml-2" />
          </div>
          <p>
            {t('fourth_column.social_media')}
          </p>
          {/* <FacebookIcon className="text-[#0572e6] bg-white rounded mx-2 ml-0" /> */}
          <div className="flex items-start justify-around lg:gap-5">
            <div>
              <p>{t('fourth_column.fresh_and_dry_boba')}</p>
              <a href="https://www.facebook.com/tranchautuoimood/" target="_blank" rel="noreferrer">
                <img src={fanPage} alt="fanpage-mood" className="inline-block mt-2" />
              </a>
            </div>
            <div className="flex flex-col items-center">
              <p>{t('fourth_column.dry_seasoning')}</p>
              <a href="https://www.facebook.com/botgiavigata/" target="_blank" rel="noreferrer">
                <img
                  src={botGiaViGaTa}
                  alt="avatar-bot-gia-vi-gata"
                  className="inline-block w-[120px] rounded-full mt-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-between'>
        <div>
          <h2 className="text-left text-[18px] font-medium">{t("fourth_column.social_media")}</h2>
          
          <YouTubeIcon className="text-[#f00] bg-white rounded" />
        </div>
        <div>
          <h2 className="text-left text-[18px] font-medium">{t("fifth_column.contact_us")}</h2>
          <div className='text-sm'>{t("fifth_column.label")}</div>
          <input className='p-1 pl-2 outline-none text-background-main my-1' type="text" placeholder={t("fifth_column.input_place_holder")}/>
          <button className='p-1 px-2 outline-none bg-background-main'>{t("fifth_column.subscribe")}</button>
        </div>
      </div> */}
    </div>
  );
};

export default BeforeFooter;
