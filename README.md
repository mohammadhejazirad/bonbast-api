## BonBast Api For Nodejs

A node library to get exchange rates from the bonbast site

Taken from the [bonbast](https://github.com/SamadiPour/bonbast) library

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

<hr/>

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

```json lines
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

<hr/>

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

```json lines
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

<hr/>

Get Coin:

```typescript
const getCoin = await BonbastApi.getCoin();
```

options:

| name          | type    | default | description                     |
|---------------|---------|---------|---------------------------------|
| sellAddCommas | boolean | true    | for add / remove commas numbers |
| buyAddCommas  | boolean | true    | for add / remove commas numbers |

simple response:

```json lines
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

<hr/>

Get Gold:

```typescript
const getCoin = await BonbastApi.getGold({priceAddCommas: false});
```

options:

| name           | type    | default | description                     |
|----------------|---------|---------|---------------------------------|
| priceAddCommas | boolean | true    | for add / remove commas numbers |

simple response:

```json lines
[
  {
    code: 'mithqal',
    name: 'Gold Mithqal',
    price: 11219000
  },
  {
    code: 'gol18',
    name: 'Gold Gram',
    price: 2589916
  },
  {
    code: 'ounce',
    name: 'Ounce',
    price: 2029.24
  },
  {
    code: 'bitcoin',
    name: 'Bitcoin',
    price: 46873.93
  }
]
```

<hr/>

## description:

**List of supported currencies:**

| Flag | Currency          | Code |
|:----:|-------------------|:----:|
| 🇺🇸 | US Dollar         | USD  |
| 🇪🇺 | Euro              | EUR  |
| 🇬🇧 | British Pound     | GBP  |
| 🇨🇭 | Swiss Franc       | CHF  |
| 🇨🇦 | Canadian Dollar   | CAD  |
| 🇦🇺 | Australian Dollar | AUD  |
| 🇸🇪 | Swedish Krona     | SEK  |
| 🇳🇴 | Norwegian Krone   | NOK  |
| 🇷🇺 | Russian Ruble     | RUB  |
| 🇹🇭 | Thai Baht         | THB  |
| 🇸🇬 | Singapore Dollar  | SGD  |
| 🇭🇰 | Hong Kong Dollar  | HKD  |
| 🇦🇿 | Azerbaijani Manat | AZN  |
| 🇦🇲 | 10 Armenian Dram  | AMD  |
| 🇩🇰 | Danish Krone      | DKK  |
| 🇦🇪 | UAE Dirham        | AED  |
| 🇯🇵 | 10 Japanese Yen   | JPY  |
| 🇹🇷 | Turkish Lira      | TRY  |
| 🇨🇳 | Chinese Yuan      | CNY  |
| 🇸🇦 | Saudi Riyal       | SAR  |
| 🇮🇳 | Indian Rupee      | INR  |
| 🇲🇾 | Malaysian Ringgit | MYR  |
| 🇦🇫 | Afghan Afghani    | AFN  |
| 🇰🇼 | Kuwaiti Dinar     | KWD  |
| 🇮🇶 | 100 Iraqi Dinar   | IQD  |
| 🇧🇭 | Bahraini Dinar    | BHD  |
| 🇴🇲 | Omani Rial        | OMR  |
| 🇶🇦 | Qatari Rial       | QAR  |

