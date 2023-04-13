import { LitElement, html } from "lit-element";

class UserListComponent extends LitElement {
    render() {
      return html`
        <div>
          <h1>UserListComponent</h1>
        </div>
        <div>
          <slot></slot>
        </div>        
      `;
    }
  }
  
  customElements.define("user-list", UserListComponent);