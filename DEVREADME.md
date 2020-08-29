## create a new npm package
`npm init`

## create the directory structure
`public/` - contains the `index.html` that will be mutated by our source code and will be served to
the client.

`src` - contains the reactjs app source code.

## install react and react-dom
`yarn add react react-dom`

## add app root component
these are `App.js` and `App.css`. these are the root component.

## install webpack and its corresponding loaders
Webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but
it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders
are included. webpack takes modules with dependencies and generates static assets representing
those modules.
`yarn add -D webpack webpack-cli webpack-dev-server style-loader css-loader`

## install babel transpiler packages
`yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-react`

## install babel webpack loader
this will enable us to use babel transpiler package in webpack rules
`yarn add -D babel-loader`

## add babel config file
`.babelrc`

## add webpack config file
`webpack.config.js`

## run the app using webpack
`npx webpack-dev-server --mode development`

## enable hot loading
`yarn add -D react-hot-loader`


