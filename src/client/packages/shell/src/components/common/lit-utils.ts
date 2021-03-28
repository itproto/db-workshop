import {
    customElement as litCustomElement
} from 'lit-element';

export const customElement = (tag: string) => {
    const tagName = `itpr-${tag}`
    if (customElements.get(tagName)) {
        return () => customElements.get(tagName);
    }
    return litCustomElement(tagName);
}