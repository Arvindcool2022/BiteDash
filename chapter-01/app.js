const para1 = document.createElement('p');
para1.innerText = 'Hello from Javascript';
para1.classList.add('para');
para1.style.color = 'springGreen';
para1.style.backgroundColor = 'aqua';
para1.id = 'para1';
const app = document.querySelector('#app');
app.appendChild(para1);

const para2 = React.createElement(
  'p',
  {
    id: 'para2',
    style: { color: 'tomato', backgroundColor: 'gold' }, // not Background-color
    className: 'para secondClassName',
    random: 'whatever'
  },
  'Hello from React JS!'
);
console.log(para2);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(para2);
