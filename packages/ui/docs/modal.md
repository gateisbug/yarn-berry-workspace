# Modal
[back](./index.md)

## Usage
```tsx
import { Button, Modal } from '@practx/ui';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        toggle
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        Hello
      </Modal>
    </div>
  )
}
```

## Properties
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `open`      | `boolean`       | `false`     |
| `onClose`   | `function`      | `undefined` |
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |

## CSS Variable
| Variable       | Property           | Default  |
|----------------|--------------------|----------|
| `--min-width`  | `min-width`        | `20rem`  |
| `--min-height` | `min-height`       | `16rem`  |
| `--surface`    | `background-color` | `#fff`   |
| `--radius`     | `border-radius`    | `0.5rem` |
| `--zindex`     | `z-index`          | `100`    |

## Selector
| Class Name   | HTML Tag |
|--------------|----------|
| `prx-shadow` | `div`    |
| `prx-modal`  | `div`    |
