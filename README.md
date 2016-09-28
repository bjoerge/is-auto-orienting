# is-auto-orienting

Feature detect whether the current browser is using the EXIF orientation when showing images

## Usage

```js
import isAutoOrienting from 'is-auto-orienting'

isAutoOrienting().then(result => {
  if (result) {
    console.log('This browser is automatically orienting images')
  } else {
    console.log('This browser is NOT automatically orienting images')
  }
})
```

## Licence
MIT