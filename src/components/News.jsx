import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import dummy from '../dummy.jpg'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize: 8,
    category: 'general'
  }

  static propsType ={
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
       articles: [],
       loading: true,
       page : 1,
       totalResults: 0
    }
  }

  
  async componentDidMount() {    
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63ecda4becfe415f8e268dd8c37847b5&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json();
    this.props.setProgress(70)
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading: false});
    
    this.props.setProgress(100)
  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 2});
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=63ecda4becfe415f8e268dd8c37847b5&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles), 
      totalResults: parseData.totalResults, 
      loading: false
    });
  };
  
  render() {
    return (
        <>
          <h2 className="text-center">NewMonkey - Top Headlines</h2>
          {/* {this.state.loading && <Spinner />} */}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map(article => {
                  return(
                    <div className="col-md-4 my-2" key = {article.url}>
                        <Newsitem title = {article.title?article.title: ''} description={article.description?article.description.slice(0,88): article.title} imageUrl = {article.urlToImage ? article.urlToImage : dummy} newsUrl = {article.url} date = {article.publishedAt} author= {article.author? article.author : "Unknown"} badge = {article.source.name}/>
                      </div>
                  )
                })}
              </div>
            </div>
          </InfiniteScroll>
        </>
    );
  }
}
