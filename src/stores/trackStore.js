import { observable, computed, action } from 'mobx';

class TrackStore {
  @observable tracks;
  @observable activeTrackId;

  constructor(tracks = []) {
    this.tracks = tracks;
    this.activeTrackId = null;
  }

  @computed get activeTrack() {
    let activeTrack = null;
    trackStore.tracks.forEach(track => {
      if (track.origin.id === trackStore.activeTrackId) {
        activeTrack = track;
      }
    });
    return activeTrack;
  }

  @action setTracks = tracks => {
    this.tracks = tracks;
  }

  @action onPlay = track => {
    this.activeTrackId = track.origin.id;
  }
}

const testData = [
  {
    origin: {
      id: 1,
      name: 'Grace',
    }
  },
  {
    origin: {
      id: 2,
      name: 'JINA',
    }
  }
];

const trackStore = new TrackStore(testData);

export default trackStore;
export { TrackStore };
