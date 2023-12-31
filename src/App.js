import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress});
  }
  
  render() {
    let {category} = this.props;
    return (
      <>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize = '6' country='in' category={category}/>
      </>
    );
  }
}



