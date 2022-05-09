import React from 'react';

function Button({title, disabled}) {
    return(
        <button className={disabled === true ? 'button:disabled' : 'button'} type="button" onClick={() => console.log({title})}>{title}</button>
    )
}

export default Button;