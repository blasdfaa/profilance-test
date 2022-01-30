import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AppRoute } from '../../../constants';
import { ReactComponent as HeaderLogo } from '../../../assets/svg/header-logo.svg';
import UserMenu from '../../user-menu/user-menu';

const navigationItems = [{ id: 1, label: 'Новости', route: AppRoute.NEWS }];

const AppHeader = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('scroll-lock', 'scroll-lock-ios');
        } else {
            document.body.classList.remove('scroll-lock', 'scroll-lock-ios');
        }
    }, [isMobileMenuOpen]);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header__container">
                <Link to={AppRoute.HOME} className="header__logo">
                    <HeaderLogo />
                </Link>
                <nav
                    className={`header__navigation navigation ${
                        isMobileMenuOpen ? 'navigation--opened' : ''
                    }`}
                >
                    <button
                        className={`navigation__toggle ${
                            isMobileMenuOpen ? 'navigation__toggle--active' : ''
                        }`}
                        type="button"
                        aria-label="Показать/Скрыть Меню (Скрыто по умолчанию)"
                        onClick={handleMobileMenuToggle}
                    >
                        <span className="navigation__toggle-line" />
                    </button>
                    <div className="navigation__wrapper">
                        <div className="navigation__wrapper-head">
                            <Link to={AppRoute.HOME} className="header__logo">
                                <HeaderLogo />
                            </Link>
                        </div>
                        <ul className="navigation__list">
                            {navigationItems.map(({ label, route, id }) => (
                                <li className="navigation__item" key={id}>
                                    <NavLink
                                        to={route}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'navigation__link navigation__link--active'
                                                : 'navigation__link'
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <UserMenu className="header__user-menu" />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
