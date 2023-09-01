# _Chapter 02 - Igniting our App_

## npm - ~~node package manager~~ `it's not`

Is it "npm" or "NPM" or "Npm"?
npm should never be capitalized unless it is being displayed in a location that is customarily all-capitals (ex. titles on man pages).

Is "npm" an acronym for "Node Package Manager"?
Contrary to popular belief, npm is not in fact an acronym for "Node Package Manager"; It is a [recursive bacronymic abbreviation](https://en.wikipedia.org/wiki/Recursive_acronym) for "npm is not an acronym" (if the project was named "ninaa", then it would be an acronym). The precursor to npm was actually a bash utility named "pm", which was the shortform name of "pkgmakeinst" - a bash function that installed various things on various platforms. If npm were to ever have been considered an acronym, it would be as "node pm" or, potentially "new pm
[source](https://www.npmjs.com/package/npm#user-content-faq-on-branding)

## a bundle

A bundle is a collection of JavaScript, CSS, and other assets that are combined and optimized for efficient delivery to the browser. It simplifies the deployment process and helps improve the performance of web applications.

## bundler

A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser

For example:

1. parcel
2. webpack (used by `create-react-app`) and
3. vite ( prounounced as veet)

## Parcel:

Parcel is an open-source bundler bundler used for development and productions purposes.
[how-to](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js)

## Parcel Features:

- `HMR` - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files. File watcher algorithm is made with C++.
- DEV and Production builds.
- Tree Shaking - remove unused code / dead code elimination technique.
- Minification(also Uglify) & Differencial(no-modudle fallback) Bundling.
- Cleaning our code. _Automatic transforms_(Compatible with older version of browser) =>
  By default Parcel is performing code transformations using Babel, PostCSS and PostHTML. [for browser coverage](https://browserslist.dev/?q=bGFzdCAyMCB2ZXJzaW9ucw%3D%3D)
- Super fast building algorithm.
- Lossless image optimization.
- Caching while development
- Compression
- HTTPS Support on Dev
- local sever with port Number.
- [Consistent hashing algorithm](https://medium.com/@nikhildhariwal2004/parcel-is-a-beast-an-all-in-one-bundle-for-powerful-web-development-e79f8a70cbd6#aafc)
- Zero Configuration [code splitting](https://medium.com/hackernoon/code-splitting-with-parcel-web-app-bundler-fe06cc3a20da)
  =>[learn more](https://betterprogramming.pub/how-to-use-code-splitting-with-react-and-parcel-e8bb37be4160)
- Friendly error handling

### installation commands:

[doc](https://parceljs.org/docs/)

[version - caret vs tilde](https://www.geeksforgeeks.org/difference-between-tilde-and-caret-in-package-json/)

1. Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

2. Parcel Commands :

- For development build:

```
npx parcel <entry_point>
```

## npx

A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

- For production build :

```bash
# Remove the "main": "App/index.js" line from package.json if it exists.
# This line might have been added by default when you ran npm init.

# Now, build your project using Parcel
npx parcel build <entry_point>
```

optimal site architecture should be like this

```
your_project/
|── node_modules
|── src/
| |── css/
| | |── style.css
| |── js/
| | |── app.js
| |── index.html
|── package.json
|── package-lock.json
```

## Transitive dependencies

transitive dependencies are the dependencies of your dependencies, also known as indirect dependencies

#### Example

- Your Project (A) depends on Library X.
- Library X depends on Library Y and Library Z.

## .parcel-cache

The `.parcel-cache` directory is a cache folder created by the Parcel bundler. Parcel uses this cache to store compiled assets and other intermediate files in order to _speed up subsequent builds and reduce redundant work_.

When you build your project using Parcel, it processes your source files (JavaScript, CSS, images, etc.) and generates the bundled output. The first time you build, Parcel generates and stores cache files in the `.parcel-cache` directory. _These cache files help Parcel avoid recompiling everything from scratch on subsequent builds, making the build process faster_.

_Parcel handles the cache management automatically._

## Difference between _dependencies_ vs _devDependencies_.

##### Dependencies `dependencies`:(all install are by default added to `dependencies`)

Dependencies listed under the dependencies field in your package.json are packages that are required for your application to run in a production environment. These are the packages that your application relies on to function correctly when it's deployed and used by end-users. They include libraries, frameworks, utilities, and other code that is necessary for the core functionality of your application.

```json
"dependencies": {
  "react": "^17.0.2",
  "express": "^4.17.1"
}

```

##### Development Dependencies `devDependencies`:

Dependencies listed under the devDependencies field are packages that are only needed during development. These packages include tools, libraries, and utilities that assist you in developing, testing, building, or deploying your application. They are not required for the application to run in production, but they are essential for your development workflow.

When you install dependencies using the --save-dev flag or the shorthand -D, npm will add them to the devDependencies section of your package.json.

```bash
npm install -D <package-name>
#or
npm install --save-dev <package-name>
```

```json
"devDependencies": {
  "babel-cli": "^6.26.0",
  "jest": "^28.0.0"
}
```

## Hot Module Replacement `HMR`

**`HMR` is a development feature in modern JavaScript frameworks like React, Vue, and Webpack that allows you to see instant updates to your code in the browser without requiring a full page refresh**.

It significantly speeds up the development process by enabling you to make changes to your code and immediately see the effects in the application without losing the current state of the application.

`HMR` works by replacing only the modules that have changed, rather than reloading the entire page. This can include changes to JavaScript files, stylesheets, and even certain templates or HTML components.

**The updated modules are injected directly into the running application without affecting the application's current state. `HMR` preserves the in-memory state of the application, such as component states, making the experience seamless and interactive**.

Here's how `HMR` typically works:

- Detect Changes: When you make changes to your code and save the files, the development server (e.g., webpack dev server) detects these changes.
- Apply Changes: The development server replaces the changed modules with the updated versions while the application is still running. It does this without disrupting the existing application state.
- Reflect Changes: The updated modules are reflected in the browser, and you can immediately see the changes without needing to manually refresh the page.

`HMR` benefits developers in several ways:

- Faster Feedback Loop: You can quickly iterate and see the effects of your code changes without waiting for a full page reload.
- Preserved State: `HMR` maintains the state of the application, so you don't lose data or context when you make changes.
- Improved Productivity: The reduced waiting time improves productivity and allows for more efficient development.

## Git ignore file `.gitignore`

- The Git ignore file `.gitignore` is a text file that tells Git which files or folders to ignore/avoid-tracking in a respective repository.

- if any required file can be recreated again (like the node_modules/ directory, log files, database files, and various environment files) add those to `.gitignore`.This helps keep your repository clean, reduces unnecessary commits, and team members can recreate them in their machine.

- **`package-lock.json` should not add into your `.gitignore` file**

- _Keep in mind that `.gitignore` only affects files that haven't been committed to the repository before. If a file has already been tracked by Git, adding it to `.gitignore` won't remove it from the repository's history. To address this, you might need to use the `git rm --cached command` to untrack files that you want to ignore from now on._

## Difference between `package.json` and `package-lock.json`

#### `package.json`:

The `package.json` file is the heart of your project's configuration. It contains metadata about your project, such as its name, version, description, author, and more. However, one of the most important roles of `package.json` is to list the dependencies and devDependencies that your project relies on. These dependencies are essential for your project to function correctly, and they are used by developers during development, as well as by build and deployment processes.

#### `package-lock.json`:

- The `package-lock.json` file is automatically generated by npm and provides more information about the exact versions of the packages installed in your project. It is used to ensure that every developer working on the project, as well as different environments (like build servers), install exactly the same versions of the dependencies.

- The `package-lock.json` file includes not only the dependencies listed in package.json but also **their full dependency trees, including all transitive dependencies. It includes version information, integrity hashes for each package, and details about where the packages are fetched from.**

- **The purpose of `package-lock.json` is to provide reproducible builds by locking down the dependency versions and resolving any potential version conflicts**. This helps avoid "`dependency hell`" situations where different developers or environments end up with slightly different versions of the same dependencies.

- Again,**`package-lock.json` should not add into your `.gitignore` file**.

- Also, **DO NOT MODIFY IT**.

## `src` folder vs `dist` folder :-

The "`src`" directory holds the original source code and assets for development, while the "`dist`" directory contains the optimized and compiled version of your application ready for deployment(production code). Separating the source code from the distribution-ready files helps maintain a clean development workflow and ensures that production versions of your application are efficient and performant.

## Folder structure

While there's no one-size-fits-all approach,here's a common folder structure that you can use as a starting point for web development projects:

```bashrc
project-root/
  ├── src/
  │   ├── assets/
  │   │   ├── images/
  │   │   ├── styles/
  │   │   └── ...
  │   │
  │   ├── components/
  │   ├── pages/
  │   ├── utils/
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  │
  ├── public/
  │   ├── index.html
  │   ├── favicon.ico
  │   └── ...
  │
  ├── dist/
  │   ├── *production-code*
  │   └── ...
  │
  ├── node_modules/
  ├── package.json
  ├── package-lock.json
  ├── .gitignore
  ├── README.md
  └── ...

```

Folder structure is an important aspect of organizing your project's files and directories in a logical and maintainable way. Remember, this structure can be adapted to suit the specific needs of your project.

Here's a breakdown of each key folder and its purpose:

- src/: This is where your source code resides. It includes:
- assets/: Holds static assets like images, fonts, and styles.
- components/: Contains reusable UI components.
- pages/: Houses individual page components.
- utils/: Includes utility/helper functions.
- App.js: The main application component.
- index.js: The entry point of your application.
- public/: Contains static files that are directly copied to the build output, like HTML and favicon. This is often the root directory for your web server.
- dist/: The output directory where the bundled, optimized, and compiled code is generated (e.g., by Webpack or Parcel).
- node_modules/: The folder where npm or Yarn stores installed dependencies.
- package.json and package-lock.json: Configuration and dependency management files.
- .gitignore: Specifies files and directories that should not be tracked by version control.
- README.md: Documentation about your project.
- Other files and directories: You can add additional folders for testing, configuration files, scripts, etc.

> ## Importatnt note:-

> The whole point of this lecture is to know what create-react-app does behind the scene.It is not only the virtual DOM that makes React faster but other components like bundlers (e.g. parcel, webpack ,vite etc. ) and development ecosystme also. Also react doesn't minify or bundle your apps. those all done by create-react-apps software behind the scene with webpack,browserlist(or [similar](https://github.com/facebook/create-react-app/blob/main/package.json))

> [A blog on Creating a react app from scratch](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
