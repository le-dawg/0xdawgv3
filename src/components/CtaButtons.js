import React from 'react'
import {InlineWidget} from 'react-calendly'class Calendly extends Component {
  componentDidMount() {
    // whatever stuff you need here
  }  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/username/15min" />
      </div>
    );
  }
}