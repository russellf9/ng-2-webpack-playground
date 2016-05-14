# Angular2 Webpack Playground

I created this repo to do working project with Angular 2. I had issues getting Webpack to work with Angular 2 and hot reload so I cloned the [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter) repo for this project.
–

### Quick start
**Make sure you have Node version >= 4.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/russellf9/ng-2-webpack-playground

# change directory to our repo
cd ng-2-webpack-playground

# add required global libraries
npm install typings webpack-dev-server rimraf webpack -g

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr


```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser


## Learning

[angular-2-passing-data-to-components-with-input](https://egghead.io/lessons/angular-2-passing-data-to-components-with-input)