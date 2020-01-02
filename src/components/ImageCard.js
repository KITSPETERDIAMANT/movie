import React, { Component } from 'react'

class ImageCard extends Component {
  render () {
    const { Title, Poster } = this.props.image
    return (
      <div>
        <img alt={Title} src={Poster} />
      </div>
    )
  }
}

export default ImageCard
