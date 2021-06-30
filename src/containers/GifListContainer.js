//In our app, the <GifListContainer /> will be responsible for fetching the data from the Giphy API, DONE
// storing the first 3 gifs from the response in its component state, DONE
// and passing that data down to its child, the <GifList> component, as a prop.DONE
// It will also render a <GifSearch /> component that renders the form. 
// <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList.js'

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            isFetching: false, //a random variable i created because nothing is being fetched yet. 
            results: [],
            value:"cat"
        }
    }

    fetchFunction = (value) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=iKr99CEEFE5kXh4nFbPFLD8p8V8utT0w&limit=3`) //limit the data to 3
            .then(res => res.json())
            .then(gifRes => {
                const gifVal = gifRes.data.map(gif => { gif.images.original.url })
                this.setState({
                    isFetching: true,
                    results: gifVal
                })
            })
    }

    componentDidMount() {
        this.fetchFunction(this.state.value)
    }

    render() {
        return (
            <div>
                <GifSearch fetchFunction={this.fetchFunction} />
                <GifList results={this.state.results} />

            </div>
        )
    }
}

export default GifListContainer
