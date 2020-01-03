import React, { Component } from 'react'
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

class ImageCard extends Component {
  state = {
    enabled: true,
    clickedtimes: 0
  }
  render () {
    const { Poster } = this.props.movie
    return (
      <div>
        <Card>
          <Image src={Poster} ui={false} size='large' className='image' />
          <Card.Content extra>
            <Button
              as='div'
              labelPosition='right'
              onClick={() => {
                this.setState({ enabled: false })
                this.setState({ clickedtimes: this.state.clickedtimes + 1 })
              }}
              disabled={!this.state.enabled}
            >
              <Button icon>
                <Icon name='heart' />
                Like
              </Button>
              <Label as='a' basic pointing='left'>
                {this.state.clickedtimes}
              </Label>
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ImageCard
