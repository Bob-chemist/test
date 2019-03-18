import { combineReducers } from 'redux';
import login from './login';
import news from './news';
import main from './main';

export default combineReducers({
  login,
  news,
  main,
});
