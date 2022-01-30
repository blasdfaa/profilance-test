import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../../constants';

import {
    selectAuthorizationStatus,
    selectUserName,
} from '../../../redux/user-data/user-data.selector';
import MainLayout from '../../ui/main-layout/main-layout';

const Home = () => {
    const userName = useSelector(selectUserName);
    const authorizationStatus = useSelector(selectAuthorizationStatus);

    return (
        <MainLayout>
            <div className="container">
                <h1 className="visually-hidden">Главная</h1>
                {authorizationStatus === AuthorizationStatus.NO_AUTH && (
                    <p className="welcome-message">Привет, Гость</p>
                )}
                {authorizationStatus === AuthorizationStatus.AUTH && (
                    <p className="welcome-message">
                        Привет, <span className="welcome-message__user-name">{userName}</span>
                    </p>
                )}
            </div>
        </MainLayout>
    );
};

export default Home;
