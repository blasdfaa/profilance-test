import React from 'react';

const TextField = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <div className={className}>
            <label>
                <input className="text-input text-field__input" ref={ref} {...props} />
            </label>
        </div>
    );
});

export default React.memo(TextField);
