# webpack-boilerplate-Fall-2019
A React Webpack to use as a Boilerplate. It is from early Fall 2019 for reference and updates. When you download it, you can run yarn init to put your own information in the package.json file, then you can run yarn install. Then run yarn run build. Running yarn start or yarn run dev will start it up. I also run yarn audit often to make sure it is all working.

This webpack was made using this site https://www.valentinog.com/blog/webpack/ (thank you Valentino Gagliardi) and yarn. The webpack is set up to support HTML, CSS, Images, and routing if needed. I used the following commands in this order when I made it in the first place:

cd <into the file where I will place my project>

mkdir <whatever you decide to call this file> && cd <whatever you decide to call this file>
 
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

yarn add file-loader --dev  

yarn add image-webpack-loader --dev

yarn run build

yarn run dev

yarn start  

Sometimes it will not start without yarn run dev being run first. Sometimes yarn start is all that was needed.  I also ran the
command 'yarn audit' when building the webpack to see if the packages are up to date and running well.
