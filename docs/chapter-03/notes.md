```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

//? React.createElement() -> JS-object or React Element => ReactDOM.createRoot().render(JS-object) 👇
//? x.render() -> converts the 'JS-object or React Element' to 'HTML Element' => and then REPLACES(not append or insert) root files with the 'HTML Element'.

const h1 = React.createElement('h1', { id: 'h1' }, 'Hello from React JS 🚀');
// console.log(h1);

//# JSX is transpiled by parcel(with babel) before it reaches JS.
//? JSX -> 'babel-magic' => React.createElement => and then same as above 👆

const header = (
  <h1 className="h1" style={{ color: 'red', margin: '1rem' }}>
    Hello from JSX
  </h1>
);
//# const header =/*__PURE__*/React.createElement("h1", {className:"h1", style: {color: 'red', margin: '1rem'}}, "Hello from JSX"); (transpiled by babel)
// console.log(header);
const Para = () => (
  <p className="p" style={{ color: 'red', margin: '1rem' }}>
    functional component
  </p>
);

//?
const HeadingComp = () => (
  <div style={{ border: '1px red solid', padding: '1rem' }}>
    {header}
    <pre>
      {(() => {
        let result = '';
        for (let i = 5; i >= 1; i--) {
          result += '*'.repeat(i) + '\n';
        }
        return result;
      })()}
    </pre>
    <Para />
    <p> jsx line nested in fn component</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(HeadingComp(), <HeadingComp />);
console.log(HeadingComp);

root.render(<HeadingComp />);
// OR
// root.render(React.createElement(HeadingComp, null));

// root.render(HeadingComp());
// console.log(<HeadingComp /> === HeadingComp()); // false
// document.getElementById('root').innerHTML = header.props.children;
```

### Output DOM :point_down:

```html
<main id="root">
  <div style="border: 1px solid red; padding: 1rem;">
    <h1 class="h1" style="color: pink; margin: 1rem;">Hello from JSX</h1>
    <pre>
  *****
  ****
  ***
  **
  *
    </pre>
    <p class="p" style="color: green; margin: 1rem;">functional component</p>
    <p> jsx line nested in fn component</p>
  </div>
</main>
```
