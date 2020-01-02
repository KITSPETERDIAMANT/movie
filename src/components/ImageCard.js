import React, { Component } from 'react'
import './ImageList.css'
class ImageCard extends Component {
  state = {
    enabled: true
  }

  render () {
    const { Title, Poster } = this.props.movie

    return (
      <div className='container'>
        <img className='kep' alt={Title} src={Poster} />
        <button
          className='buttonka'
          onClick={() => {
            this.props.onClick(Title)
            this.setState({ enabled: false })
          }}
          disabled={!this.state.enabled}
        >
          <img
            className='kep2'
            src='https://i.pinimg.com/474x/b1/0b/d1/b10bd1b38a3b83575ef915f6c1501309.jpg'
            width='10'
            height='20'
          />
        </button>
      </div>
    )
  }
}

export default ImageCard
