# Chip
[back](./index.md)

## Usage
```tsx
import { Chip } from '@practx/ui';

function App() {
  return (
    <Chip varient='fill'>
      Hello
    </Chip>
  )
}
```

## Properties
| Props       | Type                        | Default     |
|-------------|-----------------------------|-------------|
| `varient`   | `'fill'` `'line'` `'text'`  | `'fill'`    |
| `children`  | `ReactNode`                 | `undefined` |
| `className` | `string`                    | `undefined` |
| `style`     | `CSSProperties`             | `undefined` |

## CSS Variable
| Variable       | Property                             | Default       |
|----------------|--------------------------------------|---------------|
| `--padding`    | `padding`                            | `0.5rem 1rem` |
| `--radius`     | `border-radius`                      | `3rem`        |
| `--primary`    | `background-color` `outline` `color` | `#ffb74d`     |
| `--on-primary` | `color`                              | `#1c2025`     |

## Selector
| Class Name       | HTML Tag |
|------------------|----------|
| `prx-chip`       | `span`   |
