import { observable, action, makeObservable } from 'mobx';

class AppState {

    isLoggedIn = false;

    constructor() {
        makeObservable(this, {
            isLoggedIn: observable,
            login: action,
            logout: action
        });
        // this.login = action('login', () => this.isLoggedIn = true);
        // this.logout = action('logout', () => this.isLoggedIn = false);
    }

    login(){
        this.isLoggedIn = true;
    }
    logout(){
        this.isLoggedIn = false;
    }
}


const appState = new AppState();

export {appState};