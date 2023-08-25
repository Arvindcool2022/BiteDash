import React from 'react';
import ReactDOM from 'react-dom/client';

const Para = () => (
  <p className="p" style={{ color: 'green', margin: '1rem' }}>
    functional component
  </p>
);
const header = (
  <h1 className="h1" style={{ color: 'pink', margin: '1rem' }}>
    Hello from JSX
  </h1>
);

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
root.render(<HeadingComp />);
