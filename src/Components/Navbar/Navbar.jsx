import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const navList = [
  {
    title: 'home',
    path: '/',
  },
  { title: 'about', path: '/about' },
  { title: 'product', path: '/product' },
  // { title: 'event', path: '/' },
  { title: 'notice', path: '/notice' },
  // { title: 'where to buy', path: '/' },
];

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-50 flex items-center justify-end">
      <ul className="mr-[60px] flex list-none">
        {navList.map(({ title, path }) => {
          return (
            <li key={title} className="py-2  cursor-pointer text-white uppercase text-xs hover:bg-primary-default">
              <Link className="px-4 no-underline uppercase" to={path}>
                {t(`navbar.${title}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
