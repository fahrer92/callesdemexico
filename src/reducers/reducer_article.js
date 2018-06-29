import {DISPLAY_NEWS} from '../actions/display_news'
export default function(state =[], action){

  switch (action.type){

    case DISPLAY_NEWS:

    console.log('reducer', action.payload);
    return action.payload;


  }


return state;
}
