import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const user = useContext(UserContext)

  return (
    <nav className="bg-gray-50 flex items-center justify-end">
      <ul className="mr-[60px] flex list-none">
        <li key={'home'} className="text-xs">
          <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={'/'}>
            {t(`navbar.home`)}
          </Link>
        </li>
        <li key={'about'} className="text-xs">
          <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={'/about'}>
            {t(`navbar.about`)}
          </Link>
        </li>
        <li key={'product'} className="text-xs relative group">
          <span className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white cursor-pointer">
            {t(`navbar.product`)}
          </span>
          <ul className="w-[140px] absolute top-6 z-20 hidden flex-col bg-[#808080] group-hover:flex">
            <li>
              <Link
                className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                to={'/fresh-boba'}
              >
                {t(`navbar.fresh boba`)}
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                to={'/dried-boba'}
              >
                {t(`navbar.dried boba`)}
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                to={'/powder-spices'}
              >
                {t(`navbar.powder spices`)}
              </Link>
            </li>
          </ul>
        </li>
        {user && user.role === "admin" ?
          <li key={'product'} className="text-xs relative group">
            <span className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white cursor-pointer">
              {t(`navbar.admin`)}
            </span>
            <ul className="w-[140px] absolute top-6 z-20 hidden flex-col bg-[#808080] group-hover:flex">
              <li>
                <Link
                  className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                  to={'/post-product'}
                >
                  {t(`navbar.post product`)}
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                  to={'/manage-product'}
                >
                  {t(`navbar.manage product`)}
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                  to={'/post-recipe'}
                >
                  {t(`navbar.post recipe`)}
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-4 w-full inline-block no-underline uppercase hover:bg-primary-default text-white"
                  to={'/manage-order'}
                >
                  {t(`navbar.manage order`)}
                </Link>
              </li>
            </ul>
          </li> : null
        }

        <li key={'event'} className="text-xs">
          <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={'/event'}>
            {t(`navbar.event`)}
          </Link>
        </li>
        <li key={'notice'} className="text-xs">
          <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={'/notice'}>
            {t(`navbar.notice`)}
          </Link>
        </li>
        <li key={'where-to-buy'} className="text-xs">
          <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={'/'}>
            {t(`navbar.where to buy`)}
          </Link>
        </li>
        <li key={'contact'} className="text-xs">
          <Link className="px-4 py-2 no-underline uppercase hover:bg-primary-default text-white" to={'/contact'}>
            {t(`navbar.contact`)}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
