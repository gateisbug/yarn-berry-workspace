import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLSpanAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type SkeletonVarientType = 'text' | 'circle' | 'paragraph';

export interface SkeletonProps extends Omit<HTMLSpanAttribute, 'children'> {
  varient?: SkeletonVarientType;
}
