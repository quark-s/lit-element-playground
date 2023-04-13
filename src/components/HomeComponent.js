import { LitElement, html } from "lit-element";

class HomeComponent extends LitElement {
    render() {
      return html`
        <div>
          <h1>HomeComponent</h1>
        </div>
      `;
    }
  }
  
  customElements.define("app-home", HomeComponent);