import { ChangeEvent, forwardRef } from 'react';
import { observer } from 'mobx-react-lite';

import { IAutocompleteInput } from '../../interfaces';

const AutocompleteInput = forwardRef<HTMLInputElement, IAutocompleteInput>(
  ({ onTouch, store }, ref) => {
    const { content, changeContent, getHintsList } = store;

    const focusInputHandler = () => {
      onTouch(true);
    };

    const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const eventValue = event.target.value;

      changeContent(eventValue);
      getHintsList(eventValue);
    };

    return (
      <input ref={ref} value={content} onChange={changeInputHandler} onFocus={focusInputHandler} />
    );
  },
);

AutocompleteInput.displayName = 'AutocompleteInput';
export default observer(AutocompleteInput);
