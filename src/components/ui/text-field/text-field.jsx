import React from 'react';

const TextField = React.forwardRef(({ className, error, ...props }, ref) => {
    const inputName = props.placeholder;

    return (
        <div className={className}>
            <label>
                <input className="text-input" ref={ref} {...props} />
            </label>
            {error && (
                <p className="text-input__error-message">{inputName} не должен быть пустым</p>
            )}
        </div>
    );
});

export default React.memo(TextField);
