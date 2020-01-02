import React from 'react'

class SearchBar extends React.Component {
  state = {
    text: ''
  }

  onInputChange = event => {
    this.setState({
      text: event.target.value
    })

    console.log('######### ' + this.state.text)
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
  }

  render () {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onSubmitForm}>
          <div className='field'>
            <label> Image Search</label>
            <input
              type='text'
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
