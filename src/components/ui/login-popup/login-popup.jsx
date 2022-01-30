import React from 'react';
import { useDispatch } from 'react-redux';

import { requireLogin } from '../../../redux/user-data/user-data.slice';

import TextField from '../text-field/text-field';

const ESC_KEY_NAME = 'Escape';
const AccountData = {
    LOGIN: 'login123',
    PASSWORD: 'password123',
};

const LoginPopup = ({ onClose }) => {
    const [loginValue, setLoginValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [formError, setFormError] = React.useState({
        login: '',
        password: '',
        form: '',
    });

    console.log(formError);

    const dispatch = useDispatch();

    const loginInputRef = React.useRef(null);

    React.useEffect(() => {
        if (loginInputRef.current !== null) {
            loginInputRef.current.focus();
        }

        document.body.addEventListener('click', handleCloseOnClickOutside);
        document.body.addEventListener('keydown', handleCloseOnKeyPress);

        return () => {
            document.body.removeEventListener('click', handleCloseOnClickOutside);
            document.body.removeEventListener('keydown', handleCloseOnKeyPress);
        };
    }, []);

    const handleChangeLoginValue = React.useCallback((e) => {
        setLoginValue(e.target.value);
    }, []);

    const handleChangePasswordValue = React.useCallback((e) => {
        setPasswordValue(e.target.value);
    }, []);

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(requireLogin(loginValue));
            handleClearFields();
            onClose();
        }
    };

    const isFormValid = () => {
        let isValid;
        const isDataCorrectly =
            AccountData.LOGIN === loginValue && AccountData.PASSWORD === passwordValue;
        const errors = {};

        if (!loginValue) {
            isValid = false;
            errors.login = 'Введите логин';
        }

        if (!passwordValue) {
            isValid = false;
            errors.password = 'Введите пароль';
        }

        if (loginValue && passwordValue && !isDataCorrectly) {
            isValid = false;
            errors.form = 'Неверный логин или пароль';
        }

        setFormError({ ...errors });

        return isValid;
    };

    const handleClearFields = () => {
        setLoginValue('');
        setPasswordValue('');
    };

    const handleCloseOnClickOutside = ({ target }) => {
        if (!target.closest('.login-popup')) {
            onClose();
        }
    };

    const handleCloseOnKeyPress = ({ key }) => {
        if (key === ESC_KEY_NAME) {
            onClose();
        }
    };

    return (
        <div className="login-popup login-popup--opened">
            <button
                className="button button--primary login-popup__close-btn"
                aria-label="Закрыть"
                type="button"
                onClick={onClose}
            >
                X
            </button>
            <p className="login-popup__title">Войти в аккаунт</p>
            <form
                className="login-popup__form"
                action="#"
                method="post"
                onSubmit={handleSubmitLogin}
            >
                <TextField
                    ref={loginInputRef}
                    className="login-popup__field-item"
                    type="text"
                    name="login"
                    placeholder="Логин"
                    error={formError.login}
                    value={loginValue}
                    onChange={handleChangeLoginValue}
                />
                <TextField
                    autoComplete="off"
                    className="login-popup__field-item"
                    type="text"
                    name="password"
                    placeholder="Пароль"
                    error={formError.password}
                    value={passwordValue}
                    onChange={handleChangePasswordValue}
                />
                <div className="login-popup__bottom">
                    <button
                        className="button button--primary login-popup__submit-btn"
                        type="submit"
                    >
                        Войти
                    </button>
                    {formError.form && (
                        <p className="login-popup__error-message">{formError.form}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;
