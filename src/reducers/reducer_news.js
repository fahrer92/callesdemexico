import {FETCH_NEWS} from '../actions/index'
export default function(state =[], action){

  switch (action.type){

    case FETCH_NEWS:
    /*
    IMPORTANT
    Always return a new instance of stated.
    Don't Mutate State
    Ex. array.concat will return a new array
    array.push will add to the existing state. Bad!

    */
    //  return state.concat([action.payload.data]);
    //Just a bit of ES6 syntax below
      console.log(action.payload.data.articles);
      return action.payload.data.articles;

  }


return state;


}
