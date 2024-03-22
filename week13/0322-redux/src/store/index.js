import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import bankReducer from './bankReducer';

// combineReducers: 여러 개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  bank: bankReducer,
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;
