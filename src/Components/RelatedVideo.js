import React, { Component } from "react";


class RealatedVideo extends Component {

  render() {
    return (

      <div className="ui card" onClick={() => this.props.newVideo(this.props.video)}>
        <div className="ui content">
          <h5>{this.props.video.snippet.title}</h5>
          <img src={this.props.video.snippet.thumbnails.default.url} />
        </div>
      </div>
    )
  }

}

export default RealatedVideo;
