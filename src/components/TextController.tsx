import { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

import Button from './Button';
import { ITextController } from '../interfaces';
import classes from './TextController.module.scss';

const TextController = observer(({ store }: { store: ITextController }) => {
  const { content, leftButtons, rightButtons, changeContent } = store;

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeContent(event.target.value || '');
  };

  return (
    <div className={classes.textController}>
      {leftButtons.map(btn => (
        <Button key={btn.id} configs={btn} />
      ))}
      <input type="text" value={content} onChange={inputChangeHandler} />
      {rightButtons.map(btn => (
        <Button key={btn.id} configs={btn} />
      ))}
    </div>
  );
});

TextController.displayName = 'TextController';
export default TextController;
