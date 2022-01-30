import React from 'react';
import { useDispatch } from 'react-redux';

import { requireLogin } from '../../../redux/user-data/user-data.slice';
import TextField from '../text-field/text-field';
import { UseCloseModal } from '../../../hooks/use-close-modal';

const AccountData = {
    LOGIN: 'login123',
    PASSWORD: 'password123',
};
const FormErrorMessage = {
    LOGIN: 'Введите логин',
    PASSWORD: 'Введите пароль',
    FORM: 'Неверный логин или пароль',
};

const LoginPopup = ({ onClose }) => {
    const [loginValue, setLoginValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [formError, setFormError] = React.useState({
        login: '',
        password: '',
        form: '',
    });

    const dispatch = useDispatch();
    const loginInputRef = React.useRef(null);

    UseCloseModal(onClose, '.login-popup');

    React.useEffect(() => {
        if (loginInputRef.current !== null) {
            loginInputRef.current.focus();
        }
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
        let isValid = true;
        const isDataCorrectly =
            AccountData.LOGIN === loginValue && AccountData.PASSWORD === passwordValue;
        const errors = {};

        if (!loginValue) {
            isValid = false;
            errors.login = FormErrorMessage.LOGIN;
        }

        if (!passwordValue) {
            isValid = false;
            errors.password = FormErrorMessage.PASSWORD;
        }

        if (loginValue && passwordValue && !isDataCorrectly) {
            isValid = false;
            errors.form = FormErrorMessage.FORM;
        }

        setFormError({ ...errors });

        return isValid;
    };

    const handleClearFields = () => {
        setLoginValue('');
        setPasswordValue('');
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
