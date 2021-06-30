// <GifList /> is a presentational component. It receives data from its props and 
// renders html given the input data. It can render a top level <ul> with each gif as an <li>. 

import React from 'react'

class GifList extends React.Component {
    render() {
        return (
            <div>
               {this.props.results}
            </div>
        )
    }
}

export default GifList