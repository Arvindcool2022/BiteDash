# _Chapter 07 - Finding the Path_

## Various ways to add images into our App.

In a React application, there are various ways to add and display images. Here, I'll explain some common methods, along with code examples for each approach:

1. **Import Images Directly**:

   You can import images directly into your JavaScript/JSX files and use them as variables. This is a common approach in modern React applications.

   ```jsx
   import React from 'react';
   import logo from './logo.png'; // Import the image

   function App() {
     return (
       <div>
         <img src={logo} alt="Logo" />
       </div>
     );
   }

   export default App;
   ```

2. **Using Public Folder**:

   You can place your images in the public folder of your React project and reference them using the public URL.

   ```jsx
   import React from 'react';

   function App() {
     return (
       <div>
         <img src="/images/logo.png" alt="Logo" />
       </div>
     );
   }

   export default App;
   ```

   Note: When using this method, the image path should start with `/public` to indicate the public folder.

3. **External URLs**:

   You can display images from external URLs by directly specifying the URL in the `src` attribute.

   ```jsx
   import React from 'react';

   function App() {
     return (
       <div>
         <img src="https://example.com/image.jpg" alt="External Image" />
       </div>
     );
   }

   export default App;
   ```

4. **Images in JSON or Data Store**:

   If your images are managed in a data store or JSON file, you can dynamically load and display them in your components.

   ```jsx
   import React from 'react';

   const imageInfo = {
     src: 'logo.png',
     alt: 'Logo'
   };

   function App() {
     return (
       <div>
         <img src={imageInfo.src} alt={imageInfo.alt} />
       </div>
     );
   }

   export default App;
   ```

5. **Dynamic Imports**:

   You can use dynamic imports to load images only when needed, which can improve initial page load performance.

   ```jsx
   import React, { useState, useEffect } from 'react';

   function App() {
     const [image, setImage] = useState(null);

     useEffect(() => {
       import('./logo.png').then(imageModule => {
         setImage(imageModule.default);
       });
     }, []);

     return <div>{image && <img src={image} alt="Logo" />}</div>;
   }

   export default App;
   ```

Choose the method that best suits your project's requirements and file structure. For most cases, importing images directly as shown in the first example is a straightforward and recommended approach.

## console.log(useState())?

- console.log(useState()) returns [value , function].
- If we _do not provide any argument_ for useState it returns undefined and a function.
- If we _do provide an argument_ for useState it returns value of argument and a function.

## `useEffect` and its relation to the dependency array

Syntax of `useEffect` is:

