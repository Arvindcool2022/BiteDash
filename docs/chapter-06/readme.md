# _Chapter 06 - Exploring the World!_

## Microservice

_A `microservice` is a software architectural style in which an application is composed of a collection of loosely coupled, independently deployable, and independently scalable services. Each service in a microservices architecture represents a specific, self-contained business capability or function. These services communicate with each other through well-defined APIs (Application Programming Interfaces) and often use lightweight protocols such as HTTP or messaging systems._

Key characteristics of microservices include:

1. **Independence**: Each microservice is developed, deployed, and maintained independently. This allows different teams to work on different services without interfering with each other's work.

2. **Decentralization**: Microservices architecture often involves breaking down a monolithic application into smaller, discrete services, each responsible for a specific task. This decentralization makes it easier to manage and scale the application.

3. **Scalability**: Microservices can be individually scaled to meet specific performance and resource requirements. This means you can allocate more resources to a particular service that is experiencing high demand without affecting the entire application.

4. **Technology Diversity**: Each microservice can be built using different programming languages, frameworks, or technologies, as long as they can communicate through well-defined APIs. This flexibility allows teams to choose the best tools for their specific tasks.

5. **Resilience**: Microservices can be designed to be resilient. If one service fails, it doesn't necessarily bring down the entire application. You can implement strategies like redundancy, failover, and graceful degradation to handle failures gracefully.

6. **Ease of Maintenance**: Because each service is relatively small and focused, it is often easier to maintain and update compared to a monolithic application. Changes to one service typically have fewer ripple effects.

7. **Continuous Delivery**: Microservices make it easier to adopt continuous delivery and continuous integration practices, as each service can be tested and deployed independently.

8. **Isolation**: Services are isolated from each other, reducing the risk of issues in one service affecting others. This isolation is beneficial for security and fault isolation.

Microservices architecture is often contrasted with monolithic architecture, where an application is built as a single, tightly integrated unit. While microservices offer many advantages, they also introduce complexities in terms of managing the interactions between services, handling distributed data, and ensuring consistency across the application. Successful implementation of microservices requires careful planning, monitoring, and infrastructure support to reap the benefits of this architectural approach.

## Monolithic architecture

_`Monolithic architecture` is a traditional software architectural style in which an application is built as a single, tightly integrated unit. In a monolithic application, all the components, modules, and functions are combined into a single codebase and executed as a single process on a server or client device. This approach contrasts with microservices architecture, which decomposes an application into smaller, independently deployable and scalable services._

Key characteristics of monolithic architecture include:

1. **Single Codebase**: In a monolith, all the code for an application is typically stored in a single codebase or repository. This codebase contains all the components, modules, and functions of the application.

2. **Tight Integration**: Different parts of the application are tightly coupled and often share the same memory space and resources. This tight integration makes it easier for components to communicate but can also lead to dependencies and bottlenecks.

3. **Single Deployment Unit**: The entire application is deployed as a single unit. When updates or changes are made to the application, the entire monolith needs to be redeployed, which can lead to downtime during deployment.

4. **Scaling Challenges**: Scaling a monolithic application can be challenging because you must replicate the entire application to handle increased load. This can be inefficient and costly, especially when only specific parts of the application require additional resources.

5. **Development and Maintenance**: In a monolith, development and maintenance can become complex as the codebase grows. Changes to one part of the application can have unintended consequences in other parts, and it can be challenging to manage large development teams.

6. **Technology Stack**: In a monolith, you typically use a single technology stack for the entire application. This can limit your flexibility in choosing the best tools and technologies for specific tasks.

7. **Testing and Debugging**: Testing and debugging a monolithic application can be more challenging because issues in one part of the application can affect other parts, making it harder to isolate problems.

Monolithic architecture has been widely used for many years and is suitable for smaller applications or projects with simpler requirements. However, as applications grow in complexity and scale, monolithic architecture can become limiting in terms of development speed, scalability, and maintainability. This is why many organizations have transitioned to microservices architecture or other distributed architectural styles to address these challenges and achieve greater flexibility and scalability in their software systems.

## Key differences between monolithic architecture and microservices architecture:

