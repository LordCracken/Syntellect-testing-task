import { ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

import Button from './Button';
import { ITextController } from '../interfaces';

const TextController = observer(({ store }: { store: ITextController }) => {
  const { content, leftButtons, rightButtons, changeContent } = store;

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeContent(event.target.value || '');
  };

  return (
    <>
      {leftButtons.map(btn => (
        <Button key={btn.id} configs={btn} />
      ))}
      <input type="text" value={content} onChange={inputChangeHandler} />
      {rightButtons.map(btn => (
        <Button key={btn.id} configs={btn} />
      ))}
    </>
  );
});

TextController.displayName = 'TextController';
export default TextController;
