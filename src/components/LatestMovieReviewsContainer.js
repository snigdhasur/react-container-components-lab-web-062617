import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '1e88c72179974586a0679c87e90077c1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  
  state = {
    reviews: [],
  }

  componentWillMount() {
  	fetch(URL)
	.then(res => res.json())
	.then(json => this.setState({reviews: json.results}))
  }


  render() {
    
    return (
      <div className="latest-movie-reviews">
      	< MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
