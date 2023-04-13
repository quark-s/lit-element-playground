import { LitElement, css, html } from "lit-element";
import { MobxLitElement } from '@adobe/lit-mobx';
import { appState } from '../lib/AppState'

class Header extends MobxLitElement {

    static get styles() {
      return [css``];
    }

    static get properties() {
      return {
        eg: {
          type: String,
        },
      };
    }

    constructor() {
      super();
    }

    
    render() {
        let linksLoggedIn = "";
        
        if(appState.isLoggedIn){
            linksLoggedIn = html`
                  <li><a href="/users">Users</a></li>
                  <li><a href="/users/create">Create user</a></li>      
            `
        }

        let buttonLogin = appState.isLoggedIn ? html`<button @click="${this.logout}">Logout</button>` :  html`<button @click="${this.login}">Login</button>`;

        return html`
        ${buttonLogin}
            <ul>
                <li><a href="/">Home</a></li>
                ${linksLoggedIn}
            </ul>
        `;
    }

    login(){
      appState.login();
    }
    logout(){
      appState.logout();
    }

}
customElements.define("app-header", Header);