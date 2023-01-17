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

export type IHint = Record<'name' | 'fullName' | 'flag', string>;

export interface IAutocompleteController {
  content: string;
  hintsList: IHint[];
  maxHints: number;
  isLoading: boolean;
  isTouched: boolean;
  getHintsList: (country: string) => void;
  setIsTouched: (value: boolean) => void;
  changeContent: (newValue: string) => void;
}

export type IAutocompleteCtrComponent = Omit<IAutocompleteController, 'maxHints'>;

export interface IHintsList {
  list: IHint[];
  isLoading: boolean;
  hasValue: boolean;
}
