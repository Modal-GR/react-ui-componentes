export interface IHoverType {
  ZoomIn?: boolean;
  ZoomOut?: boolean;
  Outline?: boolean;
}

export interface IProps {
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  children: string;
  color?: string;
  hoverType?: IHoverType;
  onClickButton?: () => void;
}

export interface IButton {
  backgroundColor: string;
  color: string;
  borderRadius: string;
  borderColor?: string;
  hoverType?: IHoverType;
}
