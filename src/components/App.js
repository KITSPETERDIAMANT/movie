import React from 'react'
import imdb from '../api/imdb'
import SearchBar from './SearchBar'
import ListComponent from './List'

class App extends React.Component {
  state = {
    images: []
  }

  onSubmitForm = async text => {
    const response = await imdb.get('', {
      params: { s: text }
    })
    console.log(response)
    this.setState({ images: response.data.Search })
  }

  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        show: {this.state.images.length}
        <ListComponent images={this.state.images} />
      </div>
    )
  }
}

export default App
