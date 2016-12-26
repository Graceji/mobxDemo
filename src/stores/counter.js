import { observable, action } from 'mobx';

class Counter {
  @observable num = 0;

  @action changeNum(type) {
    if (type === 'increase') {
      this.num ++;
    } else {
      this.num --;
    } 
  }

}

const counter = new Counter();
export default counter;