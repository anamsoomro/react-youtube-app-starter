import React, { Component } from "react";


class SearchBar extends Component {

  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.searchTerm)
    event.target.reset()
  }

  // lodash is a library 
  // have an onchang wihtout handle submit 
  // you dont need event.preventDefault 
  // the event is not the input 
  // youre going to be fetching information from what youre typing 
  // so to stop it from doing so many fetches all the time 
  // use lodash debounce to do it every n ms
  // inside the app render
  // _.debounce is a function
  // import _ from lodash
  // const videoSearch = _.debounce(term => {
  //   this.handleSearch(term)
  // })
  // and now to your search bar send the videoSearch function with the debouce applied



  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{margin: "30px"}} className="ui search">
        <input 
          type="text" 
          onChange={this.handleChange} 
          className="prompt" 
          placeholder="type keywords and hit enter ... "
          style={{width: "100%"}}/>
        {/* <input type="submit" /> */}
      </form>
    )
  }
}

export default SearchBar;
