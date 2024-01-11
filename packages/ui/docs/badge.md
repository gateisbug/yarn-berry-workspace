# Badge
[back](./index.md)

## Usage
```tsx
import { Badge } from '@practx/ui';

function App() {
  return (
    <Badge
      content={1}
      varient='dot'
      max={99}
      vertical='top'
      horizontal='right'
    >
      Hello
    </Badge>
  )
}
```

## Properties
| Props        | Type                 | Default     |
|--------------|----------------------|-------------|
| `content`    | `number` `string`    | `undefined` |
| `varient`    | `'standard'` `'dot'` | `'fill'`    |
| `show`       | `boolean`            | `true`      |
| `max`        | `number`             | `99`        |
| `vertical`   | `'top'` `'bottom'`   | `'top'`     |
| `horizontal` | `'right'` `'left'`   | `'right'`   |
| `children`   | `ReactNode`          | `undefined` |
| `className`  | `string`             | `undefined` |
| `style`      | `CSSProperties`      | `undefined` |

## CSS Variable
| Variable      | Property           | Default             |
|---------------|--------------------|---------------------|
| `--primary`   | `background-color` | `#ffb74d`           |
| `--font-size` | `font-size`        | `0.75rem`           |
| `--padding`   | `padding`          | `0.25rem 0.5rem`    |
| `--radius`    | `border-radius`    | `0.75rem` `0.25rem` |
| `--width`     | `width`            | `0.5rem`            |
| `--height`    | `height`           | `0.5rem`            |

## Selector
| Class Name       | HTML Tag |
|------------------|----------|
| `prx-badge-box`  | `span`   |
| `prx-badge`      | `span`   |
