import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/CounterSlice';



const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
         <h1>Redux Counter: {count}</h1>
         <button onClick={() => dispatch(increment())}>+</button>
         <button onClick={() => dispatch(decrement())}>-</button>
         <button onClick={() => dispatch(reset())}>Reset</button>
        
        </>
    )
}
export default Counter;