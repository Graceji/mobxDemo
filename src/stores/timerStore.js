import {observable, computed, action} from 'mobx';
import Timer from './timer';

export default class TimerStore {
  @observable isRunning;
  @observable timer;
  @observable startTime;

  @observable laps;

  constructor() {
    this.isRunning = false;
    this.timer = new Timer();
    this.laps = [];
  }

  @computed get mainDisplay() {
    return this.timer.display;
  }

  @computed get hasStarted() {

  }

  @computed get length() {

  }

  @computed get lapTime() {

  }

  @computed get lapSata() {

  }

  @action measure() {

  }

  @action startTimer() {

  }

  @action stopTimer() {

  }

  @action resetTimer() {

  }



}