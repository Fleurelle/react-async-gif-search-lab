//In our app, the <GifListContainer /> will be responsible for fetching the data from the Giphy API, 
// storing the first 3 gifs from the response in its component state, DONE
// and passing that data down to its child, the <GifList> component, as a prop.
// It will also render a <GifSearch /> component that renders the form. 
// <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

import React, { Component } from 'react'
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            isFetching: false, //a random variable i created because nothing is being fetched yet. 
            results: []
        }
    }

    fetchFunction = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=iKr99CEEFE5kXh4nFbPFLD8p8V8utT0w&limit=3`) //limit the data to 3
            .then(res => res.json())
            .then(gifRes => {
                this.setState({
                    isFetching: true,
                    results: gifRes.map(gif => {
                        gif.images.original.url
                    })
                })
                console.log(gifRes)
            })
    }

    componentDidMount(){
        this.fetchFunction()
    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.state.results} />
            </div>
        )
    }
}

export default GifListContainer