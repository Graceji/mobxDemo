import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TimerDisplay extends Component {
  render() {
    const {leftText, rightText} = this.props;
    return (
      <div>
        <div>{leftText}</div>
        <div>{rightText}</div>
      </div>
    );
  }
}

export default TimerDisplay;