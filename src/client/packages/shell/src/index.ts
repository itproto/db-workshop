
const $el = document.querySelector('#root');
const policy = `sandbox="allow-forms allow-modals allow-scripts"`;
if ($el) {
  $el.innerHTML = `
  <h1>Shell</h1>
  <iframe ${policy} seamless loading="lazy"  src="http://localhost:5001"  height="500px" width="500px"></iframe>
  <iframe ${policy} seamless  loading="lazy" src="http://localhost:5001" height="500px" width="500px"></iframe>

  `
}

// https://habr.com/ru/post/488516/