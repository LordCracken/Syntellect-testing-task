import { makeObservable, observable } from 'mobx';

import { IAutocompleteController, IHint } from '../interfaces';
import { getCountryByName } from '../api/apiService';

class AutocompleteControllerStore implements IAutocompleteController {
  content = '';
  hintsList: IHint[] = [];
  maxHints: number;
  isLoading = false;
  isTouched = false;

  constructor(maxHints = 3) {
    makeObservable(this, {
      content: observable,
      hintsList: observable,
      isLoading: observable,
      isTouched: observable,
    });
    this.maxHints = maxHints;
  }

  getHintsList = async (country: string) => {
    this.isLoading = true;

    this.hintsList = await getCountryByName(country);
    this.hintsList = this.hintsList.reduce((newList: IHint[], nextHint) => {
      if (!newList.find(hint => hint.name === nextHint.name)) {
        newList.push(nextHint);
      }

      return newList;
    }, []);

    this.hintsList = this.hintsList.slice(0, this.maxHints);

    this.isLoading = false;
  };

  setIsTouched = (value: boolean) => {
    this.isTouched = value;
  };

  changeContent = (newValue: string) => {
    this.content = newValue;
  };
}

export default AutocompleteControllerStore;
