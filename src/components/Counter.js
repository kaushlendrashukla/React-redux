import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/index';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const incrementHandler = () => {
    dispatch(counterActions.inc())
  }
  const decrementtHandler = () => {
    dispatch(counterActions.dec())
  }

  const incrementBy5Handler = () => {
    dispatch(counterActions.inc5(10))
  }
const decremenenby5Handler = () => {
  dispatch({type: 'dec5'})
}

  const toggleCounterHandler = () => {
    dispatch (counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}> {counter}   </div>}
      
    <div>
      <button onClick={ incrementHandler} >Increment</button>
      <button onClick = { decrementtHandler } >Decrement</button>
      <button onClick={incrementBy5Handler}>IncrementBy10</button>
     
    </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
