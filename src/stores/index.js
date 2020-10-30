import SessionStore from './sessionStore';
import UserStore from './userStore';
import MessageStore from './messageStore';

class RootStore {
    constructor() {
        this.sessionStore = new SessionStore(this);
        this.userStore = new UserStore(this);
        this.messageStore = new MessageStore(this);
    }
}

const rootStrore = new RootStore();

export default rootStrore;