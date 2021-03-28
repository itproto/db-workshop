


import css from 'raw-loader!./web-comp.css';
import html from 'raw-loader!./web-comp.htm';

const templ = {
    create(wc: HTMLElement) {
        const shadowRoot = wc.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = this.render();
        return this.get$(wc.shadowRoot!);
    },

    get$: (scope: DocumentFragment /*ShadowRoot*/) => ({
        overlay: 'bg-overlay',
        thumb: 'thumb'
    }),

    css: () => `${css}`,
    html: () => `${html}`,

    render() {
        return `
<style>
    ${this.css()}
</style>
    ${this.html()}`;
    }
}

export const create = templ.create.bind(templ);