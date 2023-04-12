import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../Firebase';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CheckoutCart from '../../Pages/CheckoutCart/CheckoutCart';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../App';

import vnFlag from '../../Assets/vietnam-flag.png';
import ukFlag from '../../Assets/united-kingdom.png';
import logo from '../../Assets/logo.png';
import './Header.scss'

export default function Header() {
  const [defaultSelectLanguage, setDefaultSelectLanguage] = useState('vi');
  const { t, i18n } = useTranslation();
  const user = useContext(UserContext)
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
    <header className="w-full header">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 w-[200px] h-20">
          <Link to="/">
            <img src={logo} className="" alt="Amy-logo" />
          </Link>
        </div>
        <div className="flex items-center gap-6 mr-[60px]">
          <Link className="flex no-underline text-base" to="/user-info">
            {user.role === "admin" ? <StarBorderOutlinedIcon /> : <Person2OutlinedIcon />}
            <div className="h-6 ml-1" >{user.displayName}</div>
          </Link>
          <CheckoutCart />
          <Link className="flex no-underline text-base" to="/">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="h-6 ml-1">{t('header.message')}</div>
          </Link>
          <Link className="flex no-underline text-base" to="/">
            <button className="h-6 ml-1" onClick={logOut}>{t('header.login_out')}</button>
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
    </header>
  );
}
