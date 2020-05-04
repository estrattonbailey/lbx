# lbx ![npm](https://img.shields.io/npm/v/lbx) [![](https://badgen.net/bundlephobia/minzip/lbx)](https://bundlephobia.com/result?p=lbx)

Minimalist util to trap focus inside a container.

### Install

```
npm i lbx --save
```

# Usage

```javascript
import { lock } from "lbx";

const lockbox = lock(document.getElementById("modal"));

lockbox(); // destroy
```

### License

MIT License © [Eric Bailey](https://estrattonbailey.com)
