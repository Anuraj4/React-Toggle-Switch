import React, { useState } from 'react'
import './CountIncrement.css'

const CountIncrement = () => {

    const [count, setCount] = useState(1);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className="container">
                <button className="count" onClick={updateCount}>Update</button>
                <p>Count: {count}</p>
            </div>
        </>
    )
}

export default CountIncrement