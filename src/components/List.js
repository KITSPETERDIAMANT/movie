import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ListComponent = props => {
  const movies = props.data.map(movie => {
    console.log(movie.imdbID)

    return (
      <ImageCard key={movie.imdbID} movie={movie} onClick={props.onClick} />
    )
  })
  return <div className='image-list'> {movies} </div>
}

export default ListComponent
