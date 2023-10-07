# _Chapter 10 - Jo dikhta hai woh bikta hai (what is seen is sold)_

## Explore all the ways of writing css in react.

In a React application, you have several options for writing CSS to style your components and user interface. These approaches range from traditional CSS to modern solutions that are tightly integrated with React's component-based architecture. Here are the main ways of writing CSS in React:

1. **Inline Styles**: React allows you to apply styles directly to individual elements using the `style` prop. This is similar to inline styles in HTML but uses JavaScript objects to define styles. Here's an example:

   ```jsx
   const styles = {
     color: 'blue',
     fontSize: '16px'
   };

   function MyComponent() {
     return <p style={styles}>This is a blue text with a font size of 16px.</p>;
   }
   ```

   Inline styles are specific to individual elements and are defined as JavaScript objects.

2. **Internal Styles (CSS Modules)**: You can use CSS Modules to define styles in separate CSS files that are scoped to specific components. This approach allows you to import and use CSS classes within your React components. Here's an example:

   ```jsx
   // styles.module.css
   .myText {
     color: green;
     font-size: 18px;
   }

   // MyComponent.js
   import styles from './styles.module.css';

   function MyComponent() {
     return <p className={styles.myText}>This is a green text with a font size of 18px.</p>;
   }
   ```

   CSS Modules provide encapsulation and avoid global CSS conflicts.

3. **External Styles (Traditional CSS)**: You can include traditional CSS files in your React project and apply styles using class names or IDs. This is the same approach you use in non-React web development. Here's an example:

   ```jsx
   // styles.css
   .myText {
     color: purple;
     font-size: 20px;
   }

   // MyComponent.js
   import React from 'react';
   import './styles.css';

   function MyComponent() {
     return <p className="myText">This is a purple text with a font size of 20px.</p>;
   }
   ```

   This approach is familiar and works well for larger projects with existing CSS codebases.

4. **CSS-in-JS**: Several libraries and frameworks, such as styled-components, Emotion, and JSS, allow you to write CSS directly in your JavaScript code. CSS-in-JS solutions generate unique class names and provide a more component-centric styling approach. Here's an example using styled-components:

   ```jsx
   import styled from 'styled-components';

   const StyledParagraph = styled.p`
     color: orange;
     font-size: 24px;
   `;

   function MyComponent() {
     return (
       <StyledParagraph>
         This is an orange text with a font size of 24px.
       </StyledParagraph>
     );
   }
   ```

   CSS-in-JS provides dynamic styling and fine-grained control.

5. **CSS Frameworks**: React applications can make use of CSS frameworks like Bootstrap, Material-UI, or Ant Design. These frameworks provide pre-designed components and styles that you can use in your React components.

6. **CSS Preprocessors**: If you prefer using CSS preprocessors like Sass, Less, or Stylus, you can integrate them into your React project. These preprocessors offer features like variables, nesting, and mixins.

7. **Postprocessors (PostCSS)**: Postprocessors like PostCSS can enhance your CSS by adding features like autoprefixing and minification. They work on your existing CSS code and can be integrated into your build process.

The choice of which method to use for styling in React depends on factors like project requirements, team preferences, and the specific use case. React's flexibility allows you to choose the styling approach that best fits your needs and workflow.

## How do we configure tailwind?

