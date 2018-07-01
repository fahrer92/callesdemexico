import axios from 'axios';

const API_KEY = '57bf0ad468fa485c9d33cfe0172d9a9f';
const ROOT_URL = `https://newsapi.org/v2/`

export const FETCH_NEWS = 'FETCH_NEWS';
export const DISPLAY_NEWS = 'DISPLAY_NEWS';

export function fetchNews(category, term){
  let url;
  if (category != null){
    console.log(category);
    url = `${ROOT_URL}top-headlines?country=mx&category=${category}&apiKey=${API_KEY}`;
  } else{
    console.log(term);
    url = `${ROOT_URL}everything?q=${term}&language=es&apiKey=${API_KEY}`;

  }

  const request = axios.get(url);
  console.log(request);

  return {

    type: FETCH_NEWS,
    payload: request

  };
}

export function displayNews(url){
  console.log('in the function');
  return {

    type: DISPLAY_NEWS,
    payload: url

  };


}
