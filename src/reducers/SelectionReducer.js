export default (state = null, action) => {
  if(state === action.payload) {
    return null;
  }
  
  switch (action.type) {
    case 'select_library': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
