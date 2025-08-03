# @kedata-software/toolkit-js

A collection of useful TypeScript functions.

## Installation

```bash
# npm
npm install @kedata/toolkit-js

# yarn
yarn add @kedata/toolkit-js

# pnpm
pnpm add @kedata/toolkit-js
```

## Usage

```typescript
import { functionName } from '@kedata/toolkit-js';
```

## Functions

### `convertBytes`

An object with methods to convert bytes to other units (KB, MB, GB).

**Methods:**

*   `toKB(bytes: number): number`
*   `toMB(bytes: number): number`
*   `toGB(bytes: number): number`

**Example:**

```typescript
import { convertBytes } from '@kedata/toolkit-js';

convertBytes.toKB(1024); // 1
convertBytes.toMB(1048576); // 1
convertBytes.toGB(1073741824); // 1
```

### `createBasicToken`

Creates a base64 encoded basic token from a username and password.

**Parameters:**

*   `params: { username: string; password: string }`

**Example:**

```typescript
import { createBasicToken } from '@kedata/toolkit-js';

const token = createBasicToken({ username: 'test', password: 'password' });
// token will be 'dGVzdDpwYXNzd29yZA=='
```

### `dataAttrBoolean`

Returns an empty string for a truthy value, otherwise `undefined`. Useful for data attributes that should only be present when a condition is true.

**Parameters:**

*   `value?: unknown`

**Example:**

```typescript
import { dataAttrBoolean } from '@kedata/toolkit-js';

dataAttrBoolean(true); // ''
dataAttrBoolean(false); // undefined
```

### `decodeBasicToken`

Decodes a base64 encoded basic token and returns the username and password.

**Parameters:**

*   `token: string`

**Example:**

```typescript
import { decodeBasicToken } from '@kedata/toolkit-js';

const credentials = decodeBasicToken('dGVzdDpwYXNzd29yZA==');
// credentials will be { username: 'test', password: 'password' }
```

### `defaultArray`

Returns the array if it's not `null` or `undefined`, otherwise returns an empty array.

**Parameters:**

*   `value: T[] | undefined | null`

**Example:**

```typescript
import { defaultArray } from '@kedata/toolkit-js';

defaultArray([1, 2, 3]); // [1, 2, 3]
defaultArray(null); // []
defaultArray(undefined); // []
```

### `defaultObject`

Returns the object if it's not `null` or `undefined`, otherwise returns an empty object.

**Parameters:**

*   `value: T | undefined | null`

**Example:**

```typescript
import { defaultObject } from '@kedata/toolkit-js';

defaultObject({ a: 1 }); // { a: 1 }
defaultObject(null); // {}
defaultObject(undefined); // {}
```

### `delayAsync`

Delays execution for a specified number of milliseconds.

**Parameters:**

*   `ms: number`

**Example:**

```typescript
import { delayAsync } from '@kedata/toolkit-js';

await delayAsync(1000); // waits 1 second
```

### `getBytes`

An object with methods to convert other units (KB, MB, GB) to bytes.

**Methods:**

*   `fromKB(KB: number): number`
*   `fromMB(MB: number): number`
*   `fromGB(GB: number): number`

**Example:**

```typescript
import { getBytes } from '@kedata/toolkit-js';

getBytes.fromKB(1); // 1024
getBytes.fromMB(1); // 1048576
getBytes.fromGB(1); // 1073741824
```

### `isObjectEmpty`

Checks if an object is empty.

**Parameters:**

*   `obj?: Record<any, any> | null`

**Example:**

```typescript
import { isObjectEmpty } from '@kedata/toolkit-js';

isObjectEmpty({}); // true
isObjectEmpty({ a: 1 }); // false
```

### `nameInitials`

Generates initials from a name.

**Parameters:**

*   `name: string`

**Example:**

```typescript
import { nameInitials } from '@kedata/toolkit-js';

nameInitials('John Doe'); // 'JD'
nameInitials('John'); // 'J'
```

### `omitProps`

Omits specified properties from an object.

**Parameters:**

*   `obj: T`
*   `keys: K[]`

**Example:**

```typescript
import { omitProps } from '@kedata/toolkit-js';

const obj = { a: 1, b: 2, c: 3 };
omitProps(obj, ['b', 'c']); // { a: 1 }
```

### `parseEmail`

Parses an email address and returns the username and host.

**Parameters:**

*   `email: string`

**Example:**

```typescript
import { parseEmail } from '@kedata/toolkit-js';

parseEmail('test@example.com'); // { username: 'test', host: 'example.com' }
```

### `toSafeNumber`

Converts a string to a number, returning 0 if the conversion results in `NaN`.

**Parameters:**

*   `value: string`

**Example:**

```typescript
import { toSafeNumber } from '@kedata/toolkit-js';

toSafeNumber('123'); // 123
toSafeNumber('abc'); // 0
```

### `tryAsync`

Wraps an async function in a try-catch block and returns a tuple with the result and error.

**Parameters:**

*   `fn: () => Promise<D>`

**Example:**

```typescript
import { tryAsync } from '@kedata/toolkit-js';

const [data, error] = await tryAsync(() => Promise.resolve('success'));
// data will be 'success', error will be undefined

const [data2, error2] = await tryAsync(() => Promise.reject('failure'));
// data2 will be undefined, error2 will be 'failure'
```
