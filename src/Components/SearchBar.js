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
