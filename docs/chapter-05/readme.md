# _Chapter 05 - Let’s get Hooked!_

## Difference between `_Named export_`, `_Default export_`, and `_* as export_`

In JavaScript, when you're working with modules, you can use different ways to export functionality from one module to be used in another. Named exports, default exports, and the `* as` export are three common mechanisms for exporting and importing code between modules. Here's an explanation of each:

1. Named Exports:

   - Named exports allow you to export multiple values (functions, objects, variables, etc.) from a module with individual names.
   - You specify what to export by adding the `export` keyword in front of the declaration.
   - These exports are imported in other modules using the same names.
   - Example:

     ```javascript
     // Module1.js
     export const foo = 42;
     export function bar() {
       return 'Hello, world!';
     }

     // Module2.js
     import { foo, bar } from './Module1.js';
     console.log(foo); // 42
     console.log(bar()); // Hello, world!
     ```

2. Default Export:

   - Default exports allow you to export a single value, function, or object as the "default" export for a module.
   - You use the `export default` syntax to specify the default export.
   - When importing a default export, you can choose any name for it.
   - Example:

     ```javascript
     // Module1.js
     const myValue = 'This is a default export';
     export default myValue;

     // Module2.js
     import customName from './Module1.js';
     console.log(customName); // This is a default export
     ```

3. `* as` Export:

   - The `* as` export is a way to import all the exports from a module and bundle them into an object with a specified name.
   - It's useful when you want to import everything from a module and access its exports through a single object.
   - Example:

     ```javascript
     // Module1.js
     export const foo = 42;
     export function bar() {
       return 'Hello, world!';
     }

     // Module2.js
     import * as myModule from './Module1.js';
     console.log(myModule.foo); // 42
     console.log(myModule.bar()); // Hello, world!
     ```

#### In summary:

- Named exports allow you to export multiple values with individual names.
- Default exports are used for a single "default" export per module.
- `* as` exports bundle all exports from a module into a single object for convenient access.

You can use these different export mechanisms based on your project's requirements and coding style.

#### note:-

If there is a conflict (for instance, you want example from two different modules), you can use as to rename:

```javascripts
import { example as widgetExample } from "./widget/example";
import { example as gadgetExample } from "./gadget/example";

```

