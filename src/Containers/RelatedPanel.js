import React, { Component } from "react";
import RelatedVideo from "../Components/RelatedVideo"


class RelatedPanel extends Component {
  
  render() {
    const divStyle = {
      width: "35%",
      float: "right",
      margin: "1em 0"
    }
    return (
      <div style={divStyle} >
        {this.props.videos.map( video => <RelatedVideo video={video} newVideo={this.props.newVideo}/>)}
      </div>
    )
  }
}

export default RelatedPanel;
