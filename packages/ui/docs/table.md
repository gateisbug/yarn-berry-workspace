# Table
[back](./index.md)

## Usage
```tsx
import { Table } from '@practx/ui';

function App() {
  return (
    <Table.Container>
      <Table.Head>
        <Table.Row>
          <Table.Cell head>h1</Table.Cell>
          <Table.Cell head>h2</Table.Cell>
          <Table.Cell head>h3</Table.Cell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        <Table.Row>
          <Table.Cell>a1</Table.Cell>
          <Table.Cell>a2</Table.Cell>
          <Table.Cell>a3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>b1</Table.Cell>
          <Table.Cell>b2</Table.Cell>
          <Table.Cell>b3</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Container>
  )
}
```

## Properties
### Table.Container
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |
### Table.Head
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |
### Table.Body
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |
### Table.Row
| Props       | Type            | Default     |
|-------------|-----------------|-------------|
| `children`  | `ReactNode`     | `undefined` |
| `className` | `string`        | `undefined` |
| `style`     | `CSSProperties` | `undefined` |
### Table.Cell
| Props       | Type                   | Default     |
|-------------|------------------------|-------------|
| `head`      | `boolean`              | `false`     |
| `children`  | `function` `ReactNode` | `undefined` |
| `className` | `string`               | `undefined` |
| `style`     | `CSSProperties`        | `undefined` |

## CSS Variable
| Variable        | Property           | Default          |
|-----------------|--------------------|------------------|
| `--spacing`     | `border-spacing`   | `0`              |

## Selector
| Class Name       | HTML Tag |
|------------------|----------|
| `prx-table`      | `table`  |
| `prx-table-head` | `thead`  |
| `prx-table-body` | `tbody`  |
| `prx-table-row`  | `tr`     |
| `prx-table-td`   | `td`     |
| `prx-table-th`   | `th`     |
