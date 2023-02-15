import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useTranslation } from 'react-i18next';

import vnFlag from '../../Assets/vietnam-flag.png';
import ukFlag from '../../Assets/united-kingdom.png';
import logo from '../../Assets/logo.png';

export default function Header() {
  const [defaultSelectLanguage, setDefaultSelectLanguage] = useState('vi');
  const { t, i18n } = useTranslation();

  const onChangeVNLanguage = () => {
    localStorage.setItem('locale', 'vi');
    i18n.changeLanguage('vi');
  };
  const onChangeUKLanguage = () => {
    localStorage.setItem('locale', 'en');
    i18n.changeLanguage('en');
  };

  useEffect(() => {
    setDefaultSelectLanguage(i18n.language || 'vi');
  }, [i18n.language]);

  return (
    <div className="w-full h-[80px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 w-[200px] h-20">
          <Link to="/">
            <img src={logo} className="" alt="Amy-logo" />
          </Link>
        </div>
        <div className="flex items-center gap-6 mr-[60px]">
          <Link className="flex no-underline text-base" to="/">
            <PersonOutlineIcon />
            <div className="h-6 ml-1">{t('header.login_in')}</div>
          </Link>
          <Link className="flex no-underline text-base" to="/">
            <ShoppingCartOutlinedIcon />
            <div className="h-6 ml-1">{t('header.cart')}</div>
          </Link>
          <Link className="flex no-underline text-base" to="/">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="h-6 ml-1">{t('header.message')}</div>
          </Link>
          <div className="flex w-20 no-underline text-base" to="/">
            <div className="flex items-center justify-center">
              <img
                className="w-7 cursor-pointer hover:w-8"
                src={vnFlag}
                alt="vnFlag"
                onClick={() => onChangeVNLanguage()}
                defaultValue={defaultSelectLanguage}
              />
              <img
                className="w-7 rounded ml-2 cursor-pointer hover:w-8"
                src={ukFlag}
                alt="ukFlag"
                onClick={() => onChangeUKLanguage()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
