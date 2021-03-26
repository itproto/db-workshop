// import template from 'lodash.template';

const $el = document.querySelector('#root');
if ($el) {
  $el.innerHTML = `Hello world`
  /*var compiled = template(`
    <h1><%- heading %></h1>
    Current date and time: <%- dateTimeString %>
  `);
  $el.innerHTML = compiled({
    heading: 'ts-demo-webpack1',
    dateTimeString: new Date().toISOString(),
  });*/
}