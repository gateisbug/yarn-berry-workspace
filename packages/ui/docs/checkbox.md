# Checkbox
[back](./index.md)

## Usage
```tsx
import { Checkbox } from '@practx/ui';

function App() {
  return (
    <Checkbox
      name='text'
      multiple={false}
      disabled={false}
      checked={true}
      value='hello'
    >
      Hello
    </Checkbox>
  )
}
```

## Properties
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `value`     | `string`        | `undefined` |
| `name`      | `string`        | `undefined` |
| `checked`   | `boolean`       | `undefined` |
| `multiple`  | `boolean`       | `false`     |
| `disabled`  | `boolean`       | `false`     |
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |

## CSS Variable
| Variable     | Property | Default               |
|--------------|----------|-----------------------|
| `--width`    | `width`  | `1.5rem`              |
| `--height`   | `height` | `1.5rem`              |
| `--primary`  | `color`  | `#ffb74d`             |
| `--default`  | `color`  | `rgba(0, 0, 0, 0.6)`  |
| `--disabled` | `color`  | `rgba(0, 0, 0, 0.26)` |

## Selector
| Class Name        | HTML Tag |
|-------------------|----------|
| `prx-check-box`   | `label`  |
| `prx-check-root`  | `input`  |
| `prx-check-mark`  | `div`    |
