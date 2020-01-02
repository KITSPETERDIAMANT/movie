import React from 'react'
import imdb from '../api/imdb'
import SearchBar from './SearchBar'
import ListComponent from './List'
import FavList from './Favs'

class App extends React.Component {
  state = {
    data: [],
    favourites: [],
    message: ''
  }

  clicked = title => {
    console.log(this.state)
    console.log('CLICKED ' + title)
    this.setState({ favourites: [...this.state.favourites, title] })

    // this.setState({ favourites: title })
    console.log(this.state)
  }

  onSubmitForm = async text => {
    const response = await imdb.get('', {
      params: { s: text }
    })

    if (response.data.Search != undefined) {
      console.log(response)
      this.setState({ data: response.data.Search })
      this.setState({ message: 'van talalat' })
    } else {
      this.setState({ data: [] })
      this.setState({ message: 'nincs talalat' })
    }
  }

  render () {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSubmitForm} />
        <li>show: {this.state.data.length}</li>
        <li>message: {this.state.message}</li>
        <FavList data={this.state.favourites} />
        <ListComponent data={this.state.data} onClick={this.clicked} />
      </div>
    )
  }
}

export default App
