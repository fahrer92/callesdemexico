import { combineReducers } from 'redux';
import NewsReducer from './reducer_news';
import ArticleReducer from './reducer_article';

const rootReducer = combineReducers({
  news:NewsReducer,
  article:ArticleReducer
});

export default rootReducer;
