const initialState = true;

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === 'CHANGE') {
    return !state;
  }
  return state;
};

export default isVisibleReducer;
