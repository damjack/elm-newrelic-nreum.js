# NewRelic JS Ports reader

## Purpose

ElmNewRelic JS library is a wrapper around NewRelic Nreum SDK that support ELM via Ports and standardize the methods that it use to register events

## Import

```js
import * as elmNewRelic from 'elm-newrelic-nreum';

const elmApp = Elm.Main.init({
  node: document.getElementById('root'),
  flags: {},
});

elmNewRelic.cspEvent();
elmNewRelic.elmPortsToJS(elmApp);
```

## Commands

Production build:
```sh
$ yarn build
```

Run development:
```sh
$ yarn dev
```

For linting or format code, run:
```sh
$ yarn format
$ yarn lint
```
