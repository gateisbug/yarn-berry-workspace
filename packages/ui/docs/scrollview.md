# InputBox
[back](./index.md)

## Usage
```tsx
import { ScrollView } from '@practx/ui';

function App() {
  return (
    <div style={{ width: 400, height: 500 }}>
      <ScrollView>
        <div style={{ width: '100%', height: 2000, backgroundColor: '#003' }}>
          Hello
        </div>
      </ScrollView>
    </div>
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
- not available

## Selector
| Class Name   | HTML Tag |
|--------------|----------|
| `prx-scroll` | `div`    |
