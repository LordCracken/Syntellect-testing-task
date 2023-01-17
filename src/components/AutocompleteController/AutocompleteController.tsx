import { ChangeEvent, useRef } from 'react';
import { observer } from 'mobx-react-lite';

import HintsList from './HintsList';
import useClickOut from '../../hooks/useClickOut';

import { IAutocompleteCtrComponent } from '../../interfaces';
import classes from './AutocompleteController.module.scss';

const AutocompleteController = observer(({ store }: { store: IAutocompleteCtrComponent }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { content, isTouched, getHintsList, changeContent, setIsTouched } = store;

  useClickOut(dropdownRef, inputRef, optionsRef, isTouched, setIsTouched);

  const focusHandler = () => {
    setIsTouched(true);
  };

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;

    changeContent(eventValue);
    getHintsList(eventValue);
  };

  return (
    <div ref={dropdownRef} className={classes.autocompleteController}>
      <input ref={inputRef} value={content} onChange={changeInputHandler} onFocus={focusHandler} />
      {isTouched && <HintsList ref={optionsRef} store={store} />}
    </div>
  );
});

AutocompleteController.displayName = 'AutocompleteController';
export default AutocompleteController;
