//In our app, the <GifListContainer /> will be responsible for fetching the data from the Giphy API, 
// storing the first 3 gifs from the response in its component state, 
// and passing that data down to its child, the <GifList> component, as a prop.
// It will also render a <GifSearch /> component that renders the form. 
// <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

import React, { Component } from 'react'

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            isFetching: false, //a random variable i created because nothing is being fetched yet. 
            results: []
        }
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=iKr99CEEFE5kXh4nFbPFLD8p8V8utT0w`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isFetching: true,
                    results: data               
                })
            })
    }

    render() {
        return (
            <div>
                GIIIIIIIIFFFFFFFFFFFFSSSSSSSSSSSS
            </div>
        )
    }
}

export default GifListContainer