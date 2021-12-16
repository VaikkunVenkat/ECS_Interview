## Docs on how to run app

This repo represents [Create React App](https://github.com/facebook/create-react-app) as part of the ECS interview.

The `master` brach contains my main work - and the `feature/with_dataMuse` branch is my attempt at trying to integrate the `dataMuse` api as one of the stretch points.

## Cloning the repo, checking out the right branch, installing the npm dependencies and starting the server
`git clone https://github.com/VaikkunVenkat/ECS_Interview.git`\
`cd ECS_Interview`\
`git fetch && git checkout master`\
`npm install && npm start`\

## Available Scripts

To start the app, run: 

### `npm start`

to commence the local development server.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

This app makes use of unit testing through shallow enzyme rendering of different components.
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

The end-to-end testing suite written in cypress can be access with:

`node_modules/.bin/cypress open` and clicking on `App.spec.ts` in the resulting browser window that opens.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