| Aspect                | Monolithic Architecture                                  | Microservices Architecture                                       |
| --------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| Codebase              | Single codebase for the entire application               | Multiple, smaller codebases for each service                     |
| Independence          | Components tightly integrated and interdependent         | Services are loosely coupled and independent                     |
| Deployment            | Deployed as a single unit                                | Independently deployable services                                |
| Scaling               | Scaling requires replicating the entire application      | Individual services can be scaled independently                  |
| Technology Stack      | Typically uses a single technology stack                 | Can use diverse technologies for different services              |
| Development Teams     | One large development team                               | Smaller teams can work on individual services                    |
| Testing and Debugging | Complex, as changes can impact the entire application    | Easier isolation and debugging of individual services            |
| Maintenance           | Can become complex and unwieldy as the codebase grows    | Easier maintenance and updates for individual services           |
| Resource Efficiency   | Can be less efficient, as all components share resources | More efficient resource allocation based on service requirements |
| Fault Tolerance       | Faults in one part can affect the entire application     | Faults are often isolated to individual services                 |
| Continuous Delivery   | Can be challenging to implement continuous delivery      | Easier adoption of continuous delivery practices                 |

#### Note

- The choice between monolithic and microservices architecture depends on the specific requirements and constraints of a project. There is no one-size-fits-all solution, and the decision should be based on factors such as the size and complexity of the application, development team structure, scalability requirements, and more.

## useEffect Hook

The `useEffect` hook is a fundamental part of React's functional component model, and it serves several important purposes in managing side effects and interactions with the outside world in a React application. Here's why we need the `useEffect` hook:

1. **Managing Side Effects**: In React, components are primarily responsible for rendering user interfaces based on their current state and props. However, in many cases, components need to interact with the browser's DOM, make network requests, set up event listeners, or perform other side effects that go beyond rendering. The `useEffect` hook allows you to encapsulate and manage these side effects within a functional component.

2. **Separation of Concerns**: By using `useEffect`, you can separate the logic for handling side effects from the component's rendering logic. This separation makes your code more organized, readable, and maintainable, as it keeps the side effect code in a separate function.

3. **Asynchronous Operations**: Many side effects, such as fetching data from an API or reading data from the local storage, are asynchronous. The `useEffect` hook provides a way to handle asynchronous operations within a functional component without blocking the main rendering thread.

4. **Lifecycle Events**: _In class components_, you have lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to manage side effects at specific points in a component's lifecycle. The `useEffect` hook replicates these lifecycle events in functional components. You can specify when a side effect should run (e.g., when the component mounts or updates) by configuring the dependencies array or using other options.

5. **Dependency Tracking**: `useEffect` allows you to specify dependencies, which are values from the component's scope that the effect depends on. When these dependencies change, the effect is re-run. This enables you to keep side effects in sync with the component's state or props, ensuring that the UI remains up to date.

6. **Preventing Memory Leaks**: `useEffect` also provides a way to clean up after a side effect. For example, you can remove event listeners or cancel network requests when a component unmounts. This helps prevent memory leaks and ensures that your application remains efficient.

Here's a basic example of using `useEffect` to fetch data when a component mounts:

```jsx
import React, { useState, useEffect } from 'react';

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));

    // Clean up any resources when the component unmounts
    return () => {
      // Cleanup code (e.g., remove event listeners) goes here
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    // Render the component based on the fetched data
  );
}

export default Body;
```

In summary, the `useEffect` hook is essential in React for managing side effects, handling asynchronous operations, and ensuring that your components interact effectively with the outside world while adhering to the principles of functional programming and component-based architecture.

