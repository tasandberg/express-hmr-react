# express-hmr-react

Like so many before me, it's been a long tortuous journey to finding a webpack config that was to my liking.  This repo is just to ensure I have a good starting point for future express/react projects.

Using express + webpack-dev-middleware + HMR + react-hot-loader for HMR doesn't seem to be the best-beaten path for this style of development.  Resources and examples for it are sparse, often conflict, and very often don't work.  Also with the rapidly changing API's of webpack, react, react-hot-loader, many of them are out of date.

## To run

#### In development
This command runs the webpack.config.server.js in non-production mode, which triggers 'watch' mode and tells the server to add dev-middleware.

dev-middleware then adds webpack-dev-middleware and webpack-hot-middleware to the express app, and runs the webpack.config.client.js build in non-production mode
```
$ yarn dev
```

#### In production
This command:
* deletes ./dist
* runs webpack.config.server.js build in production mode
* runs webpack.config.client.js build in proudction mode
* starts the transpiled express server in production mode
```
yarn start
```

There is also `yarn build` which is used by the `yarn start` command.  For when building of production assets is required w/o server start.
