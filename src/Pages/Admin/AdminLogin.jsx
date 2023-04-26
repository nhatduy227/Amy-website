import React, { useContext } from 'react'
import { signInWithGoogle } from '../../Firebase';
import { useTranslation } from 'react-i18next';
import logo from '../../Assets/logo.png';
import banner from '../../Assets/home-banner.png';
import { UserContext } from '../../App';

export default function AdminLogin() {
    const user = useContext(UserContext)
    const goToHomePage = () => {
        window.location.href = "/";
    }
    const { t } = useTranslation();
    return (
        <>
            <section class="bg-cover bg-center h-screen">
                <header className="w-full header">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 w-[200px] h-20">
                            <img src={logo} className="" alt="Amy-logo" />
                        </div>
                    </div>
                </header>
                <img
                    src={banner}
                    class="object-cover w-full h-full"
                    alt="banner"
                />
                <div class="fixed bottom-40 left-0 right-0 flex justify-center p-4">
                    {user ?
                        <button
                            onClick={goToHomePage}
                            class="bg-primary-default text-white font-semibold text-lg py-2 px-4 rounded">
                            {t('header.go to home')}
                        </button> :
                        <button
                            onClick={signInWithGoogle}
                            class="bg-primary-default text-white font-semibold text-lg py-2 px-4 rounded">
                            {t('header.login_in')}
                        </button>
                    }
                </div>
            </section>
        </>
    );
}
