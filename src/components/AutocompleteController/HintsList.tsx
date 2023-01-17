import { forwardRef } from 'react';
import { observer } from 'mobx-react-lite';

import HintListItem from './HintListItem';

import { IAutocompleteCtrComponent } from '../../interfaces';
import classes from './HintsList.module.scss';

const HintsList = forwardRef<HTMLUListElement, { store: IAutocompleteCtrComponent }>(
  ({ store }, ref) => {
    const { content, hintsList, isLoading, changeContent, setIsTouched } = store;
    let status = null;

    if (!content) {
      return null;
    }

    if (content && hintsList.length === 0) {
      status = <li>Ничего не найдено</li>;
    }

    if (isLoading) {
      status = <li>Загрузка...</li>;
    }

    const displayList = hintsList.map(hint => (
      <HintListItem key={hint.name} hint={hint} onChange={changeContent} onSelect={setIsTouched} />
    ));

    return (
      <ul ref={ref} className={classes.hintsList}>
        {!isLoading && !!content && hintsList.length ? displayList : status}
      </ul>
    );
  },
);
HintsList.displayName = 'HintsList';
export default observer(HintsList);
