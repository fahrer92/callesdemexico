import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {displayNews} from '../actions/display_news';

 class NewsList extends Component{

   constructor(props){

     super(props);
     this.launchAction=this.launchAction.bind(this);
   }

   launchAction(e){
     const targ =e.target.closest(".list-group-item").getAttribute('data-url');
     this.props.displayNews(targ);
   }

  renderNews(article){

    const id = article.publishedAt;
    const img = article.urlToImage;
    const title = this.limitNewsTitle(article.title);
    const source = article.source.name;
    const url = article.url;

    return (
      <li key={id} data-url = {url} onClick = {this.launchAction} className = "list-group-item">
        <div  className = "video-list media">
          <div className = "media-left">
            <img className = "media-Object" src ={img}/>
          </div>

          <div className = "media-body">
            <div className = "media-heading">
             <h6>{title}</h6>
             <p>{source} </p>
            </div>
          </div>
        </div>
      </li>

    )
}

limitNewsTitle(title, limit = 21){

if (title){

  const newTitle = [];
  if (title.length>limit){
    ///array.reduce(function(total, currentValue,), initialValue)
    title.split(' ').map(el=>{

      if (newTitle.join(' ').length <limit){
        newTitle.push(el);
      }

    })
    return `${newTitle.join(' ')}...`;
  }

}
return title;

}

  render(){
    return(
      <div className="results ">
          <ul className="results__list float-sm-left">

              {this.props.news.slice(0,7).map(el =>this.renderNews(el))}

          </ul>
      </div>
    );


  }

}

function mapStateToProps(state){

//Specifically usuing news key because
//news key is used in reducer
return {news:state.news};
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({displayNews},dispatch);

}




export default connect(mapStateToProps,mapDispatchToProps)(NewsList);
