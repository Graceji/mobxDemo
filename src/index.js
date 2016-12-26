import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './components/timer/main';

import TimerStore from './stores/timerStore';


const timerStore = new TimerStore();

render(<Main timerStore={timerStore} />, document.getElementById('app'));