[Doc](https://react.dev/reference/react/useEffect)

## Optional chaining

Optional chaining is a feature in modern programming languages, including JavaScript and TypeScript, that provides a concise way to access properties or call methods on objects, even when those properties or methods may not exist. **It helps avoid "TypeError: Cannot read property 'x' of undefined" or similar errors when dealing with nested or chained property accesses.**

In JavaScript and TypeScript, optional chaining is denoted by the `?.` operator. Here's how it works:

1. **Accessing Nested Properties**:
   You can use optional chaining to safely access properties of nested objects without worrying about the existence of intermediate objects or properties. If any part of the chain is `null` or `undefined`, the expression returns `undefined`.

   ```javascript
   const user = {
     profile: {
       name: 'John'
     }
   };

   const userName = user?.profile?.name; // "John"
   const userCity = user?.profile?.address?.city; // undefined (no error)
   ```

2. **Invoking Methods**:
   You can also use optional chaining to safely call methods on objects, even when the object or the method itself may not exist. If the object or method is missing, it returns `undefined`.

   ```javascript
   const car = {
     start: function () {
       console.log('Car started!');
     }
   };

   car?.start?.(); // "Car started!"
   const bike = {};
   bike?.start?.(); // undefined (no error)
   ```

3. **Arrays and Indexes**:
   Optional chaining can be used with arrays and indexes to safely access elements. If an index is out of bounds, it returns `undefined`.

   ```javascript
   const numbers = [1, 2, 3];

   const firstNumber = numbers?.[0]; // 1
   const fourthNumber = numbers?.[3]; // undefined (no error)
   ```

Optional chaining is particularly useful when working with data that comes from external sources, APIs, or user inputs where the structure of the data may not always be consistent. It simplifies conditional checks and reduces the need for explicit null or undefined checks, making your code cleaner and less error-prone.

It's important to note that optional chaining is a feature introduced in ECMAScript 2020 (ES11) and is supported in modern JavaScript environments. If you need to use it in an environment that doesn't support it, you may need to transpile your code using tools like Babel to ensure compatibility.

## Shimmer UI (skeleton loading screen)

Shimmer UI, often referred to as a "shimmer effect" or "skeleton screen," is a design pattern used in user interfaces to indicate that content is loading or is about to be loaded. It is commonly used in applications, especially mobile and web applications, to provide users with visual feedback while they wait for data or content to appear on the screen. The shimmer effect creates the illusion of content loading gradually, which can improve the perceived performance of an application and reduce user frustration.

_The shimmer effect is a valuable tool for enhancing the user experience in applications by providing a seamless and informative loading transition._

The shimmer effect serves several purposes:

- **User Engagement**: It keeps users engaged and informed about ongoing loading processes, preventing them from feeling like the application has frozen or become unresponsive.

- **Perceived Performance**: By providing visual feedback, the application appears to be more responsive, even if the actual data retrieval or processing takes some time.

- **Reduced Frustration**: Users are less likely to abandon the application or become frustrated when they see the shimmer effect, as it assures them that content is on its way.

- **Polished User Experience**: It adds a polished and professional touch to the user interface, making the application feel more modern and user-friendly.

The shimmer effect can be implemented using CSS animations and JavaScript or with the help of libraries or frameworks. Many UI libraries and frameworks, including React, offer pre-built components or libraries for creating shimmer effects, simplifying the implementation process.

[npm package](https://github.com/dvtng/react-loading-skeleton/releases/tag/v3.0.0), [in Material-UI libary](https://mui.com/material-ui/react-skeleton/)

## Differences between JavaScript expressions and JavaScript statements:

| Aspect           | JavaScript Expression                                              | JavaScript Statement                                                                               |
| ---------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| Purpose          | Produces a value when evaluated.                                   | Executes an action or controls flow.                                                               |
| Examples         | `5 + 3` (evaluates to 8)                                           | `if`, `for`, `while`, variable declaration (`let`, `const`, `var`)                                 |
| Usage in JSX     | Enclosed in curly braces `{}` within JSX.                          | Typically not used directly in JSX. If used, it should produce a value.                            |
| Return Value     | Has a return value.                                                | Does not have a return value.                                                                      |
| Side Effects     | Usually limited to calculations and evaluations.                   | May have side effects, such as changing variables, modifying state, or controlling program flow.   |
| Use in Functions | Can be used as function arguments, return values, and assignments. | Can be used to define function behavior, including control structures and variable initialization. |

It's important to note that while expressions and statements serve different purposes, they are often used together in JavaScript code. Expressions are used to compute values, which are then used within statements to control program flow and perform actions. This combination of expressions and statements allows developers to create complex and functional programs in JavaScript.

**Ex of JavaScript Expression**:

```javascript
// Simple expressions
5 + 3; // Evaluates to 8
myVar; // Evaluates to the value stored in the variable myVar

// Complex expressions
2 * x + 3 * y; // Evaluates to a value based on the values of x and y
x > 5 ? 'x is greater than 5' : 'x is not greater than 5'; //Evaluates and returns a string
Math.random() * 100; // Generates a random number between 0 and 100
```

**Ex of JavaScript Statement**:

```javascript
// Variable declaration statement
let x = 10;

// Conditional statement
if (x > 5) {
  console.log('x is greater than 5');
} else {
  console.log('x is not greater than 5');
}

// Loop statement
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Function declaration statement
function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

## Conditional Rendering

Conditional rendering in React (or any JavaScript framework that uses JSX) refers to the practice of rendering different content or components based on specific conditions or logical expressions. It allows you to dynamically determine what should be displayed in the user interface based on the state of your application, user interactions, or other factors. Conditional rendering is often used to show or hide elements, components, or content blocks in response to various conditions.

Here's an example of conditional rendering in React:

```jsx
{
  isNumOdd(inputValue) ? <p>Yes</p> : <p>No</p>; // either or senerio
}

{
  isNumOdd(inputValue) && <p>...</p>; //if true it renders or it doesn't
}
```

Conditional rendering allows you to create dynamic and responsive user interfaces by showing or hiding elements, components, or content based on user actions, data from an API, or any other condition you need to check in your application.

## CORS

CORS stands for Cross Origin Resource Sharing , It is a header based machanism that allows a server to indicate any origin other that it’s own. We can create requests to other domains or ports to get the data from our browser.

## async and await

`async` and `await` are JavaScript features introduced in **ECMAScript 2017 (ES8)** that simplify working with asynchronous code and Promises, making it easier to write and reason about asynchronous operations. These keywords are often used in conjunction with asynchronous functions to handle asynchronous tasks in a more readable and synchronous-like manner.

Here's a brief explanation of `async` and `await`:

1. **`async` Function**:

   - An `async` function is a special type of function in JavaScript that always returns a Promise.
   - It allows you to write asynchronous code using a more synchronous-like syntax, making it easier to manage and understand.

   ```javascript
   async function fetchData() {
     // Asynchronous operations go here
     return someAsyncOperation();
   }
   ```

2. **`await` Operator**:

   - The `await` keyword is used inside an `async` function to pause the execution of the function until a Promise is resolved or rejected.
   - It can only be used inside an `async` function.

   ```javascript
   async function fetchAndProcessData() {
     const data = await fetchData(); // Pauses here until fetchData() resolves
     // Work with the resolved data
   }
   ```

Using `async` and `await` together allows you to write asynchronous code in a more linear, readable, and structured way, resembling synchronous code flow.

Here's a simple example of using `async` and `await` to fetch data from an API:

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getUserData(userId) {
  try {
    const userData = await fetchUserData(userId);
    console.log('User data:', userData);
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }
}

getUserData(123); // Example usage
```

In this example:

- `fetchUserData` is an `async` function that fetches user data from an API using the `fetch` function and processes the response using `await`.
- `getUserData` is another `async` function that calls `fetchUserData` and handles any errors that may occur.

Using `async` and `await` helps simplify error handling and the sequencing of asynchronous operations, making your code more maintainable and readable when dealing with asynchronous tasks in JavaScript.

## const json = await data.json();

The line of code `const json = await data.json();` is typically used to fetch and parse JSON data from a network request in a web application. Let's break down its purpose and usage:

1. `data` is a response object received from a network request. It could be the result of an HTTP GET request to an API, for example.

2. `data.json()` is a method provided by the `fetch` API in JavaScript. This method parses the response body as JSON. In other words, it takes the JSON data (which is usually a string) from the response body and converts it into a JavaScript object.

3. `await` is used to make the code asynchronous. When `await` is used in an `async` function, it pauses the execution of the function until the promise returned by `data.json()` resolves. This is typically used when dealing with asynchronous operations like network requests to ensure that you have the parsed JSON data before proceeding with any further processing.

4. `const json` is a variable that stores the JavaScript object obtained after parsing the JSON data. This variable can then be used to access and manipulate the data retrieved from the network request.
