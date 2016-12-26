import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

@observer
class Stream extends Component {
  componentDidUpdata() {
    const audioElement = ReactDOM.findDOMNode(this.refs.audio);

    if (!audioElement) {
      return;
    }

    if (this.props.activeTrack) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const { me, tracks, activeTrack, clientId, onAuth, onPlay } = this.props;

    return (
      <div>
        <div>
          {
            me
              ? <div>{me.username}</div>
              : <button onClick={onAuth}>Login</button>
          }
        </div>
        <div>
          {
            tracks.map((track, key) => {
              return (
                <div className="track" key={key}>
                  {track.origin.title}
                  <button onClick={() => onPlay(track)}>play</button>
                </div>
              );
            })
          }
        </div>
        {
          activeTrack
          ? <audio id="audio" ref="audio" src={`${activeTrack.origin.stream_url}?client_id=${clientId}`}></audio>
          : null
        }
      </div>
    );
  }
}

export default Stream;