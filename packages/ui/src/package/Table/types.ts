import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLTableAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export interface TableContainerProps extends HTMLTableAttribute {}

type HTMLTableSectionAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;
export interface THeadProps extends HTMLTableSectionAttribute {}
export interface TBodyProps extends HTMLTableSectionAttribute {}

type HTMLTableRowAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export interface TableRowProps extends HTMLTableRowAttribute {}

type HTMLTableCellAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export interface TableCellProps extends HTMLTableCellAttribute {
  head?: boolean;
}
