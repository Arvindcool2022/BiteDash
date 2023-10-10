# _Chapter 11 - Data is the new oil_

## Topics covered in this session:

1. **State Lifting**:
   State lifting is a pattern in React where you move the state from a lower-level component to a higher-level parent component, making it accessible to multiple child components. This allows sharing and synchronizing data across components.

2. **Prop Drilling**:
   Prop drilling occurs when you pass props from a higher-level parent component through multiple intermediate child components to reach a deeply nested child component. It can make the code less maintainable and harder to manage as the application grows.

3. **Context or Context Api**:
   Context in React is an advanced feature that allows you to pass data through the component tree without explicitly passing props at each level. It's used to provide global or shared data to components without prop drilling.

## Prop drilling

_**Prop drilling**, also known as **prop passing** or **prop threading**, is a term used in React to describe a situation where data is passed through multiple intermediate components in order to reach a deeply nested child component that needs access to that data._

In a typical React component tree, data is passed from a parent component to its child components through props. If a child component needs this data, the parent component passes it as a prop. However, if there are multiple levels of nested components between the parent and the child that need access to this data, you would need to pass the data down through each intermediate component even if they don't use the data themselves. This process of passing data down through multiple levels of components is referred to as prop drilling.

Here's a simplified example to illustrate prop drilling:

```jsx
function GrandparentComponent() {
  const data = 'Hello from Grandparent';

  return <ParentComponent data={data} />;
}

function ParentComponent({ data }) {
  return <ChildComponent data={data} />;
}

function ChildComponent({ data }) {
  return <div>{data}</div>;
}
```

In this example, `data` is passed from `GrandparentComponent` to `ParentComponent` and then from `ParentComponent` to `ChildComponent`, even though `ParentComponent` itself doesn't use the `data` prop. This is prop drilling in action.

While prop drilling is a common pattern in React, it can lead to less maintainable code as your component tree becomes deeper and more complex. To mitigate this, you can consider using other patterns like React Context or Redux to manage and share state more efficiently across components, without the need for excessive prop drilling.

## Lifting the state up

_**Lifting the state up** is a design pattern in React where you move the state of a component higher up in the component tree to a common ancestor or parent component. By doing so, you make the state accessible to multiple child components, allowing them to share and synchronize data._

This pattern is particularly useful when you have multiple components that need access to the same piece of data or when you need to coordinate the state and actions between sibling components. Here's how lifting the state up works:

1. Identify the State: Determine which component should "own" the state, i.e., which component should be responsible for managing and updating the data.

2. Move the State: If the state is currently in a child component and needs to be shared with other child components, move it up to a common ancestor or parent component that encompasses all the components that need access to this state.

3. Pass State as Props: Once the state is in the common ancestor component, pass it down to the child components that require access to it as props.

4. Handle State Updates: Implement functions or methods in the common ancestor component to update the state. Pass these functions down as props to child components so they can trigger state changes.

Here's a simplified example to illustrate lifting the state up:

```jsx
function ParentComponent() {
  // State is managed in the parent component
  const [count, setCount] = useState(0);

  // Function to update the state
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} incrementCount={incrementCount} />
      <AnotherChildComponent count={count} />
    </div>
  );
}

function ChildComponent({ count, incrementCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

function AnotherChildComponent({ count }) {
  return (
    <div>
      <p>Another Component Count: {count}</p>
    </div>
  );
}
```

In this example, `count` is lifted up to `ParentComponent`, and both `ChildComponent` and `AnotherChildComponent` receive it as a prop. The `incrementCount` function is also defined in `ParentComponent` and passed as a prop to `ChildComponent` to update the count.

Lifting the state up promotes better data flow and sharing of state among components, making your React application more maintainable and predictable, especially in scenarios where multiple components need access to the same data.

#### Note:

- Ex from food del app

```jsx
const MainSection = () => {
  const [resList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  return (
    <section className="main-section">
      <Carousel carouselData={carouselList} />
      <SmallCarousel smallCarouselData={smallCarouselList} />
      <Filters
        filterResult={setResList}
        listOfRestaurant={resList}
        initialList={filterList}
      />
      <CardContainer listOfRestaurant={resList} />
    </section>
  );
};
```

## What is Context Provider and Context Consumer?

In React, the **Context API** provides a way to share data between components without having to explicitly pass props through each level of the component tree. The Context API consists of two main parts: the **Context Provider** and the **Context Consumer**.

1. **Context Provider**:

   - The **Context Provider** is a component that provides the shared data to the components that need it.
   - It acts as a wrapper around a portion of your component tree and makes the data accessible to any child component within that tree.
   - Typically, you create a Context Provider by using the `React.createContext` method and wrapping it around your application or a specific part of it.
   - The Provider component takes a `value` prop, which is the data you want to share.

   Example of creating a Context Provider:

   ```jsx
   // Create a context
   const MyContext = React.createContext();

   // Wrap your component tree with the Provider
   function App() {
     const sharedData = 'Shared Data Value';
     return (
       <MyContext.Provider value={sharedData}>
         {/* Your components */}
       </MyContext.Provider>
     );
   }
   ```

2. **Context Consumer**:

   - The **Context Consumer** is a component that consumes the shared data provided by the Context Provider.
   - It allows you to access the shared data without the need for prop drilling.
   - To use a Context Consumer, you typically render it within your component's JSX and provide a function as its child. This function receives the shared data as an argument.

   Example of using a Context Consumer:

   ```jsx
   // Access the shared data using a Context Consumer
   function MyComponent() {
     return (
       <MyContext.Consumer>
         {sharedData => (
           <div>
             <p>Shared Data: {sharedData}</p>
           </div>
         )}
       </MyContext.Consumer>
     );
   }
   ```

The Context Provider and Context Consumer work together to create a shared context where data can be provided and consumed by components at different levels of the component tree. This is particularly useful for sharing global state, themes, user authentication, and other data that needs to be accessible to multiple parts of your application without the need for complex prop passing.

## If you don’t pass a value to the provider does it take the default value?

Yes, if you don't pass a value to the `Provider` component of a React context, it takes the default value specified when you create the context using `React.createContext`. The default value serves as the initial value for the context when no `Provider` higher up in the component tree provides a value.

Here's an example:

```jsx
const MyContext = React.createContext('Default Value');

function App() {
  return <MyContext.Provider>{/* ... */}</MyContext.Provider>;
}

function MyComponent() {
  const contextValue = React.useContext(MyContext);

  return (
    <div>
      <p>Context Value: {contextValue}</p>
    </div>
  );
}
```

In this example, since we didn't pass a value to the `MyContext.Provider`, it will use the default value, which is "Default Value." If you were to render `MyComponent` within the `App`, it would display "Context Value: Default Value."

However, you can override this default value by providing a different value to the `MyContext.Provider` when needed:

```jsx
<MyContext.Provider value="Custom Value">{/* ... */}</MyContext.Provider>
```

In this case, the context value within `MyComponent` would be "Custom Value" instead of the default value.
