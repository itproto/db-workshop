import {
    LitElement, html, property
} from 'lit-element';
import { customElement } from '../common/lit-utils';



@customElement('lit-hello')
export class LitHelloElement extends LitElement {
    @property({ type: String }) title: string = "default title";
    @property({ type: String }) description: string = "default description";

    render() {
        return html`
        HELLO
        <style>
        .container {
            padding: 30px;
            text-align: center;
            background: #c8e7fd;
        }
        .container h1 {
            font-size: 50px;
        }
        </style>
        <div class="container">
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        </div>
        `;
    }

    static create = () => document.createElement('itpr-lit-hello')
}

