import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface ModalProps extends HTMLDivAttribute {
  open: boolean;
  onClose?: () => void;
}