[link](https://tailwindcss.com/docs/configuration)

Configuring Tailwind CSS for your project involves several steps to set up the necessary configuration files and customize the framework to match your design requirements. Below are the typical steps to configure Tailwind CSS:

1. **Install Tailwind CSS**:
   Start by creating a new React project or navigate to your existing project's root directory. Then, install Tailwind CSS and its peer dependencies via npm or yarn:

   ```bash
   # Using npm
   npm install tailwindcss postcss-cli autoprefixer

   # Using yarn
   yarn add tailwindcss postcss-cli autoprefixer
   ```

2. **Create a Configuration File**:
   Create a Tailwind CSS configuration file in your project's root directory. You can generate a default configuration file using the `npx` command:

   ```bash
   npx tailwindcss init
   ```

   This command creates a `tailwind.config.js` file in your project.

3. **Configure CSS Processing**:
   Create a PostCSS configuration file in your project's root directory. Create a file named `postcss.config.js` if it doesn't exist and add the following:

   ```javascript
   // postcss.config.js
   module.exports = {
     plugins: [require('tailwindcss'), require('autoprefixer')]
   };
   ```

   This configuration sets up PostCSS to process your CSS files with Tailwind CSS and autoprefixing.

4. **Create a CSS Entry Point**:
   Create a CSS entry point file where you'll import Tailwind CSS and define any custom styles. Commonly, this file is named `styles.css` or similar. Make sure to import Tailwind's base, components, and utilities styles:

   ```css
   /* src/styles.css */
   @import 'tailwindcss/base';
   @import 'tailwindcss/components';
   @import 'tailwindcss/utilities';

   /* Add your custom styles below */
   ```

5. **Include the CSS Entry Point in Your Application**:
   Import the CSS entry point in your application's JavaScript or TypeScript file. Typically, this would be your `index.js` or `index.tsx` file.

   ```javascript
   // index.js or index.tsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './styles.css'; // Import your CSS entry point
   import App from './App';

   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById('root')
   );
   ```

6. **Customize Tailwind CSS**:
   Open your `tailwind.config.js` file and customize the framework according to your project's needs. You can modify colors, fonts, spacing, and more in this file. Tailwind CSS's extensive documentation provides guidance on customization.

7. **Purge Unused CSS**:
   In production, it's essential to remove unused CSS to reduce the final bundle size. To do this, add a build script to your `package.json` that uses the `NODE_ENV` environment variable to enable CSS purging:

   ```json
   "scripts": {
     "start": "react-scripts start",
     "build": "NODE_ENV=production react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   }
   ```

   When running `npm run build` or `yarn build`, Tailwind CSS will automatically remove unused styles from your production build.

8. **Run Your Application**:
   After configuring Tailwind CSS, start your development server to see your styles in action:

   ```bash
   npm start
   ```

   Your application should now be using Tailwind CSS for styling.

By following these steps, you'll have successfully configured Tailwind CSS for your React project. You can now start using Tailwind's utility classes to style your components and customize the framework to match your project's design requirements.

## Why do we have `.postcssrc` file?

[link](https://www.freecodecamp.org/news/what-is-postcss/)

The `.postcssrc` file (or `postcss.config.js`) is a configuration file used in projects that utilize PostCSS, a tool for transforming CSS with JavaScript. PostCSS provides a flexible and extensible way to process and transform CSS, enabling developers to use various plugins and tools to enhance their CSS workflow.

Here's why you might have a `.postcssrc` file in your project:

1. **Customization**: The primary purpose of the `.postcssrc` file is to customize the PostCSS configuration for your project. This includes specifying which plugins to use, their settings, and other options that affect how your CSS is processed.

2. **Plugin Configuration**: PostCSS is a highly extensible tool, and you may want to use various plugins to perform tasks such as autoprefixing, minification, nesting, and more. The `.postcssrc` file allows you to specify which plugins to include and how to configure them.

3. **Consistency**: By using a configuration file, you ensure that the PostCSS setup is consistent across your project, making it easier for team members to work on and understand how CSS is processed.

4. **Maintainability**: Storing your PostCSS configuration in a file makes it easier to manage and update as your project evolves. It provides a central place to modify settings without having to hunt through multiple files or scripts.

5. **Integration with Build Tools**: Many build tools and bundlers, such as webpack and Parcel, can automatically detect and use the configuration specified in `.postcssrc`. Having a dedicated configuration file simplifies integration with these tools.

6. **Environment-specific Configurations**: You can also use `.postcssrc` to define different configurations for different environments, such as development and production. This allows you to enable or disable certain PostCSS features or plugins based on the context.

Here's an example of a simple `.postcssrc` configuration file:

```javascript
// .postcssrc.js

module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-custom-properties': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false
  }
};
```

In this example, we configure PostCSS to use three plugins: Autoprefixer for adding vendor prefixes, PostCSS Custom Properties for processing CSS variables, and CSSNano for minification. CSSNano is only enabled in the production environment.

To summarize, the `.postcssrc` file is a valuable part of your web development workflow when you use PostCSS, as it allows you to customize how your CSS is processed and makes your project's CSS setup more maintainable and consistent.
