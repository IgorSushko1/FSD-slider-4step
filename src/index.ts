import './style.scss';
// import * as s from './style.css';
// require ("./scss.js");
function component() {
  const element = document.createElement('div');
let _ =['Hello', 'webpack'];
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(" ");

  return element;
}

document.body.appendChild(component());

require ("./function-for-test");