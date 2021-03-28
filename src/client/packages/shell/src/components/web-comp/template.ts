


import css from 'raw-loader!./web-comp.css';
const templ = {
    create(wc: HTMLElement) {
        const shadowRoot = wc.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = this.render();
        return this.get$(wc.shadowRoot!);
    },

    get$: (scope: DocumentFragment /*ShadowRoot*/) => ({
        overlay: scope.getElementById('bg-overlay'),
        thumb: scope.getElementById('thumb'),
    }),

    css: () => `${css}`,

    html: () => `
<div id="bg-overlay">Hello</div>
<div id="thumb">World</div>
`,

    render() {
        return `
<style>
    ${this.css()}
</style>
${this.html()}`;
    }
}

export const create = templ.create.bind(templ);