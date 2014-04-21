# rave-curl-json

rave-curl-json is a RaveJS extension that adds the ability to use the json
plugin from [curl.js](http://github.com/cujojs/curl) in your RaveJS application.

When using an ES6 loader, AMD plugins aren't the most efficient way to load
non-module resources.  However, refactoring to use ES6 loaders can be a hassle.
This extension allows existing AMD code bases to start using RaveJS without
immediate refactoring.  In the long term, you should investigate using true
ES6 loader extensions such as
[rave-load-text](https://github.com/unscriptable/rave-load-text) and
[rave-load-css](https://github.com/unscriptable/rave-load-css).

Note: RaveJS can already load JSON documents without any help of an AMD plugin
or an extension.  If the file extension is ".json", it will load correctly.

##Usage

This is all that is required to start using this extension in your RaveJS app:

```
npm install --save rave-curl-json
```

or:

```
bower install --save rave-curl-json
```

Any code that references the json plugin in AMD or node-formatted code will
automatically find and use curl's plugin:

```js
define(['json!data.json'], function (data) {
	// use data here
});
```

```js
var data = require('json!data.json');
// use data here
```

## Testing

**TBD**

## Contributing

Pull requests accepted!  Please see [Contributing](CONTRIBUTING.md).

## About

Brought to you by [cujoJS](http://cujojs.com).
