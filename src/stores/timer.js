import {observable, computed, action} from 'mobx';
import {v4} from 'node-uuid';
import format from 'format-number-with-string';

export default class Timer {
  @observable milliseconds;
  @observable savedMilliseconds;

  constructor(initialMilliseconds = 0) {
    this.savedMilliseconds = 0;
    this.milliseconds = initialMilliseconds;
    this.id = v4();
  }

  @action saveTime() {

  }

  @action reset() {

  }

  @computed get totalMilliSeconds() {

  }

  @computed get display() {
    const tenMilliSeconds = parseInt(this.totalMilliSeconds / 10, 10);
    const seconds = parseInt(tenMilliSeconds / 100, 10);
    const minutes = parseInt(seconds / 60, 10);
    return `${minutes} : ${format(seconds % 60, '00')} : ${format(tenMilliSeconds % 100, '00')}`;
  }
}