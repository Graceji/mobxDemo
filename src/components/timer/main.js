import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Main extends Component {
  render() {
    const { timerStore } = this.props;
    return (
      <div style={{fontSize: 30}}>
        <div>
          {timerStore.mainDisplay}
        </div>
      </div>
    );
  }
}

export default Main;