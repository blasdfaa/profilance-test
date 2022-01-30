import React from 'react';

const ESC_KEY_NAME = 'Escape';

export const UseCloseModal = (onCloseModal, modalSelector) => {
    React.useEffect(() => {
        document.body.addEventListener('click', handleCloseOnClickOutside);
        document.body.addEventListener('keydown', handleCloseOnKeyPress);

        return () => {
            document.body.removeEventListener('click', handleCloseOnClickOutside);
            document.body.removeEventListener('keydown', handleCloseOnKeyPress);
        };
    }, []);

    const handleCloseOnClickOutside = ({ target }) => {
        if (!target.closest(modalSelector)) {
            onCloseModal();
        }
    };

    const handleCloseOnKeyPress = ({ key }) => {
        if (key === ESC_KEY_NAME) {
            onCloseModal();
        }
    };
};
