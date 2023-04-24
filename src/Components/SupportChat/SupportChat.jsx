import React, { useContext } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import { UserContext } from '../../App';

export default function SupportChat() {
    const user = useContext(UserContext)
    const handleRedirect = () => {
        const url = 'https://www.facebook.com/tranchautuoimood/';
        window.open(url, '_blank');
    };
    if (user)
        return null
    return (
        <div className="fixed bottom-4 right-4">
            <button
                onClick={handleRedirect}
                type="button" class="fixed bottom-4 right-4 select-none bg-blue-500 hover:bg-blue-700 border-2 text-white text-xl font-bold p-2 m-2 rounded-full shadow h-20 w-20 focus:outline-none focus:shadow-outline">
                <FacebookIcon style={{ fontSize: '36px' }} />
            </button>
        </div>
    );
};
