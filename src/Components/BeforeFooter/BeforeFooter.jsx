import React from 'react';
import fanPage from '../../Assets/fanpage.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslation } from 'react-i18next';

const BeforeFooter = () => {
  const {t} = useTranslation("", {
    keyPrefix: "before_footer",
  });

  return (
    <div className="bg-primary-default flex flex-col pt-[50px] px-20 lg:px-[200px] pb-5 gap-5 text-white">
      <div className="flex gap-12">
        <div className="flex flex-col flex-[1.6] text-justify text-sm gap-2">
          <h2 className="text-left text-[18px] font-medium">{t("first_column.company_name")}</h2>
          <span>{t("first_column.address")}</span>
          <span>{t("first_column.factory_address")}</span>
          <div className="flex">
            <EmailOutlinedIcon />
            <span className="ml-1">{t("first_column.email")}</span>
          </div>
          <div className="flex">
            <PublicOutlinedIcon />
            <span className="ml-1">{t("first_column.website")}</span>
          </div>
          <div>
            <LocalPhoneOutlinedIcon />
            <span className="ml-1">{t("first_column.hotline")}</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">{t("second_column.policy")}</h2>
          <span>{t("second_column.information_and_security_policy")}</span>
          <span>{t("second_column.rules_and_form_payment")}</span>
          <span>{t("second_column.return_and_refund_policy")}</span>
          <span>{t("second_column.shipping_and_forward_policy")}</span>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">{t("third_column.information")}</h2>
          <span>{t("third_column.recruitment")}</span>
          <span>{t("third_column.agent_system")}</span>
          <span>{t("third_column.frequently_asked_questions")}</span>
          <span>{t("third_column.contact_cooperation")}</span>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">FANPAGE</h2>
          <a href="https://www.facebook.com/">
            <img src={fanPage} alt="" />
          </a>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2 className="text-left text-[18px] font-medium">{t("fourth_column.social_media")}</h2>
          <FacebookIcon className="text-[#0572e6] bg-white rounded mx-2 ml-0" />
          <YouTubeIcon className="text-[#f00] bg-white rounded" />
        </div>
        <div>
          <h2 className="text-left text-[18px] font-medium">{t("fifth_column.contact_us")}</h2>
          <div className='text-sm'>{t("fifth_column.label")}</div>
          <input className='p-1 pl-2 outline-none text-background-main my-1' type="text" placeholder={t("fifth_column.input_place_holder")}/>
          <button className='p-1 px-2 outline-none bg-background-main'>{t("fifth_column.subscribe")}</button>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
