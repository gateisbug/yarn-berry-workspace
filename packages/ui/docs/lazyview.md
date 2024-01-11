# LazyView
[back](./index.md)

## Usage
```tsx
import { LazyView, Skeleton } from '@practx/ui';

function App() {
  return (
    <LazyView 
      style={{ width: 200, height: 200 }} 
      fallback={<Skeleton />}
    >
      <img 
        src='#' 
        alt='image-url' 
        loading='lazy' 
        style={{ width: '100%' }} 
      />
    </LazyView>
  )
}
```

## Properties
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `fallback`  | `ReactNode`     | `undefined` |
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |

## Selector
| Class Name      | HTML Tag |
|-----------------|----------|
| `prx-lazy-view` | `div`    |
