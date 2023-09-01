# _Chapter 01 - Inception_

## CDN - `Content Delivery Network`

A `CDN` is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed. By caching content physically close to where a user is and reducing the distance it has to travel, latency is reduced. This process also decreases stress on origin servers by distributing the load geographically across multiple servers.

Learn-more: [link](https://www.akamai.com/glossary/what-is-a-cdn#:~:text=A%20CDN%20is%20a%20network,and%20stored%20elsewhere%20as%20needed.)

## crossorigin

The attribute sets the mode of request to an HTTP CORS Request. It is a request of resource from another domain (like stylesheets, font, image or scripts).

Attribute `crossorigin` is valid on script tag or media tags.

## CORS - Cross-Orgin Resouce Sharing

`CORS` is used to manage cross-origin requests.

`CORS` is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

Learn-more: [link 1](https://dev.to/lydiahallie/cs-visualized-cors-5b8h),
[link 2](https://blog.webdevsimplified.com/2021-05/cors/)

## Why is `React known as React`

React is called React because it is a library that reacts to changes in data and updates the user interface accordingly. It was originally developed by Facebook and was released as an open-source project in 2013. The name "React" reflects its purpose of reacting to changes in data and rendering the appropriate changes in the user interface.

Learn-more: [link 1](https://medium.com/@dhawalpandya/why-is-react-called-react-92f83b10aeac#:~:text=It%20was%20developed%20by%20Facebook,react%E2%80%9D%20to%20changes%20in%20data.),
[video 2](https://www.youtube.com/watch?v=dpw9EHDh2bM&t=3455s)

## Difference between `React and ReactDOM`

React and ReactDOM are two closely related libraries in the React ecosystem, and they play distinct roles in the process of building and rendering user interfaces using React.

### _React_

`React` is the core library that provides the foundation for building user interfaces using a component-based approach. It enables you to create reusable UI components and manage the state and props that flow between them. `React` introduces concepts like JSX (a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files) and the virtual DOM (a lightweight in-memory representation of the actual DOM, used for efficient updates).

### _ReactDOM_

`ReactDOM` is a specific package that serves as the entry point for working with the DOM (Document Object Model) in the context of React applications. It provides methods for rendering React components into the actual DOM, updating them efficiently, and interacting with browser events.

> In summary, while React focuses on creating and managing components, states, and props, `ReactDOM` focuses on the interaction between React and the DOM. `ReactDOM` provides methods for rendering your React components, updating them, and handling events in the browser. It bridges the gap between the virtual representation of the UI (managed by React) and the actual HTML elements in the browser.

Exapmple:-

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Define a simple React component
const App = () => {
  return <h1>Hello from React!</h1>;
};

// Render the React component into the DOM
ReactDOM.render(<App />, document.getElementById('root'));
```

> In this example, ReactDOM.render() is used to render the <App /> component into the DOM element with the ID root. React takes care of managing the component's state, rendering, and updating, while ReactDOM handles the actual rendering process into the HTML document.

Learn-more: [link 1](https://www.geeksforgeeks.org/how-react-and-reactdom-works/),
[link 2](https://stackoverflow.com/questions/34114350/react-vs-reactdom)

## Difference between `react.development.js` and `react.production.js` files via `CDN`?

In `development mode`, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

In `production mode`, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to `development mode`. Performance will be much faster in `production mode` when compared to `development mode`.

**TLDR**: In `production mode` lower file-size, more performance, No error messages,

Learn-more: [link 1](https://stackoverflow.com/questions/75791204/the-difference-between-react-development-js-and-react-production-js-files-via-cd#:~:text=In%20production%20mode%2C%20compression%20and,when%20compared%20to%20development%20mode.),
[link 2](https://www.cloudhadoop.com/react-production-development-build)

## Diffrence is `async and defer`?

`Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

### _Syntax_

```html
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### _Syntax_

```html
<script src="demo_defer.js" defer></script>
```

Unless you're supporting ancient legacy systems, always add `type="module"` to all your script tags:

```html
<script type="module" src="main.js"></script>
and place the tag inside <head></head>
```

```html
 <script defer nomodule> //can be used as a legacy fallback.
```

As the name suggests, it allows you to import `modules`, which makes it easier to organize your code.
Enable `strict mode` by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them.
Execute your code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events.
Prevent top level variables from implicitly polluting the global namespace.
Allow you to use top-level await in supported engines.
Load and parse your code `asynchronously`, which improves load performance.

[watch video](https://www.youtube.com/watch?v=IrHmpdORLu8)

> _**Play with react cdn placing at different place and adding different attributes to understand what going on clearly.**_
