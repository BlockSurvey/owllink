export type IconName = 'owlImg' | 'owlIcon' | 'link' | 'verified';

export type IconTypes = 'primary' | 'secondary' | 'default';

export interface IconProps {
  className?: string;
  color?: string;
  size?: number;
  height?: number | string;
  type?: IconTypes;
  style?: object;
  name: IconName;
  width?: number | string;
}
