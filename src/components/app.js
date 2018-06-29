import React, { Component } from 'react';
import NavBar from './nav_bar';
import NewsList from '../containers/news_list';
import NewsDetail from '../containers/news_detail'
import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <Header/>
      <NewsList/>
      <NewsDetail/>
      </div>
    );
  }
}
