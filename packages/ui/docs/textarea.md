# Textarea
[back](./index.md)

## Usage
```tsx
import { InputBox, Textarea } from '@practx/ui';

function App() {
  return (
    <InputBox>
      <Textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={false}
        readOnly={false}
        required={false}
        autoResize={true}
        rows={1}
        maxHeight={105}
        placeholder='Please input here'
      />
    </InputBox>
  )
}
```

## Properties
| Props         | Type            | Default     |
|---------------|-----------------|-------------|
| `value`       | `string`        | `undefined` |
| `onChange`    | `function`      | `undefined` |
| `disabled`    | `boolean`       | `false`     |
| `readOnly`    | `boolean`       | `false`     |
| `required`    | `boolean`       | `false`     |
| `autoResize`  | `boolean`       | `true`      |
| `placeholder` | `string`        | `undefined` |
| `rows`        | `number`        | `1`         |
| `maxHeight`   | `number`        | `undefined` |
| `className`   | `string`        | `undefined` |
| `style`       | `CSSProperties` | `undefined` |

## CSS Variable
| Variable         | Property | Default               |
|------------------|----------|-----------------------|
| `--placeholder`  | `color`  | `#6B7A90`             |
| `--disabled`     | `color`  | `rgba(0, 0, 0, 0.26)` |

## Selector
| Class Name     | HTML Tag   |
|----------------|------------|
| `prx-textarea` | `textarea` |
