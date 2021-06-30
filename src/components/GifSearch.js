// The <GifSearch /> component will render a form that receives the user input for the Giphy search. 
// The text input should be a controlled component that stores the value of the input in its component state and renders the DOM accordingly. DONE
// The React component is always in charge of what the DOM looks like.

// <GifSearch /> should receive a callback prop from its parent. DONE
// On a submit event, it should invoke that callback prop with the value of the text input. DONE
// It is this callback function, defined in <GifListContainer />, that will actually query the API with the text the user has entered.


import React, { Component } from 'react'

class GifSearch extends Component {
  handleClick = (event) => {
    event.preventDefault()
    this.props.fetchFunction(this.state.value)
  }

  //for when the inout value changes
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Enter a Search Term:</h3>

        <form onSubmit={this.handleClick}>
          <input type="text" value={this.props.value} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        
      </div>
    )
  }
}

export default GifSearch