[link](https://stackoverflow.com/questions/46913851/why-and-when-to-use-default-export-over-named-exports-in-es6-modules) 1, [link](https://blog.webdevsimplified.com/2021-11/es6-modules/) 2

## Config files

A configuration file, often referred to as a `config file`, is a plain text or structured file used to store settings, parameters, or configuration data for a software application, system, or service. These files are used to customize the behavior of the software without requiring changes to its source code. Configuration files are commonly employed in various types of software and systems, including applications, servers, and operating systems.

#### config.js

The importance of a `config.js` file in a software project can vary depending on the context and the specific use case, but it generally serves several important purposes:

1. **Configuration Management**: A `config.js` file is commonly used to manage configuration settings for an application. These settings can include database connection details, API keys, environment-specific variables, and other parameters that may need to be adjusted based on the deployment environment (e.g., development, testing, production).

2. **Security**: By storing sensitive information like API keys or database credentials in a separate configuration file, you can prevent accidental exposure of sensitive data in your codebase, especially when sharing it publicly or with team members. You can also set access permissions to restrict who can view or modify the configuration.

3. **Environment Adaptation**: Having a `config.js` file allows you to adapt your application to different environments (e.g., development, staging, production) without changing the code. This makes it easier to deploy your application in various settings.

4. **Ease of Maintenance**: Separating configuration from code promotes maintainability. If you need to make changes to configuration settings, you can do so in a single file without altering the application's code. This can simplify updates and reduce the risk of introducing bugs.

5. **Testing and Debugging**: During development, having a centralized configuration file makes it easier to switch between different configurations and test various scenarios. It also simplifies debugging because you can focus on the code logic without worrying about hard-coded values.

6. **Version Control**: Configuration files like `config.js` are typically included in version control systems (e.g., Git). This allows you to track changes to configuration settings over time, collaborate with team members on configuration updates, and roll back to previous configurations if needed.

7. **Documentation**: A well-structured `config.js` file can serve as documentation for your project, providing an overview of the key settings and their purposes. This can be valuable for onboarding new team members or sharing your codebase with others.

8. **Maintaining Code Separation**: Separating configuration from code aligns with the principle of code separation and modularity. It keeps code focused on its primary functionality while configuration details are managed separately.

To maximize the benefits of a `config.js` file, it's important to follow best practices, such as using meaningful variable names, securing sensitive information, and documenting the purpose of each configuration setting. Additionally, it's a good practice to use environment variables in conjunction with your configuration file to securely manage sensitive data and adapt to different environments effectively.

[video](https://www.youtube.com/watch?v=14WanxTD2O4), [link](https://opensource.com/article/21/6/what-config-files)

## `React Hooks`

`React Hooks` are a feature introduced in React 16.8 that allows you to use state and other React features in functional components, which were previously known as "stateless functional components." Prior to Hooks, you had to use class components to manage state and lifecycle methods in React. Hooks provide a more concise and expressive way to work with state and side effects in functional components.

Some of the core `React Hooks`:

1. **useState**: `useState` allows functional components to manage local component state. It takes an initial state value and returns an array with the current state and a function to update it.

   ```javascript
   const [count, setCount] = useState(0);
   ```

2. **useEffect**: `useEffect` enables you to perform side effects in functional components, such as data fetching, DOM manipulation, or subscribing to external data sources. It accepts a function that specifies the side effect and an optional dependency array to control when the effect runs.

   ```javascript
   useEffect(() => {
     // Side effect code here
   }, [dependency1, dependency2]);
   ```

3. **useContext**: `useContext` allows you to access the context data from a nearest `Context.Provider` ancestor in the component tree.

   ```javascript
   const contextValue = useContext(MyContext);
   ```

4. **useReducer**: `useReducer` is an alternative to `useState` for managing more complex state logic. It takes a reducer function and an initial state, returning the current state and a dispatch function.

   ```javascript
   const [state, dispatch] = useReducer(reducer, initialArg, init);
   ```

5. **useRef**: `useRef` provides a way to access and interact with a DOM element or to persist values between renders without causing re-renders.

   ```javascript
   const myRef = useRef(initialValue);
   ```

6. **useMemo** and **useCallback**: These hooks are used for performance optimization. `useMemo` memoizes a value based on dependencies, while `useCallback` memoizes a function based on dependencies.

   ```javascript
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
   const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
   ```

7. **Custom Hooks**: You can create your own custom hooks to encapsulate and share logic between components. Custom hooks are named with the "use" prefix by convention.

   ```javascript
   function useCustomHook() {
     // Custom hook logic here
   }
   ```

## Need for `useState` Hook

The `useState` hook is an essential part of React because it enables functional components to manage and update their local state. Before the introduction of hooks, managing state was primarily the domain of class components. However, hooks like `useState` provide a more concise and functional way of handling state in functional components. Here are some reasons why the `useState` hook is important:

1. **Functional Components**: Functional components are simpler and more lightweight than class components. With hooks, functional components can now manage state effectively, making them the preferred choice for many React developers.

2. **Maintainability**: Managing state with `useState` allows you to keep your component logic more organized and easier to maintain. You can define multiple state variables using separate `useState` calls within a single component.

   ```javascript
   const [count, setCount] = useState(0);
   const [text, setText] = useState('Hello');
   ```

3. **No Need for Constructor**: In class components, you'd typically initialize state in the constructor. With `useState`, there's no need for constructors or class methods like `this.setState()`, which simplifies your component code.

4. **Immutability**: The `useState` hook enforces the immutability of state updates. When you call the state update function (e.g., `setCount`), React handles updating the state correctly without mutating the original state object. This helps prevent bugs caused by state mutations.

5. **Functional Updates**: You can use functional updates with `useState`, which is especially useful when the new state depends on the previous state. This ensures that state updates are applied correctly, even in asynchronous scenarios.

   ```javascript
   setCount(prevCount => prevCount + 1);
   ```

6. **React's Reconciliation**: `useState` integrates seamlessly with React's reconciliation mechanism. When state changes, React efficiently re-renders the component to reflect the updated state.

7. **Readability**: `useState` makes it clear where the state is coming from and how it's being updated. This enhances code readability and helps other developers understand your component's behavior.

8. **Hooks Ecosystem**: The introduction of hooks has led to a vibrant ecosystem of custom hooks that can simplify common tasks. These custom hooks often build on top of `useState` to offer higher-level abstractions for managing specific types of state.

In summary, the `useState` hook is a fundamental part of React that enables functional components to handle local state management effectively. It promotes clean, maintainable code and aligns with React's principles of immutability and declarative UI updates.
