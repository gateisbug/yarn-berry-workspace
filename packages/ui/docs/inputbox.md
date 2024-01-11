# InputBox
[back](./index.md)

## Usage
```tsx
import { Input, InputBox } from '@practx/ui';

function App() {
  return (
    <InputBox>
      <Input />
    </InputBox>
  )
}
```

## Properties
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |

## CSS Variable
| Variable    | Property        | Default               |
|-------------|-----------------|-----------------------|
| `--radius`  | `border-radius` | `0.25rem`             |
| `--padding` | `padding`       | `0.75rem 1rem`        |
| `--primary` | `outline-color` | `#ffb74d`             |
| `--border`  | `outline`       | `rgba(0, 0, 0, 0.23)` |
| `--invalid` | `outline-color` | `#d32f2f`             |

## Selector
| Class Name     | HTML Tag |
|----------------|----------|
| `prx-inputbox` | `label`  |
