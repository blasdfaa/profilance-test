import React from 'react';

import AppHeader from '../app-header/app-header';

const MainLayout = ({ children }) => {
    return (
        <div className="wrapper">
            <AppHeader />
            {children}
        </div>
    );
};

export default MainLayout;
