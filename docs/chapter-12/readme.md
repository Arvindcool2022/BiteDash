# _Chapter 12 - Let's build our store_

[Redux terminology](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology)

## useContext vs redux (old redux)

**Side-note :** `Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it.`

Using `Context` and `Redux` are both viable options for state management in a React application, but they have different use cases and trade-offs. Let's compare the two:

**React Context:**

1. **Lightweight:** React `Context` is a built-in feature of React and is lightweight compared to `Redux`. It's a simple way to share state between components without external dependencies.

2. **Simpler Setup:** Setting up a context provider and consumer is relatively straightforward. You don't need to install any additional packages.

3. **Local State Management:** `Context` is great for managing local component state and sharing it with descendant components. If your application doesn't have complex global state management needs, `Context` can suffice.

4. **Component Composition:** `Context` is effective for component composition and sharing data between components without prop drilling.

**Redux:**

1. **Predictable State Management:** `Redux` is designed for managing global state in a predictable and centralized way. It's particularly useful in larger applications with complex state management needs.

2. **Middleware:** `Redux` provides a middleware system that allows you to intercept and handle actions, making it suitable for advanced use cases like API calls, routing, and more.

3. **DevTools:** `Redux` DevTools offer powerful debugging capabilities that help you track state changes, actions, and their history. This is invaluable for debugging complex applications.

4. **Large Ecosystem:** `Redux` has a large ecosystem of libraries and tools that extend its capabilities, including `Redux` Thunk for handling asynchronous actions, Reselect for memoized selectors, and many more.

5. **Maintainability:** In larger applications, `Redux` can provide a clear structure for managing state, which can improve maintainability over time.

**When to Use Context:**

- For smaller to medium-sized applications with modest state management requirements.
- When you want to manage local component state and share it with child components.
- When you prefer simplicity and a minimal setup.

**When to Use Redux:**

- For larger applications with complex global state management needs.
- When you need middleware support for handling async actions, routing, or other advanced use cases.
- When you want to leverage the Redux DevTools for debugging.
- When you prefer a well-defined structure for state management and maintainability.

It's also worth noting that there's no strict "either-or" choice between Context and Redux. In some applications, you might use both, with Context for local component state and Redux for global state management. The choice depends on the specific requirements of your project and your preferences.

## Advantages of Redux Toolkit over traditional Redux

- It is easier to set up and requires fewer dependencies.
- Reduces boilerplate code by allowing the creation of a single file known as "slice" that combines actions and reducers.
- Provides sensible defaults for commonly used features, such as Redux Thunk and Redux DevTools. This means that you don't have to spend time configuring these features yourself, as they are already built into Redux Toolkit.
- It uses the immer library under the hood, which enables direct state mutation and eliminates the need for manually copying the state {...state} with every reducer.

## Context API vs Redux Toolkit

Context API and Redux Toolkit are both tools for managing state in a React application, but they serve different purposes and have some key differences. Let's compare them:

1. **Complexity**:

   - **Context API**: Context API is a built-in feature of React that provides a simple way to pass data through the component tree without having to pass props down manually. It's lightweight and easy to set up. For simple state management needs or when you don't want to introduce a lot of complexity, Context can be a good choice.

   - **Redux Toolkit**: Redux Toolkit is a library built on top of Redux that simplifies many of the complexities of traditional Redux setup. It provides a structured way to define reducers, actions, and manage your application's state. It's more powerful and suitable for large-scale applications with complex state management requirements.

2. **State Management**:

   - **Context API**: It's primarily used for prop-drilling prevention and sharing global data that doesn't require complex state management. While you can manage state with Context, it's often not as efficient as Redux Toolkit for complex state.

   - **Redux Toolkit**: Redux Toolkit is designed specifically for complex state management. It encourages you to create a centralized store, define reducers, and use actions to modify the state. It's excellent for managing the state of large applications.

3. **Middleware and Tools**:

   - **Context API**: It doesn't have middleware like Redux. You might need to implement your own solutions for features like logging, async actions, etc.

   - **Redux Toolkit**: Redux Toolkit comes with middleware support. You can use middleware like Thunk or Saga for async actions. It also provides tools like the Redux DevTools extension for debugging.

4. **Performance**:

   - **Context API**: While Context is efficient for most use cases, it may cause unnecessary re-renders in some scenarios. It's important to use the `useMemo` hook to optimize performance.

   - **Redux Toolkit**: Redux Toolkit is optimized for performance. It minimizes unnecessary re-renders and provides ways to connect components efficiently to the store.

5. **Community and Ecosystem**:

   - **Context API**: It's a built-in feature of React, so you don't need to add additional libraries. There are also third-party libraries like `react-query` and `swr` that can complement Context for data fetching.

   - **Redux Toolkit**: Redux Toolkit has a large and well-established ecosystem with tools and extensions for routing, form management, and more. It also has a big community and a vast array of resources.

6. **Ease of Learning**:

   - **Context API**: It's relatively easy to learn, especially for developers who are already familiar with React.

   - **Redux Toolkit**: While Redux Toolkit simplifies many aspects of Redux, it can still be more challenging to learn due to the concepts of reducers, actions, and store setup.

In summary, use Context API when you have simple state management needs and want to prevent prop-drilling. Use Redux Toolkit when you have complex state management requirements and want a well-structured, efficient, and powerful solution. Ultimately, the choice depends on the specific needs of your application.

## Redux dispatch

[doc](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#dispatch)

The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

## Redux selector

[doc](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#selectors)

Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data.

## Redux reducer

[doc](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers)

A reducer is a function that receives the current `state` and an `action` object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. You can think of a reducer as an event listener which handles events based on the received action (event) type.

"Reducer" functions get their name because they're similar to the kind of callback function you pass to the Array.reduce() method.
[rules of reducer](https://redux.js.org/tutorials/essentials/part-2-app-structure#rules-of-reducers)

## Redux createSlice

[doc](https://redux-toolkit.js.org/api/createSlice)

A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

Internally, it uses `createAction` and `createReducer`, so you may also use Immer to write "mutating" immutable updates.

## Redux slice

[doc](https://redux.js.org/tutorials/essentials/part-2-app-structure#redux-slices)

A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.
