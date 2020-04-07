import React, { Component } from "react";


class VideoPanel extends Component {

  

  render() {
    console.log("VideoPanel props", this.props)
    const divStyle = {
      width: "60%",
      float: "left",
      marginLeft: "30px"
    }
    if (this.props.video.id){
      const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
      return (
        // This could also be nicely styled iwth segments instead of cards
        <div style={divStyle} className="ui card">
          <div className="ui content">
            <iframe src={embedUrl} style={{width: "600px", height: "400px"}}/>
            <h2> {this.props.video.snippet.title}</h2>
            <h3> Channel: {this.props.video.snippet.channelTitle}</h3>
            <h4> {this.props.video.snippet.description}</h4>
          </div>
        </div>
      )
    } else {
      return (
        null 
      )
    } 
  }

}

export default VideoPanel;
