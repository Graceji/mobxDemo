import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx-react';
import Stream from './presenter';
import { CLIENT_ID } from '../../constants/auth';
import { auth } from '../../actions/auth';

@inject('stores') @observer
export default class StreamContainer extends Component {
  render() {
    const { userStore, trackStore } = this.props.stores;   
    return (
      <Stream 
        me={userStore.me}
        tracks={trackStore.tracks}
        activeTrack={trackStore.activeTrack}
        clientId={CLIENT_ID}
        onAuth={auth}
        onPlay={trackStore.onPlay}
      />
    );
  }
}