# Input
[back](./index.md)

## Usage
```tsx
import { Input, InputBox } from '@practx/ui';

function App() {
  return (
    <InputBox>
      <Input
        type='text'
        readOnly={false}
        disabled={false}
        required={false}
        placeholder='Please input here'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </InputBox>
  )
}
```

## Properties
| Props         | Type                                                        | Default      |
|---------------|-------------------------------------------------------------|--------------|
| `type`        | `'text'` `'password'` `'url'` `'email'` `'date'` `'number'` | `'text'`     |
| `value`       | `string` `string[]` `number`                                | `undefined`  |
| `onChange`    | `function`                                                  | `undefined`  |
| `readOnly`    | `boolean`                                                   | `false`      |
| `disabled`    | `boolean`                                                   | `false`      |
| `required`    | `boolean`                                                   | `false`      |
| `placeholder` | `string`                                                    | `undefined`  |
| `children`    | `ReactNode`                                                 | `undefined`  |
| `className`   | `string`                                                    | `undefined`  |
| `style`       | `CSSProperties`                                             | `undefined`  |

## CSS Variable
| Variable         | Property | Default               |
|------------------|----------|-----------------------|
| `--placeholder`  | `color`  | `#6B7A90`             |
| `--disabled`     | `color`  | `rgba(0, 0, 0, 0.26)` |

## Selector
| Class Name     | HTML Tag |
|----------------|----------|
| `prx-input`    | `input`  |
