import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '9BzX2ECNGS60tcX8kL56NfTA0rlCgFsR';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(data => {
            this.setState({ reviews: data.results })
        })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.handleChange} />
                    <input type='submit' value='Find Reviews'/>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value})
    }
}
