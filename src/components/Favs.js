import React from 'react'

const FavList = props => {
  const favs = props.data.map(favs => {
    return <li> {favs} </li>
  })
  return <div className='ui list'> {favs} </div>
}

export default FavList
