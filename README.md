# wepack-boilerplate-Fall-2019
A React Webpack to use as a Boilerplate. It is from early Fall 2019 for reference and updates.

This webpack was made using this site https://www.valentinog.com/blog/webpack/ (thank you Valentino Gagliardi) and yarn.
For Yarn and installation, I used the following commands in the following order:

cd <into the file I want to use>
mkdir webpack && cd webpack
yarn init
yarn add webpack --dev
yarn add webpack-cli --dev
mkdir src && touch src/index.js
yarn run build
yarn run dev
yarn run build
yarn add @babel/core babel-loader @babel/preset-env --dev
touch .babelrc
touch webpack.config.js
yarn run build
yarn add react react-dom --dev
yarn add @babel/preset-react --dev
touch src/App.js
yarn run build
yarn audit
yarn add html-webpack-plugin html-loader --dev
src/index.html
yarn run build
yarn add mini-css-extract-plugin css-loader --dev
touch src/main.css
yarn run build
yarn add webpack-dev-server --dev
yarn run start

I also run the command 'yarn audit' when building the webpack to see if the packages are up to date and running well.
