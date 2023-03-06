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
  { title: 'product', path: '/products' },
  { title: 'event', path: '/event' },
  { title: 'notice', path: '/notice' },
  // { title: 'recruitment', path: '/' },
  // { title: 'user manual', path: '/user manual' },
  // { title: 'cooking recipe', path: '/' },
  { title: 'where to buy', path: '/' },
];

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-50 flex items-center justify-end">
      <ul className="mr-[60px] flex list-none">
        {navList.map(({ title, path }) => {
          return (
            <li key={title} className="text-xs">
              <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={path}>
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
