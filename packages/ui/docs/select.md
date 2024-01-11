# Select
[back](./index.md)

## Usage
### Single Selection
```tsx
import { Select } from '@practx/ui';

function App() {
  return (
    <Select.Form>
      {(setOpen, [value, setValue]) => (
        <>
          <Select.Field setOpen={setOpen} placeholder='please select values'>
            {Array.isArray(value) ? value.join() : value}
          </Select.Field>

          <Select.Box setOpen={setOpen}>
            {['hello1', 'hello2', 'hello3'].map((v, i) => (
              <Select.Item key={v} setValue={setValue} value={v}>
                Hello-{i}
              </Select.Item>
            ))}
          </Select.Box>
        </>
      )}
    </Select.Form>
  )
}
```
### Multi Selection
```tsx
import { Select } from '@practx/ui';

function App() {
  return (
    <Select.Form>
      {(setOpen, [value, setValue]) => (
        <>
          <Select.Field setOpen={setOpen} placeholder='please select values'>
            {value.length !== 0
              ? Array.isArray(value)
                ? value.join()
                : value
              : null}
          </Select.Field>

          <Select.Box>
            {['hello1', 'hello2', 'hello3'].map((v, i) => (
              <Select.Item key={v} setValue={setValue} value={v} multiple>
                Hello-{i + 1}
              </Select.Item>
            ))}
          </Select.Box>
        </>
      )}
    </Select.Form>
  )
}
```

## Properties
### Select.Form
| Props       | Type                   | Default     |
|-------------|------------------------|-------------|
| `children`  | `function` `ReactNode` | `undefined` |
| `className` | `string`               | `undefined` |
| `style`     | `CSSProperties`        | `undefined` |
### Select.Field
| Props         | Type                | Default     |
|---------------|---------------------|-------------|
| `setOpen`     | `SetState<boolean>` | `undefined` |
| `placeholder` | `string`            | `undefined` |
| `children`    | `ReactNode`         | `undefined` |
| `className`   | `string`            | `undefined` |
| `style`       | `CSSProperties`     | `undefined` |
### Select.Box
| Props       | Type                | Default     |
|-------------|---------------------|-------------|
| `setOpen`   | `SetState<boolean>` | `undefined` |
| `children`  | `ReactNode`         | `undefined` |
| `className` | `string`            | `undefined` |
| `style`     | `CSSProperties`     | `undefined` |
### Select.Item
| Props       | Type                                    | Default     |
|-------------|-----------------------------------------|-------------|
| `value`     | `string` `number` `string[]` `number[]` | `undefined` |
| `setValue`  | `SetState<SelectValue>`                 | `undefined` |
| `children`  | `ReactNode`                             | `undefined` |
| `className` | `string`                                | `undefined` |
| `style`     | `CSSProperties`                         | `undefined` |

## CSS Variable
| Variable        | Property           | Default                 |
|-----------------|--------------------|-------------------------|
| `--top`         | `top`              | `calc(100% + 0.125rem)` |
| `--left`        | `left`             | `0`                     |
| `--right`       | `right`            | `0`                     |
| `--radius`      | `border-radius`    | `0.25rem`               |
| `--border`      | `outline-color`    | `#c4c4c4`               |
| `--padding`     | `padding`          | `0.25rem 0.5rem`        |
| `--placeholder` | `color`            | `#666666`               |
| `--surface`     | `background-color` | `#f1f1f2`               |
| `--border`      | `outline-color`    | `rgba(0, 0, 0, 0.23)`   |

## Selector
| Class Name       | HTML Tag |
|------------------|----------|
| `prx-select-box` | `div`    |
