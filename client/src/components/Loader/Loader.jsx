import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Loaders = () => {
  return (
    <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
  )
}

export default Loaders