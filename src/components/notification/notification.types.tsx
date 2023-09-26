export interface MessagePayload {
  content: string;
  icon: JSX.Element;
  duration?: number;
}

export type iconType = 'warning' | 'error' | 'default';
