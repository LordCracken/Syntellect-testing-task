import { useRef } from 'react';

import HintsList from './HintsList';
import AutocompleteInput from './AutocompleteInput';
import useClickOut from '../../hooks/useClickOut';

import { IAutocompleteCtrComponent } from '../../interfaces';
import classes from './AutocompleteController.module.scss';

const AutocompleteController = ({ store }: { store: IAutocompleteCtrComponent }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isTouched, setIsTouched] = useClickOut(dropdownRef, inputRef, optionsRef);

  const touchHandler = (value: boolean) => {
    setIsTouched(value);
  };

  return (
    <div ref={dropdownRef} className={classes.autocompleteController}>
      <AutocompleteInput ref={inputRef} onTouch={touchHandler} store={store} />
      {isTouched && <HintsList ref={optionsRef} store={store} onTouch={touchHandler} />}
    </div>
  );
};

export default AutocompleteController;