```javascript
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```javascript
useEffect(() => {
  console.log('I run everytime this component rerenders');
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```javascript
useEffect(() => {
  console.log('I Only run once (When the component gets mounted)');
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the variable`. eg: state variables

```javascript
useEffect(() => {
  console.log('I run every-time when my condition changed');
}, [variable]);
```

## SPA (Single Page Application).

`SPA` stands for "Single Page Application." It is a type of web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. In `SPAs`, the content is updated and manipulated in the browser through JavaScript, allowing for a smoother and more responsive user experience.

Key characteristics and concepts of Single Page Applications (`SPAs`) include:

1. **Dynamic Content Loading**: `SPAs` load data from the server in the background as needed, typically using AJAX (Asynchronous JavaScript and XML) or more modern techniques like Fetch API. This means that users can interact with the application without experiencing full page reloads.

2. **Client-Side Routing**: `SPAs` often employ client-side routing libraries or frameworks (e.g., React Router, Vue Router, Angular Router) to handle navigation within the application. These libraries allow the application to change the URL and content displayed without a server request.

3. **API-Driven**: `SPAs` typically rely on RESTful APIs or GraphQL to fetch and send data to the server. This separation of the front-end and back-end allows for better scalability and flexibility.

4. **State Management**: `SPAs` often use state management libraries like Redux (for React) or Vuex (for Vue) to manage and share application state across components. This ensures that data remains consistent and is easily accessible throughout the application.

5. **Single Initial Page Load**: When a user first visits the `SPA`, only a single HTML page (often called the "shell" or "skeleton") is loaded from the server. All subsequent interactions and data are loaded or manipulated using JavaScript.

6. **Faster and Smoother User Experience**: Since only specific parts of the page are updated, `SPAs` can provide a more seamless and responsive user experience compared to traditional multi-page applications (MPAs).

7. **SEO Challenges**: `SPAs` can face challenges with search engine optimization (SEO) because search engine crawlers may not execute JavaScript. However, modern techniques and server-side rendering (SSR) can address these issues.

8. **Performance Considerations**: While `SPAs` offer improved user experience in many cases, they can also lead to performance issues if not properly optimized. Overuse of JavaScript and excessive API requests can negatively impact load times.

Popular JavaScript libraries and frameworks like React, Angular, and Vue.js are commonly used to build `SPAs`. These libraries provide the tools and structure necessary to create interactive and dynamic web applications.

In summary, `SPAs` are web applications that load a single HTML page initially and then use JavaScript and AJAX to dynamically update and manipulate the content, providing a more responsive and seamless user experience.

## Difference between Client Side Routing and Server Side Routing

Client-side routing and server-side routing are two different approaches to handling navigation and routing in web applications. They have distinct characteristics and are suited to different types of web applications. Here's a comparison of the two:

| Aspect                    | Client-Side Routing                                                                                               | Server-Side Routing                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Location of Routing Logic | In the user's browser (client-side).                                                                              | On the web server (server-side).                                                                         |
| Initial Page Load         | Loads a single HTML page initially (shell) and fetches content dynamically.                                       | Loads complete HTML pages for each route from the server.                                                |
| Navigation Speed          | Generally faster due to minimal page reloading and improved user experience.                                      | May involve full page reloads, leading to slower perceived performance.                                  |
| Performance Optimization  | Requires additional optimization for performance, caching, and minimizing API requests.                           | Server-side caching and optimization can be used to improve performance.                                 |
| SEO Friendliness          | Can be less SEO-friendly because search engines may not execute JavaScript. Requires SEO optimization techniques. | More SEO-friendly as content is available in initial HTML response.                                      |
| Common Use Cases          | Common in Single Page Applications (SPAs) and modern web apps.                                                    | Common in traditional multi-page applications (MPAs).                                                    |
| Frameworks and Libraries  | React Router, Vue Router, Angular Router, etc.                                                                    | Next.js (for React), Nuxt.js (for Vue.js), Kit (for Svelte), Express.js (Node.js), Django (Python), etc. |
| Routing Updates           | Handles routing updates in the browser, making it suitable for dynamic user interfaces.                           | Requires server requests for route changes, suitable for traditional web applications.                   |

**Client-Side Routing**:

1. **Routing Handling**: In client-side routing, the routing is handled entirely on the client-side within the web browser. When a user clicks on a link or enters a URL, JavaScript running in the browser decides what content to display without making a request to the server for a new page.

2. **Performance**: Client-side routing can provide a faster and more responsive user experience after the initial page load because it doesn't require a full page refresh. Only the content that needs to change is fetched from the server.

3. **Common Use Cases**: Client-side routing is commonly used in Single Page Applications (SPAs) where the goal is to create a seamless and dynamic user experience. Frameworks like React Router, Vue Router, and Angular Router are often used for client-side routing in SPAs.

4. **SEO Considerations**: Client-side routing can present SEO challenges because search engines may not execute JavaScript or may not easily index content that is loaded dynamically. This can be mitigated with server-side rendering (SSR) or pre-rendering techniques.

**Server-Side Routing**:

1. **Routing Handling**: In server-side routing, the routing logic is handled on the server. When a user makes a request by clicking a link or entering a URL, the server determines what content to send back as the response, often by matching the URL to routes defined on the server.

2. **Performance**: Server-side routing can lead to full page reloads when navigating between pages, which can result in slower perceived performance compared to client-side routing. However, caching and optimization techniques can help mitigate this.

3. **Common Use Cases**: Server-side routing is used in traditional multi-page applications (MPAs) where each page is a separate HTML document generated by the server. Frameworks like Express.js for Node.js or Django for Python are commonly used for server-side routing.

4. **SEO**: Server-side routing can be more SEO-friendly because search engines can easily index the content of individual pages, as the content is typically available in the initial HTML response.

In summary, the main difference between client-side routing and server-side routing is where the routing logic is executed:

- Client-side routing handles routing in the user's browser, offering a fast and responsive user experience, but it may require additional efforts for SEO optimization.
- Server-side routing handles routing on the server, leading to full page reloads but often being more SEO-friendly and suitable for traditional multi-page applications.

The choice between client-side and server-side routing depends on the specific requirements and goals of your web application. Many modern web applications use a combination of both techniques to achieve the best of both worlds, a practice known as hybrid routing.
