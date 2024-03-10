export interface IModal {
  isOpen?: boolean;
  onSubmit: () => void;
  actionLabel: string;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
  body?: React.ReactElement;
}
