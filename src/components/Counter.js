import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const incrementHandler = () => {
    dispatch({type: 'inc'})
  }
  const decrementtHandler = () => {
    dispatch({type: 'dec'})
  }

  const incrementBy5Handler = () => {
    dispatch({type: 'inc5', amount:2})
  }
const decremenenby5Handler = () => {
  dispatch({type: 'dec5'})
}

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter}   </div>
      
    <div>
      <button onClick={ incrementHandler} >Increment</button>
      <button onClick = { decrementtHandler } >Decrement</button>
      <button onClick={incrementBy5Handler}>IncrementBy2</button>
      <button onClick={decremenenby5Handler }>DecrementBy5</button>
    </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
