import React, {Component} from 'react';
import i from '../img/callestitle.png';

export default class Header extends Component{
  //const video = props.video;
  render(){

    return(
      <div className="container">
        <div className ='container'>
        <img className ="Header img-fluid rounded mx-auto d-block" src = {i} />
        </div>
      </div>

    )
  }
}
