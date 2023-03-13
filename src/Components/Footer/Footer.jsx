import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const {t} = useTranslation()
  return (
    <div className="w-full h-[50px] flex justify-center items-center bg-black text-white z-20">
      <p>&copy; {t("footer.copy_right")}</p>
    </div>
  );
}
