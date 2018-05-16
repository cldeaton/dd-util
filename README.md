# dd-util

The package adds three utility functions when required by the User.

 - defaults: Iterates over source objects and assigns all keys declared as "undefined" to the original Object.

 - defaultsDeep: This method behaves similarly to defaults, except that it recursively assigns default properties.

 - diff: This method return the difference of two compared objects


### Installing

```
npm install --save dd-util
```

And in Node:

```
const {defaults, defaultsDeep, diff} = require('dd-util');
```

## Examples

- defaults:

```
defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }
```


- defaultsDeep:

```
defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }
```


- diff:

```
const a = {
  foo: 20,
  bar: 'hello world',
  buzz: '123456789',
};

const b = {
  foo: 25,
  bar: 'hello world',
  buzz: '123',
};

diff(a, b);
// {
//   foo: 25,
//   buzz: '123',
// }
```



## Authors

* **Chris Deaton** - [cldeaton](https://github.com/cldeaton)
