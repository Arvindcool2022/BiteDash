# _Chapter 03 - Laying the foundation_

## React Element

In React, an element is a fundamental building block used to describe what you want to see on the screen. `React elements` are lightweight representations of the actual DOM elements that your application will render. They are used to describe the structure of your user interface in a declarative way.

`React elements` are not the same as DOM elements, although they closely resemble them. `React elements` are plain JavaScript objects that describe what should be rendered on the screen. They are created using the `React.createElement()` function, JSX syntax, or the modern JSX-like syntax in React components.

Here's how you can create a React element using both the `React.createElement()` function and JSX:

Using `React.createElement()`:

```javascript
const element = React.createElement('h1', null, 'Hello, React!');
```

Using JSX:

```jsx
const element = <h1>Hello, React!</h1>;
```

`React elements` have a few important properties:

- **Type:** The type of element, which can be a string representing an HTML tag name (e.g., `'h1'`, `'div'`), a React component, or a custom component you've defined.
- **Props:** An object containing the properties and attributes that the element should have.
- **Children:** Any child elements or text that should be contained within this element.

`React elements` are the basic units that React uses to build and update the UI. They are rendered into the actual DOM by the React renderer. When an element changes, React efficiently updates only the parts of the DOM that need to be changed, which is one of the reasons why React is highly performant.

Here's a quick example of rendering a React element:

```jsx
const element = <h1>Hello, React!</h1>;

ReactDOM.render(element, document.getElementById('root'));
```

In this example, the `ReactDOM.render()` function takes the React element and renders it into the HTML element with the `id` of `'root'`.

Remember that `React elements` are not themselves DOM elements; they are a lightweight abstraction that describes what the UI should look like. The actual rendering and manipulation of the DOM are handled by React's rendering system.

## JSX

_JSX is not **HTML**, JSX is not **JavaScript**, JSX is not a part of **React**_

`JSX` is an XML-like syntax extension to ECMAScript (like JS) without any defined semantics. It's NOT intended to be implemented by engines or browsers. **It has a stand-alone specification.** It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript (like standard JS).

_`JSX` does not attempt to comply with any XML or HTML specification. `JSX` is designed as an ECMAScript feature and the similarity to XML is only for familiarity._

[JSX Documentation](https://facebook.github.io/jsx/#sec-rationale)

For Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      defer
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      defer
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script defer>
      const header = <h1>Hello from React JS!</h1>;
      const root = ReactDOM.createRoot(document.querySelector('#root'));
      root.render(header);
    </script>
    <title>React JS</title>
  </head>

  <body>
    <h1>Learning react JS</h1>
    <div id="root"></div>
  </body>
</html>
```

Above code will through a syntax error because jsx is not valid JS and it needs to be transpiled before it reaches browser engine.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      defer
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      defer
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <!-- Add Babel script for transpiling JSX -->
    <script
      defer
      crossorigin
      src="https://unpkg.com/babel-standalone@7.0.0-beta.3/babel.min.js"
    ></script>
    <title>React JS</title>
  </head>

  <body>
    <h1>Learning react JS</h1>
    <div id="root"></div>

    <!-- JSX code transpiled by Babel -->
    <script type="text/babel">
      const header = <h1>Hello from React JS!</h1>;
      const root = ReactDOM.createRoot(document.querySelector('#root'));
      root.render(header);
    </script>
  </body>
</html>
```

![React component invokation vs JSX](/chapter-03/React%20component%20invokation%20vs%20JSX.png.png)

## Component composition

Component composition in React refers to the practice of building complex user interfaces by combining smaller, reusable components together to create larger and more sophisticated ones. This approach allows you to break down your UI into smaller, manageable parts, each responsible for a specific piece of functionality or display.

There are two primary ways to achieve component composition in React:

1. **Parent-Child Relationship:**
   You can create a parent-child relationship between components, where a parent component renders one or more child components. These child components can be reused in different parent components, promoting reusability and modularity.

   Example:

   ```jsx
   function ParentComponent() {
     return (
       <div>
         <h1>This is the Parent Component</h1>
         <ChildComponent />
       </div>
     );
   }

   function ChildComponent() {
     return <p>This is the Child Component</p>;
   }
   ```

2. **Component Nesting:**
   You can nest components within each other to create more complex UI structures. This nesting can be hierarchical and can involve multiple levels of components.

   Example:

   ```jsx
   function App() {
     return (
       <div>
         <Header />
         <MainContent />
         <Footer />
       </div>
     );
   }
   ```

   In this example, `Header`, `MainContent`, and `Footer` are separate components that are composed together within the `App` component.

The benefits of component composition include:

- **Reusability:** You can create small, specialized components that can be reused throughout your application, reducing redundancy and making it easier to maintain.

- **Modularity:** Components that handle specific functionalities can be developed and maintained independently, making your codebase more modular and manageable.

- **Readability:** Smaller components with focused responsibilities are easier to read and understand than a single monolithic component.

- **Testability:** Smaller components can be tested in isolation, promoting better testing practices and easier debugging.

- **Collaboration:** Teams can work on different components simultaneously, leading to efficient collaboration and development.

- **Scalability:** As your application grows, you can continue to compose smaller components to build more complex features without sacrificing maintainability.

Overall, component composition is a fundamental concept in React that encourages building UIs in a structured, modular, and reusable manner.
