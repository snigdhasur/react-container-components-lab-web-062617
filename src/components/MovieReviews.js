// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
	const reviewDivs = props.reviews.map(review => <div className="review">{review.summary_short}</div>)

	return (<div className="review-list"> 
				{reviewDivs}
		</div>)
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;