import React from 'react';

const SearchField = ({ value, onChangeValue, onClearValue, ...props }) => {
    return (
        <div className="search-field">
            <input
                className="text-input search-field__input"
                type="text"
                id="search-field"
                name="search-field"
                value={value}
                onChange={onChangeValue}
                {...props}
            />
            {value && (
                <button
                    className="button search-field__clear-btn"
                    type="button"
                    onClick={onClearValue}
                >
                    <span className="visually-hidden">Очистить поле</span>
                </button>
            )}
        </div>
    );
};

export default React.memo(SearchField);
