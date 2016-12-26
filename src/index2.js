import React, { Component } from 'react';
import { render } from 'react-dom';
import counter from './stores/counter';
import { Provider, observer, inject } from 'mobx-react';

@inject('counter') @observer 
class Button extends Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const { counter } = this.props;
    counter.changeNum('increase');
  }

  decrease() {
    const { counter } = this.props;
    counter.changeNum('decrease');
  }

  render() {
    const { children, onClick, type } = this.props;
    return (
      <button onClick={type=== 'increase' ? this.increase : this.decrease}>
        {children}
      </button>
    );
  }
}

@inject('counter') @observer 
class Counter extends Component {
  getNumber(num) {
    return (
      <div>
        Counter: {num}
      </div>
    )
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        {this.getNumber(counter.num)}
        <Button onClick={this.increase} type="increase">+</Button>
        <Button onClick={this.decrease} type="decrease">-</Button>
      </div>
    );
  }
}

render(
  <Provider counter = {counter}>
    <Counter />
  </Provider>,
  document.getElementById('app')
);