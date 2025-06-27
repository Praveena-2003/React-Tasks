import React, { useState } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 5);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Simple Counter</h1>
            <h2>{count}</h2>
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={decrement}
                    style={{ margin: '0 10px', padding: '8px 16px' }}
                >
                    Decrement
                </button>
                <button
                    onClick={reset}
                    style={{ margin: '0 10px', padding: '8px 16px' }}
                >
                    Reset
                </button>
                <button
                    onClick={increment}
                    style={{ margin: '0 10px', padding: '8px 16px' }}
                >
                    Increment
                </button>
            </div>
        </div>
    );
}

export default CounterApp;
