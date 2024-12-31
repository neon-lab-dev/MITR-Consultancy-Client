import React from 'react';

const Button = ({title, variant} : {title:string, variant:string}) => {
    return (
        <button className={`${variant === "primary" ? "bg-primary-20 border-primary-20 text-white" : "text-white border-white"} border px-6 py-3 font-Inter text-lg font-medium rounded`}>{title}</button>
    );
};

export default Button;