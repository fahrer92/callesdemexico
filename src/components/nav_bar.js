import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNews} from '../actions/index'



class NavBar extends Component{

  constructor(props){
    super(props);
    this.state = {
      term:'',
      category: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.searchCat = this.searchCat.bind(this);

  }

  onInputChange(event){

    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //Go fetch the news
    this.props.fetchNews(null,this.state.term);
    //Clear out the search term
  //  console.log(this.state.term);
    this.setState({term:''});
  }

  searchCat(event){
    this.props.fetchNews(event.target.value);

  }



  render(){

    return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick = {this.searchCat} type="button" value = 'general' className="btn btn-outline-dark">General</button>
          <button onClick = {this.searchCat} type="button" value = 'sports' className="btn btn-outline-dark">Deportes</button>
          <button onClick = {this.searchCat} type="button" value = 'entertainment' className="btn btn-outline-dark">Entretenimiento</button>
          <button onClick = {this.searchCat} type="button" value = 'science' className="btn btn-outline-dark">Ciencia</button>
          <button onClick = {this.searchCat} type="button" value = 'business' className="btn btn-outline-dark">Negocio</button>
          <button onClick = {this.searchCat} type="button"  value = 'technology' className="btn btn-outline-dark">Tecnología</button>
          <button onClick = {this.searchCat} type="button" value = 'health' className="btn btn-outline-dark">Salud</button>

        </div>

        </ul>

        <form onSubmit ={this.onFormSubmit} className = "input-group">
          <input
            placeholder = "Buscar noticias de todo el mundo"
            className = "form-control"
            value = {this.state.term}
            onChange= {this.onInputChange}
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>

      </div>
  </nav>
    );


  }

}

  function mapDispatchToProps(dispatch){

    return bindActionCreators({fetchNews},dispatch);

  }

  export default connect(null, mapDispatchToProps)(NavBar);
