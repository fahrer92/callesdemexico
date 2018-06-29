import React, {Component} from 'react';
import {connect} from 'react-redux';


  class NewsDetail extends Component{

    handleError(){

      console.log("error!;");

    }

    render(){

      return(

          <div className = "intrinsic-container float-right col-md-7 embed-responsive embed-responsive-1by1 iframe-placeholder">
            <iframe
            className = "embed-responsive-item"
            src = {this.props.article}
            onError ={this.handleError}
            ></iframe>
          </div>
      );

    }
  }


function mapStateToProps(state){

//Specifically usuing article key because
//article key is used in reducer
return {article:state.article};
}

export default connect(mapStateToProps)(NewsDetail);
