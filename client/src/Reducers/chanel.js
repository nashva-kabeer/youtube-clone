import { MdPendingActions } from "react-icons/md";

const chanelReducer = (states=[],action) => {
    switch (action.type){
        case "UPDATE_DATA":
            return states.map(state=>states._id===MdPendingActions.payload._id? action.payload:state)
        case "FETCH_CHANELS":
            return action.payload;
        default: 
            return states;
    }
}

export default chanelReducer;