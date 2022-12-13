import { makeAutoObservable, configure } from "mobx"

import FirebaseService from "./FirebaseService";

configure({ enforceActions: 'observed' });

class Store {
    constructor() {
        this.firebaseService = new FirebaseService(this);
        makeAutoObservable(this);
    }

    firebaseService;
}

export default new Store();