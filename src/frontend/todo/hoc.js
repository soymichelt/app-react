import React from 'react';
const StringUpperComponent = (OtherComponent) => {
    return ({ children, ...otherProps}) => {
        return (
            <OtherComponent {...otherProps}>
                {children.toUpperCase()}
            </OtherComponent>
        );
    };
};
export default StringUpperComponent;