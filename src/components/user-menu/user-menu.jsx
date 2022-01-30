import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AuthorizationStatus } from '../../constants';
import { selectAuthorizationStatus } from '../../redux/user-data/user-data.selector';
import { requireLogout } from '../../redux/user-data/user-data.slice';
import LoginPopup from '../ui/login-popup/login-popup';

const UserMenu = ({ className, ...props }) => {
    const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);

    const dispatch = useDispatch();

    const authorizationStatus = useSelector(selectAuthorizationStatus);

    const handleLogout = () => {
        dispatch(requireLogout());
    };

    const handleOpenLoginPopup = () => {
        setLoginPopupOpen(true);
    };

    const handleCloseLoginPopup = () => {
        setLoginPopupOpen(false);
    };

    return (
        <div className={`user-menu ${className}`} {...props}>
            {authorizationStatus === AuthorizationStatus.NO_AUTH && (
                <>
                    <button
                        className="button button--outline user-menu__login-btn"
                        type="button"
                        onClick={handleOpenLoginPopup}
                    >
                        Вход
                    </button>
                    {isLoginPopupOpen && <LoginPopup onClose={handleCloseLoginPopup} />}
                </>
            )}
            {authorizationStatus === AuthorizationStatus.AUTH && (
                <div className="user-menu__profile">
                    <button
                        className="button user-menu__logout-btn"
                        type="button"
                        onClick={handleLogout}
                    >
                        Выйти
                    </button>
                    <img
                        className="user-menu__profile-avatar"
                        src="https://avatars.dicebear.com/api/avataaars/1.svg"
                        alt="Аватар пользователя"
                    />
                </div>
            )}
        </div>
    );
};

export default UserMenu;
