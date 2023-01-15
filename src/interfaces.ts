export interface IButtonConfigs {
  id: string;
  text: string;
  callback: () => unknown;
}

export interface IButton {
  configs: Omit<IButtonConfigs, 'id'>;
}

export interface ITextController {
  content: string;
  rightButtons: IButtonConfigs[];
  leftButtons: IButtonConfigs[];
  changeContent: (newValue: string) => void;
}
