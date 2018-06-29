export const DISPLAY_NEWS = 'DISPLAY_NEWS';

export function displayNews(url){
  console.log('in the function');
  return {

    type: DISPLAY_NEWS,
    payload: url

  };


}
