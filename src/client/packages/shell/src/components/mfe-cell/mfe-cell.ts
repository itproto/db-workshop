
import { customElement } from '../common/lit-utils';



@customElement('mfe-cell')
export class MfeCellElement extends HTMLElement {

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.render();

  }
  render() {
    return `
         <div class="grid-stack">
           <div class="grid-stack-item">
             <div class="grid-stack-item-content">Item 1</div>
           </div>
         </div>
         `

  }

  connectedCallback() {

  }

  static create = () => document.createElement('itpr-mfe-cell')
}

