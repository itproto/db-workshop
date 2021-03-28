
const $el = document.querySelector('#root');

import './components/web-comp/web-comp';
import { MfeCellElement } from './components/mfe-cell/mfe-cell';

import 'gridstack/dist/gridstack.min.css';
import { GridStack, GridStackWidget } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



import { iframeResizer } from 'iframe-resizer'

const policy = `sandbox="allow-forms allow-modals allow-scripts"`;

const iframe = (url: string) => {
  return `<div>
        <iframe ${policy} seamless 
        id="url"
        loading = "lazy"
        src = "http://localhost/${url}"
        height = "500px" width = "500px"> 
        </iframe>`;

}

const icell = ($comp: string,) => (`
  <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${$comp}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`);

import { WebComp } from './components/web-comp/web-comp';
if ($el) {
  $el.innerHTML = `
  <style type="text/css">
  .grid-stack { background: #FAFAD2; }
  .grid-stack-item-content { background-color: #18BC9C; }
</style>
  <style>
    iframe {
      width: 100%;
  
    }
  </style>

  <div class="grid-stack"></div>
  `

  MfeCellElement.create()
  const grid = GridStack.init()
  const key = `itpr.layout`;
  const data = JSON.parse(localStorage.getItem(key)!) as GridStackWidget[];
  grid.load(data);
  document.getElementById('it')!.addEventListener('click', () => {
    const val = JSON.stringify(grid.save(), null, 2);
    console.log(val);
    localStorage.setItem(key, val);
  });
  // iframeResizer({ log: true }, '#ag-blotter')
}

// https://habr.com/ru/post/488516/