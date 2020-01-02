import React from 'react'
import imdb from '../api/imdb'
import SearchBar from './SearchBar'
import ListComponent from './List'

class App extends React.Component {
  state = {
    data: [],
    favourites: []
  }

  clicked = title => {
    return console.log('CLICKED ' + title)
  }

  onSubmitForm = async text => {
    const response = await imdb.get('', {
      params: { s: text }
    })
    console.log(response)
    this.setState({ data: response.data.Search })
  }

  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        show: {this.state.data.length}
        <ListComponent data={this.state.data} onClick={this.clicked} />
      </div>
    )
  }
}

export default App
