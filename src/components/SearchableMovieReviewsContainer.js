// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1e88c72179974586a0679c87e90077c1';



// Code LatestMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  
  state = {
    reviews: [],
    searchTerm: "",

  }



  handleSubmit = (event) => {
  	event.preventDefault()
  	const SEARCH_TERM = this.state.searchTerm
  	const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
			+ `query=${SEARCH_TERM}` + '&'
            + `api-key=${NYT_API_KEY}`;
  	fetch(URL)
	.then(res => res.json())
	.then(json => this.setState({reviews: json.results}))	
  }

  handleChange = (event) => {
  	console.log(event)
  	this.setState({searchTerm: event.target.value})
  }

  render() {
    
    return (
      <div className="searchable-movie-reviews">
      	<form onSubmit={this.handleSubmit}> 
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit" value="search"/>
        </form>
      	< MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
