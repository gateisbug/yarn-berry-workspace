# Radio
[back](./index.md)

## Usage
```tsx
import { Radio } from '@practx/ui';

function App() {
  return (
    <Radio name='text' disabled={false} checked={true} value='hello'>
      Hello
    </Radio>
  )
}
```

## Properties
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `value`     | `string`        | `undefined` |
| `name`      | `string`        | `undefined` |
| `checked`   | `boolean`       | `undefined` |
| `disabled`  | `boolean`       | `false`     |
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |

## CSS Variable
| Variable     | Property | Default               |
|--------------|----------|-----------------------|
| `--primary`  | `color`  | `#ffb74d`             |
| `--default`  | `color`  | `rgba(0, 0, 0, 0.6)`  |
| `--disabled` | `color`  | `rgba(0, 0, 0, 0.26)` |

## Selector
| Class Name        | HTML Tag |
|-------------------|----------|
| `prx-radio-box`   | `label`  |
| `prx-radio-root`  | `input`  |
| `prx-radio-mark`  | `div`    |
