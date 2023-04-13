import { LitElement, html } from "lit-element";
import { MobxLitElement } from '@adobe/lit-mobx';
import { appState } from './lib/AppState'
import { Router } from '@vaadin/router';

import style from './app.css';

import './components/header.js';
import './components/HomeComponent';
import './components/UserCreateComponent';
import './components/UserListComponent';

// class App extends LitElement {
class App extends MobxLitElement {

  static get styles() {
    return [style];
  }
  
  constructor() {
    super();
  }

  // createRenderRoot() {
  //   return this;
  // }

  firstUpdated() {

    // const outlet = this.shadowRoot.getElementById('outlet');
    const outlet = this.renderRoot.querySelector('#outlet');
    this._router = new Router(outlet);
    this._router.setRoutes([
      {
        name: 'home',
        path: '/',
        component: 'app-home',
      },
      {
        name: 'userList',
        path: '/users',
        component: 'user-list',       
      },
      {
        name: 'userList',
        path: '/users/create',
        component: 'user-create',       
      },      
      // {
      //   name: 'userList',
      //   path: '/users/:userAlias',
      //   component: 'user-list',
      //   children: [
      //     {
      //       name: 'user-create',
      //       path: '/create',
      //       component: 'user-create',
      //     }
      //   ]        
      // }
    ]);

  }

  render() {

    let state = appState.isLoggedIn ? "logged in" : "logged out";

    return html`
      <app-header></app-header>
      <div>Loading Application Component Successfully</div>
      <div id="outlet"></div>
      ${state}
    `;
  }

}

customElements.define("app-root", App);







