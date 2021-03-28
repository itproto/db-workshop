
import { customElement } from '../common/lit-utils';
const policy = `sandbox="allow-forms allow-modals allow-scripts"`;

@customElement('mfe-cell')
export class MfeCellElement extends HTMLElement {

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = this.render();
    }
    render() {
        return `<div>
        <iframe ${policy} seamless 
        loading = "lazy"
        src = "http://localhost/blotter"
        height = "500px" width = "500px"> 
        </iframe>`;
    }

    static create = () => document.createElement('itpr-mfe-cell')
}

