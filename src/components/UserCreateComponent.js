import { LitElement, html } from "lit-element";

class UserCreateComponent extends LitElement {
    render() {
      return html`
        <div>
          <h1>UserCreateComponent</h1>
        </div>
      `;
    }
  }
  
  customElements.define("user-create", UserCreateComponent);