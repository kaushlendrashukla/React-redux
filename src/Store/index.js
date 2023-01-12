import  { createStore } from "redux"

const counterReducer=(state={counter:0}, action)=>{
   let counter; 
    if(action.type==="inc")
    {
        return{
          counter: state.counter +1
        }
    }
    if(action.type==="dec"){
        return {
            counter: state.counter-1
        }
    }
    if(action.type==="inc5"){
        return {
            counter: state.counter + action.amount,
        }
    }
    if(action.type==="dec5"){
        return {
            counter: state.counter-5,
        }
    }
    
    return state;
}

const store=createStore(counterReducer)

export default store;

