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
