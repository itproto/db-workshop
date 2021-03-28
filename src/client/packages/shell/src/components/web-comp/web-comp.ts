import { create } from './template';

type IDom = ReturnType<typeof create>
const ns = `itpr`;

export class WebComp<D = any> extends HTMLElement {
    private $: IDom;
    constructor() {
        super();
        this.$ = create(this);
        this.addEventListener('mousedown', e => this.eventHandler(e));
    }

    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(name: string, oldVal: any, newValue: any) {
        switch (name) {
            case 'value':
                this.refreshSlider(newValue);
                break;
        }
    }

    set value(val: any) { this.setAttribute('value', String(val)); }
    get value() { return this.getAttribute('value'); }


    refreshSlider = (value: any) => {
        // this.dom.thumb.style.left = (value / 100 * this.offsetWidth - this.dom.thumb.offsetWidth / 2) + 'px';
    }

    eventHandler = (e: any) => {
        console.log(e)
    }

    static tag = `${ns}-web-comp`;
    static create = () => document.createElement(WebComp.tag) as WebComp;
}

if (!customElements.get(WebComp.tag)) {
    customElements.define(WebComp.tag, WebComp);
}