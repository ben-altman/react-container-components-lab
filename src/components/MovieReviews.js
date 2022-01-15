// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ reviews }) => (
    <div className="review-list" >
        {
            reviews.map(review => (
                <div className="review" key={review.display_title}>
                    <h2>{review.display_title}</h2>
                    <p>reviewer: {review.byline}</p>
                    <p>{review.summary_short}</p>
                    <p><a href={review.link.url}>{review.headline}</a></p>
                </div>
            ))
        }
    </div> 
)

export default MovieReviews;