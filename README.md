# Utilities

This is a tool back of random useful functions.

- [Getting Started](#getting-started)
- [Uuid](#uuid)
- [Contributing](#contributing)

## Getting Started

`npm install --save @r-t-p/utilities`

## UUID

```typescript
  import { generateUUID, isUUID } from "@r-t-p/utilities";

  for (let i = 0; i < 500; ++i) {
    let id = generateUUID();
    if (!isUUID(id)) {
      console.log(i, id);
      throw new Error("Failure");
    }
  }
```

## Contributing

```bash
npm run test # Runs the test runner
npm run build # Builds using `tsc` from configs in the `tsconfig.json`
npm run dev # Runs build and watches for changes
```
