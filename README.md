# express-hmr-react

Like so many before me, it's been a long tortuous journey to finding a webpack config that was to my liking.  This repo is just to ensure I have a good starting point for future express/react projects, as well as a place to collect my learnings going forward in an actual configuration.

Using express + webpack-dev-middleware + HMR + react-hot-loader for HMR doesn't seem to be the best-beaten path for this style of development.  Resources and examples for it are sparse, often conflict, and very often don't work.  Also with the rapidly changing API's of webpack, react, react-hot-loader, many of them are out of date.

## To run

#### In development
This command runs the webpack.config.server.js in non-production mode, which triggers 'watch' mode and tells the server to add dev-middleware.

Webpack-dev-middleware and webpack-hot-middleware are added to the express app, which runs the webpack.config.client.js build in non-production mode
```
$ yarn dev
```

#### In production
```
yarn build && yarn start
```

`yarn build`:
- deletes ./dist folder
- runs webpack on the server configuration in production mode
- runs webpack on the client configuration in production mode
 
`yarn start`:
- starts the compiled server in `dist/server.js` in production mode.

