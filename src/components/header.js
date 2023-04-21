import { LitElement, css, html } from "lit-element";
import { MobxLitElement } from '@adobe/lit-mobx';
import { appState } from '../lib/AppState'

class Header extends MobxLitElement {

    createRenderRoot() {
        return this;
    }    

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

    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    // <div class="container-fluid">
    //   <a class="navbar-brand" href="#">Navbar w/ text</a>
    //   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarText">   
//     <li class="nav-item">
//     <a class="nav-link active" aria-current="page" href="#">Home</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">Features</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">Pricing</a>
//   </li>


// <!-- <li class="nav-item dropdown">
// <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//     Link
// </a>
// <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
//     <li><a class="dropdown-item" href="#">Action</a></li>
//     <li><a class="dropdown-item" href="#">Another action</a></li>
//     <li><hr class="dropdown-divider"></li>
//     <li><a class="dropdown-item" href="#">Something else here</a></li>
// </ul>
// </li>                             -->

    render() {
        let linksLoggedIn = "";
        
        if(appState.isLoggedIn){
            linksLoggedIn = html`
                <li class="nav-item"><a class="nav-link"  href="/users">Users</a></li>
                <li class="nav-item"><a class="nav-link"  href="/users/create">Create user</a></li>
            `
        }

        let buttonLogin = appState.isLoggedIn ? html`<button @click="${this.logout}">Logout</button>` :  html`<button @click="${this.login}">Login</button>`;

        return html`
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        ${buttonLogin}                        
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                            ${linksLoggedIn}
                        </ul>
                    </div>
                </div>
            </nav>            
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