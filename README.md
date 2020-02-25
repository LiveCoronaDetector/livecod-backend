# livecod-backend
The backend server that powers [livecod](https://livecorona.co.kr).

[livecod](https://livecorona.co.kr)의 백앤드 서버입니다.

## Getting Started
### Installation
* Node.js v10+

```sh
git clone https://github.com/LiveCoronaDetector/livecod-backend.git
cd livecod-backend
npm install
```

### Starting the development server
```sh
npm run dev
```

## Documentation
### Fetching data
`GET /covid-19/:countryCode/:subdivisionCode?`

#### Params
| Param | Explanation |
|---|---|
| countryCode | [ISO 3166-1 alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code (2자리 국가 코드) |
| subdivisionCode? | Optional [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code (영토 구성 단위(시/군/구) 코드) |

### Creating data
`POST /covid-19/:countryCode/:subdivisionCode?`

#### Params
| Param | Explanation |
|---|---|
| countryCode | [ISO 3166-1 alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code (2자리 국가 코드) |
| subdivisionCode? | Optional [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code (영토 구성 단위(시/군/구) 코드) |

### Header
```
Authorization: Bearer <apiKey>
Content-Type: application/x-www-form-urlencoded
```

### Body
```
infectedCases: req.body.infectedCases,
deadCases: req.body.deadCases,
recoveredCases: req.body.recoveredCases,
timestamp: req.body.timestamp
```

## License
[MIT](LICENSE.md)

