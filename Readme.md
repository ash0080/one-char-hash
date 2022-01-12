# one-char-hash

...
## Motive
I just wanted to create an extremely short hash for certain checksum scenarios to reduce data transfer or storage, and it turned out beyond my expectation that I could represent it with only 1 character！

So unlike a regular hash, you can score this hash string by comparing each character.

The algorithm itself is very simple, because the UTF-16 maximum value is 0x10FFFF and your hash will hardly be repeated with ascii string length < 9132, but the actual situation may be a little smaller than that, as to how to calculate the real possibility is beyond my current mathematical knowledge, so I mark it as AS IS, please use it with caution in production environments.

## Usage
```js
import hash from '@ash0080/one-char-hash';
const hashedC = hash('this is a special string!'); // => "ऎ"
```

## Changelog

The changelog can be found on the [Releases page](https://github.com/ash0080/one-char-hash/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[ash0080](Feanor) and [contributors](https://github.com/ash0080/one-char-hash/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
