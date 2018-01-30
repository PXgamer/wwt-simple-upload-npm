# wwt-simple-upload-npm

A (really easy to use) uploader for WorldWideTorrents written for NodeJS.

## Usage

```js
import upload from 'wwt-simple-upload-npm'
const API_KEY = ''

upload(
    API_KEY,
  {
    'name': '',                         // The uploaded torrent's title
    'torrent_file': '/home/a.torrent',  // The full path to the torrent file
    'category_id': 39                   // The category ID
  }
)
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
