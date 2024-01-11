# Skeleton
[back](./index.md)

## Usage
```tsx
import { Skeleton } from '@practx/ui';

function App() {
  return (
    <Skeleton varient='text' />
  )
}
```

## Properties
| Props       | Type                        | Default     |
|-------------|-----------------------------|-------------|
| `varient`   | `text` `circle` `paragraph` | `text`      |
| `className` | `string`                    | `undefined` |
| `style`     | `CSSProperties`             | `undefined` |

## CSS Variable
| Variable        | Property           | Default               |
|-----------------|--------------------|-----------------------|
| `--surface`     | `background-color` | `rgba(0, 0, 0, 0.11)` |

## Selector
| Class Name     | HTML Tag |
|----------------|----------|
| `prx-skeleton` | `span`   |
