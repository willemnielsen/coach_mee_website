import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import CardRow from './CardRow'

export default class EventSection extends Component {
  render() {
    // testing
    return (
      <Row>
        <Row className='title' style={{color: 'black'}}>
          Upcoming Events
        </Row>
        <CardRow/>
      </Row>
    )
  }
}
