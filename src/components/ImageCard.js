import React, { Component } from 'react'

class ImageCard extends Component {
  render () {
    const { Title, Poster, image } = this.props.movie

    return (
      <div>
        <h1> {Title} </h1>
        <img alt={Title} src={Poster} />
        <button
          className='ui primary button'
          onClick={() => this.props.onClick(Title)}
        >
          ADD TO FAVOURITES{' '}
        </button>
      </div>
    )
  }
}

export default ImageCard
