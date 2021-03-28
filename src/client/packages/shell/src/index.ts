
const $el = document.querySelector('#root');

import './components/web-comp/web-comp';
import { MfeCellElement } from './components/mfe-cell/mfe-cell';



import { WebComp } from './components/web-comp/web-comp';
if ($el) {
  $el.innerHTML = `
  <h1>Shell 4</h1>
  <itpr-mfe-cell></itpr-mfe-cell>
  <itpr-mfe-cell></itpr-mfe-cell>
  <${WebComp.tag}/>
  <itpr-web-comp></itpr-web-comp>



  `
  $el.appendChild(WebComp.create())
  MfeCellElement.create()
}

// https://habr.com/ru/post/488516/