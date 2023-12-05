import React from 'react';

const string = "Hello world!"
const number = 123

const JSX = () => {
    return (
        <>
            <div>
                <h2>пример</h2>
                <p>{string}</p>
            </div>
            <div>
                <p>{number}</p>
            </div>
            <div>
                <input type="text" placeholder='bruh'/>
            </div>
        </>
    );
};

export default JSX;