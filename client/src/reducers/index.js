// src/reducers/index.js
const initialState = {
    leads: [],
  };
  
  const leadReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_LEAD':
        return {
          ...state,
          leads: [...state.leads, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default leadReducer;
  