
## FIRST Script

npm init -y
npm i webpack webpack-cli webpack-dev-server --save-dev

mkdir src
echo console.log("Hello webpack!") > src/index.js

npm install touch-cli -g
touch webpack.config.js

npm i html-webpack-plugin --save-dev
npm i webpack-dev-server --save-dev
npm i css-loader style-loader --save-dev

## CSS
npm i css-loader style-loader sass-loader sass --save-dev


## JAVASCRIPT-transformed code
npm i @babel/core babel-loader @babel/preset-env --save-dev

## Code splitting with dynamic imports
