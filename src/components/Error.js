import React from 'react';

const Error = ({ error, setError, texto }) => {
    if (error) {
        return (
            <div className="callout alert">{texto} <span onClick={()=>{setError(false)}}>&times;</span></div>
        )
    } else {
        return (
            <div></div>
        );
    }
    
}

export default Error;