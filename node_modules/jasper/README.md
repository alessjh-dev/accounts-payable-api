# jasper [![NPM version](https://badge.fury.io/js/jasper.svg)](http://badge.fury.io/js/jasper) [![Build Status](https://travis-ci.org/kaelzhang/node-jasper.svg?branch=master)](https://travis-ci.org/kaelzhang/node-jasper) [![Dependency Status](https://gemnasium.com/kaelzhang/node-jasper.svg)](https://gemnasium.com/kaelzhang/node-jasper)

Jasper is an elegant template engine.

## Install

index.jasp
```html
html
  body
    facade abc
```

## Usage

```js
var jasper = require('jasper');
jasper.register('facade', function(name){
  return '<script>facade({mod: "' + name + '"});</script>';
});

jasper.compile(fs.readFileSync('index.jasper'));
```

```html
<html>
  <body>
    <script>facade({mod: "abc"})</script>
  </body>
</html>
```

## Licence

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->