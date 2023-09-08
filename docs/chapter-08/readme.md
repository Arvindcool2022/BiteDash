# _Chapter 08 - Let's Get Classy_

## How do you create `Nested Routes` react-router-dom configuration?

To create nested routes using `react-router-dom`, you can define your route configuration with nested `Route` components. Here's a step-by-step example with comments:

1. First, make sure you have `react-router-dom` installed. You can install it using npm (or any node package manager):

   ```bash
   npm install react-router-dom
   ```

2. The main application component is where you'll set up the routing.

```jsx

const theRouter = createBrowserRouter([
   {
      path: "/",
      element: <Parent />
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [
               {
                  path: "/child",
                  element: <SubChild />
               }
            ]
         }
      ],
   }
])

```

## The order of life cycle method calls in Class Based Components

In class-based components in React, there is a specific order in which lifecycle methods are called. These methods are called at different stages of a component's life. Here is the order in which they are typically called:

1. **Mounting Phase:**

   - `constructor()`: This is the first method called when an instance of the component is created. It's used for initializing state and binding methods.
   - `static getDerivedStateFromProps()`: This method is called right after `constructor()`. It's used to update the state based on changes in props.
   - `render()`: This method is responsible for rendering the component's UI. It should be a pure function without side effects.
   - `componentDidMount()`: This is called immediately after the component is inserted into the DOM. It's often used for making AJAX requests or setting up subscriptions.

2. **Updating Phase:**

   - `static getDerivedStateFromProps()`: Again, this method is called if props change and is used for updating the state.
   - `shouldComponentUpdate()`: This method is called before rendering, and it can be used to determine if the component should re-render or not. It's often used for performance optimization.
   - `render()`: Re-render the component's UI.
   - `getSnapshotBeforeUpdate()`: This method is called right before changes from the virtual DOM are to be reflected in the DOM. It's used for things like getting the scroll position.
   - `componentDidUpdate()`: Called after the component's updates are flushed to the DOM. It's often used for performing side effects based on props or state changes.

3. **Unmounting Phase:**

   - `componentWillUnmount()`: Called just before the component is removed from the DOM. It's used for cleaning up any resources or event listeners set up in `componentDidMount()`.

4. **Error Handling:**
   - `static getDerivedStateFromError()`: This method is called when there's an error during rendering, in a lifecycle method, or in the constructor. It's used to capture an error boundary.
   - `componentDidCatch()`: This method is called after an error has been thrown during rendering, in a lifecycle method, or in the constructor. It's used for logging error information.

These methods provide developers with hooks to execute code at specific points in a component's life cycle. With the introduction of React Hooks, functional components can also manage state and side effects, reducing the reliance on class-based components and their lifecycle methods.

[Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

**tldr:-**

- constructor()
- render ()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

## Why do we use componentDidMount?

`componentDidMount` is one of the lifecycle methods in React's class-based components. It is used for various purposes related to component initialization and interaction with the DOM. Here are some common reasons why `componentDidMount` is used:

1. **Fetching Data**: It's a common practice to make asynchronous data requests (e.g., API calls) within `componentDidMount`. This ensures that data is fetched after the component has been mounted and can be safely used to update the component's state.

   ```javascript
   componentDidMount() {
     // Fetch data from an API
     fetch('https://api.example.com/data')
       .then((response) => response.json())
       .then((data) => {
         this.setState({ data });
       });
   }
   ```

2. **Setting Up Timers and Intervals**: You can use `componentDidMount` to initialize timers or intervals. For example, updating the component's state at regular intervals.

   ```javascript
   componentDidMount() {
     this.timerId = setInterval(() => {
       // Update component state or perform some action
     }, 1000);
   }
   ```

3. **Adding Event Listeners**: Event listeners can be attached to DOM elements within `componentDidMount`. This is useful when you want to listen for user interactions.

   ```javascript
   componentDidMount() {
     document.addEventListener('click', this.handleClick);
   }

   componentWillUnmount() {
     // Remove event listener when the component unmounts
     document.removeEventListener('click', this.handleClick);
   }
   ```

4. **Integration with External Libraries**: When integrating React with external libraries, such as D3 for data visualization or charting, you may need to initialize those libraries within `componentDidMount`.

   ```javascript
   componentDidMount() {
     // Initialize a charting library
     this.chart = new Chart(this.chartRef.current, chartOptions);
   }
   ```

5. **Manipulating the DOM**: If you need to directly manipulate the DOM (e.g., focus an input element), you should do so within `componentDidMount`. React guarantees that the component has been rendered to the DOM at this point.

   ```javascript
   componentDidMount() {
     // Focus on an input element
     this.inputRef.current.focus();
   }
   ```

`componentDidMount` is essential for handling interactions with the DOM and external resources after a component has been successfully mounted. It ensures that these operations are performed safely and in the correct order.

## componentWillUnmount and its use

`componentWillUnmount` is a lifecycle method in React that is called just before a component is removed from the DOM. It is used for performing cleanup tasks, **such as cancelling network requests, unsubscribing from event listeners, or clearing timers, to prevent memory leaks and unexpected behavior when a component is no longer needed.**

[`componentWillUnMount` usecase](https://stackoverflow.com/questions/40760308/how-to-properly-use-componentwillunmount-in-reactjs)

## super(props) in constructor

In JavaScript, when you extend a class, as is common when creating React components using ES6 classes, you use `super(props)` in the constructor of the child class for a specific reason. This is related to how inheritance and class constructors work in JavaScript.

Here's why you use `super(props)` in the constructor of a React component:

1. **Initialization of the Parent Class**: When you extend a class in JavaScript, the child class (in this case, your React component class) inherits properties and behaviors from the parent class (usually `React.Component`). The `super()` function is used to call the constructor of the parent class. It ensures that the parent class is properly initialized before you add any custom behavior to the child class.

2. **Passing Props to the Parent Constructor**: In React, you often pass `props` to the parent constructor via `super(props)`. This is important because `props` contain data and configuration that are essential for your component to work correctly. By calling `super(props)`, you ensure that the `props` are properly initialized in the parent class.

   ```javascript
   class MyComponent extends React.Component {
     constructor(props) {
       super(props); // Calls the constructor of the parent class (React.Component)
       // You can now access props using this.props
     }
   }
   ```

3. **Accessing `this.props`**: Without calling `super(props)`, `this.props` within your component's constructor would be `undefined`. Calling `super(props)` sets up the `props` property for your component, making it accessible within the constructor and other methods.

4. **React State and Lifecycle Management**: React relies on the proper initialization of components to manage their state and lifecycles. Not calling `super(props)` can lead to unpredictable behavior and bugs in your components.

In summary, `super(props)` is a necessary step in the constructor of a child class (React component) to ensure that the parent class is properly initialized and that `props` are correctly passed and accessible within the component. It's a fundamental part of JavaScript's inheritance mechanism and is essential for the proper functioning of React components.

## Why can’t we have the callback function of `useEffect` async?

`useEffect` expects it’s callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.
