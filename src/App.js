import React, { Component } from "react";
import SearchBar from "./Components/SearchBar"
import VideoPanel from "./Containers/VideoPanel.js"
import RelatedPanel from "./Containers/RelatedPanel.js"
import key from "./key"
// import sampleResponse from "./Components/sampleResponse.json"


class App extends Component {

  constructor(){
    super()
    this.state = {
      searchResponse: [],
      videoDisplay: [],
      relatedDisplay: []
    }
  }



  handleSearch = (searchTerm) => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key.API_KEY}&q=${searchTerm}&type=video`
    fetch(url)
    .then(resp => resp.json())
    .then(apiResponse => {
      let allVideos = apiResponse.items
      let firstVideo = apiResponse.items[0]
      let remainingVideos = apiResponse.items.filter( video => video !== firstVideo)
      this.setState({
        searchResponse: allVideos,
        // Play the first, show the rest as related 
        videoDisplay: firstVideo,
        relatedDisplay: remainingVideos
      })
    })

    // let allVideos = sampleResponse.items
    // let firstVideo = sampleResponse.items[0]
    // let remainingVideos = sampleResponse.items.filter( video => video !== firstVideo)
    // this.setState({
    //   searchResponse: allVideos,
    //   // Play the first, show the rest as related 
    //   videoDisplay: firstVideo,
    //   relatedDisplay: remainingVideos
    // })
}

  handleNewVideo = (clickedVideo) => {
    // is related display going to be the search results minus this video
    let updatedRemaining = this.state.searchResponse.filter( video => video !== clickedVideo )
    this.setState({
      videoDisplay: clickedVideo,
      relatedDisplay: updatedRemaining
    })
  }

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch}/>
        <VideoPanel video={this.state.videoDisplay} /> 
        <RelatedPanel videos={this.state.relatedDisplay} newVideo={this.handleNewVideo}/>
      </div>
    )
  }
}

export default App;
