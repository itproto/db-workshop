import template from 'lodash.template';

const $el = document.querySelector('#root');
if ($el) {
  var compiled = template(`
    <h1><%- heading %></h1>
    Current date and time: <%- dateTimeString %>
  `);
  $el.innerHTML = compiled({
    heading: 'ts-demo-webpack',
    dateTimeString: new Date().toISOString(),
  });
}