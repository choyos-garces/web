# hoyosgarces-web

Webpage for [Hoyos Garces](hoyosgarces.com)


##Requirements
- node/npm (for grunt)
- ruby/gem (for sass)
- font-awesome

## Getting Started
Build with angular2-beta.6 and requires grunt to transpile and watch the `.ts` and `.sass` files. To install dependencies run `npm install`. <br />
It's required to have typings globally installed. To do so run `npm install -g typings` <br /> 
After that is done, to get the required typings to transpile the ts files run `typings install --ambient` (remember the flag).

Setup ruby/gem and install sass `gem install sass`

Copy the font-awesome css and fonts folders to the `src/lib/font-awesome` directories.
## Tasks
#### Build 
Must run the this task to start development as it will copy the required files from the `node_modules` directory to the `src/lib` directory. It will also get the `build/` directory ready.
```javascript
gunt build
```
Directory contains `map` files for the typescirpt and sass files. Nothings is minified.

#### Start
Runs a watch task for the src directory.
```javascript
gunt start
```

#### Server
Start BrowserSync and watch task.
```javascript
grunt server
```

#### Dist
To get the distribution folder ready.
```javascript
grunt dist
```
Remove map files and minfies everything.