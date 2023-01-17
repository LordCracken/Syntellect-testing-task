export interface IButtonConfigs {
  id: string;
  text: string;
  callback: () => unknown;
}

export interface IButton {
  configs: Omit<IButtonConfigs, 'id'>;
}

interface IContentControl {
  content: string;
  changeContent: (newValue: string) => void;
}

export interface ITextController extends IContentControl {
  rightButtons: IButtonConfigs[];
  leftButtons: IButtonConfigs[];
}

export type IHint = Record<'name' | 'fullName' | 'flag', string>;

export interface IAutocompleteController extends IContentControl {
  hintsList: IHint[];
  maxHints: number;
  isLoading: boolean;
  getHintsList: (country: string) => void;
}

export interface IAutocompleteInput {
  store: Pick<IAutocompleteController, 'content' | 'getHintsList' | 'changeContent'>;
  onTouch: (value: boolean) => void;
}

export type IAutocompleteCtrComponent = Omit<IAutocompleteController, 'maxHints'>;

export interface IHintsList {
  store: IAutocompleteCtrComponent;
  onTouch: (value: boolean) => void;
}

export interface IHintListItem {
  hint: IHint;
  onChange: (newValue: string) => void;
  onSelect: (value: boolean) => void;
}
