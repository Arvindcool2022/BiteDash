//# vanilla JS
const para1 = document.createElement('p');
para1.innerText = 'A sibling <p> tag';
para1.classList.add('para');
para1.style.color = 'green';
para1.style.backgroundColor = 'white';
para1.id = 'para1';

const header1 = document.createElement('h1');
header1.innerText = 'Hello from Javascript!';

const div1 = document.createElement('div');
div1.classList.add('container');
div1.style.color = 'yellow';
div1.style.backgroundColor = 'red';
div1.id = 'parent';
div1.appendChild(header1);
div1.insertAdjacentElement('beforeend', para1);

const section1 = document.createElement('section');
section1.appendChild(div1);
const app = document.querySelector('#app');
app.appendChild(section1);

// console.log(typeof para1, '\n', '\n', para1, '\n', '\n', para1.outerHTML);
// app.innerHTML = section1.outerHTML;

//# react-core

const header = React.createElement('h1', {}, 'Hello from React JS!');

const para2 = React.createElement(
  'p',
  {
    id: 'para2',
    className: 'para child',
    style: { backgroundColor: 'lime' },
    random: 'whatever'
  },
  'A sibling <p> tag'
);
// console.log(typeof para2,'\n', '\n', para2, '\n', '\n', para2.props, ' are childern of ', para2.type);

const div = React.createElement(
  'div',
  {
    className: 'container',
    id: 'parent',
    style: { color: 'tomato', backgroundColor: 'pink' } // not Background-color
  },
  [header, para2]
);

const section = React.createElement('section', { id: 'grandParent' }, div);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(section);
