## BonBast Api For Nodejs

A node library to get exchange rates from the bonbast site

- [Installation](#installation)
- [Usage](#usage)

## Installation

npm:

```bash
npm install bonbast-api
```

yarn:

```bash
yarn add bonbast-api
```

## Usage

import es5 or javascript:

```javascript
const {BonbastApi} = require("bonbast-api")
```

import es6 or typescript:

```typescript
import {BonbastApi} from 'bonbast-api';
```

Get Response:

``` typescript
const getResponse = await BonbastApi.getResponse();
```

options:

| name          | type    | default | description                     |
|---------------|---------|---------|---------------------------------|
| sellAddCommas | boolean | true    | for add / remove commas numbers |
| buyAddCommas  | boolean | true    | for add / remove commas numbers |

simple response:

```json
 {
  aed1: '14120',
  aed2: '14070',
  afn1: '730',
  afn2: '725',
  amd1: '1270',
  amd2: '1265',
  aud1: '34400',
  aud2: '34300'

  // and more ...
}
```

Get Currency:

```typescript
const getCurrency = await BonbastApi.getCurrency();
```

options:

| name          | type    | default | description                     |
|---------------|---------|---------|---------------------------------|
| sellAddCommas | boolean | true    | for add / remove commas numbers |
| buyAddCommas  | boolean | true    | for add / remove commas numbers |

simple response:

```json
[
  {
    code: 'bhd',
    name: 'Bahraini Dinar',
    sell: '136,100',
    buy: '135,600'
  },
  {
    code: 'cad',
    name: 'Canadian Dollar',
    sell: '38,400',
    buy: '38,300'
  },
  {
    code: 'eur',
    name: 'Euro',
    sell: '56,150',
    buy: '56,050'
  }

  // and more ...
]

```

Get Coin:

```typescript
const getCoin = await BonbastApi.getCoin();
```

```json
[
  {
    code: 'emami',
    name: 'Emami',
    sell: '30,750,000',
    buy: '30,450,000'
  },
  {
    code: 'azadi',
    name: 'Gerami',
    sell: '5,950,000',
    buy: '5,800,000'
  }

  // and more ...
]
```




