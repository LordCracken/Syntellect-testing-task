import { makeObservable, observable } from 'mobx';
import { IButtonConfigs, ITextController } from '../interfaces';

class TextControllerStore implements ITextController {
  content: string;
  leftButtons: IButtonConfigs[];
  rightButtons: IButtonConfigs[];

  constructor(
    content = '',
    rightButtons: IButtonConfigs[] = [],
    leftButtons: IButtonConfigs[] = [],
  ) {
    makeObservable(this, {
      content: observable,
    });
    this.content = content;
    this.rightButtons = rightButtons;
    this.leftButtons = leftButtons;
  }

  changeContent = (newValue: string) => {
    this.content = newValue;
  };
}

export default TextControllerStore;
