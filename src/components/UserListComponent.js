import { LitElement, html } from "lit-element";

import { MobxLitElement } from '@adobe/lit-mobx';
import { appState } from '../lib/AppState'

class UserListComponent extends MobxLitElement {

    createRenderRoot() {
        return this;
    }

    render() {
      return html`
        <div>
          <h1>UserListComponent</h1>
        </div>
        <div>
          <slot></slot>
        </div>
        <button class="pure-button">A Pure Button</button>
      `;
    }
  }
  
  customElements.define("user-list", UserListComponent);