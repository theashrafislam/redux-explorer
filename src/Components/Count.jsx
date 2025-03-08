import React from 'react';

import {useSelector} from 'react-redux'

const Count = () => {
    // useSelector hook to access the current state of 'counter' in the Redux store
    const value = useSelector((state) => state.counter.value);
    return (
        <div>
            <h1 className='text-xl text-center'>Count: {value}</h1>
        </div>
    );
};

export default Count;