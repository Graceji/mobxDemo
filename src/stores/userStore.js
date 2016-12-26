import { observable, action } from 'mobx';

class UserStore {
  @observable me;
  me = null;
  // constructor() {
  //   this.me = null;
  // }
  @action setMe = me => {
    this.me = me;
  }
}

const userStore = new UserStore();

export default userStore;
export { UserStore };