
const $el = document.querySelector('#root');
const policy = `sandbox="allow-forms allow-modals allow-scripts"`;

import './components/web-comp/web-comp';


import { WebComp } from './components/web-comp/web-comp';
if ($el) {
  $el.innerHTML = `
  <h1>Shell 2</h1>
  <${WebComp.tag}/>
  <itpr-web-comp />
  <!--
  <iframe ${policy} seamless loading="lazy"  src="http://localhost/blotter"  height="500px" width="500px"></iframe>
  <iframe ${policy} seamless  loading="lazy" src="http://localhost/ag-blotter" height="500px" width="500px"></iframe>
 -->
  `
  $el.appendChild(WebComp.create())
}

// https://habr.com/ru/post/488516/