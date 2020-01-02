import React, { Component } from 'react'

class ImageCard extends Component {
  state = {
    enabled: true
  }

  render () {
    const { Title, Poster } = this.props.movie

    return (
      <div>
        <h1> {Title} </h1>
        <img alt={Title} src={Poster} />
        <button
          className='ui primary button'
          onClick={() => {
            this.props.onClick(Title)
            this.setState({ enabled: false })
          }}
          disabled={!this.state.enabled}
        >
          ADD TO FAVOURITES{' '}
        </button>
      </div>
    )
  }
}

export default ImageCard
